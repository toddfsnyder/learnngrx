import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { baseDemoService } from '../services/demo-service';
import { callLearnEffect, handleLeanError, handleLeanSuccess } from './learn.action';

@Injectable()
export class learnEffects {
  loadCustomers$ = createEffect(() =>
     this.actions$.pipe(
      ofType(
        callLearnEffect
      ),
      exhaustMap(() =>
        this.dataService.getCustomers().pipe(
          map(data => handleLeanSuccess({ payload: data})),
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
    private dataService: baseDemoService
  ) {}
}
