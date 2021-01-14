import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addAction, learnActionProps, resetAction, subAction } from '../../state/components.action';
import { getCount_component } from '../../state/components.selectors';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  countData$: Observable<number>;
  countValue: number = 25;

  constructor(private store: Store<{}>, ) { }

  ngOnInit(): void {
    this.countData$ = this.store.select(getCount_component);
  }

  addToCount() {
    this.store.dispatch(addAction());
  }

  subFromCount() {
    this.store.dispatch(subAction());
  }

  resetCount() {
    this.store.dispatch(resetAction());
  }

  setCount() {
    this.store.dispatch(learnActionProps({ payload: this.countValue }));
   }

}
