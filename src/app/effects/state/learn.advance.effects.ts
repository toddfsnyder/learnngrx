import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { appContext } from 'src/app/shared/model/app-model';
import { learnContext } from '../model/learn-model';
import { baseDemoService } from '../services/demo-service';
import { filterData, filterDataSuccess, handleLeanError, handleLeanSuccess } from './learn.action';

@Injectable()
export class learnAdvanceEffects {
  loadCustomers$ = createEffect(() =>
     this.actions$.pipe(
      ofType(
        filterData
      ),
      withLatestFrom(this.store, (action, state: appContext) => state),
         exhaustMap((state: appContext) =>
        this.dataService.getCustomer(state.learnContext.filterId).pipe(
          map(data => filterDataSuccess({ payload: data[0]})),
          catchError(() =>
            of(
              handleLeanError({
                error: 'Unable to login user'
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<appContext>,
    private dataService: baseDemoService
  ) {}
}
