import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from '../../../shared/model/customer';
import { getCount, getTest } from '../../state/basic.selectors';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  testData$: Observable<string>;
  countData$: Observable<number>;

  constructor(private store: Store<{}>, ) { }

  ngOnInit(): void {
    this.testData$ = this.store.select(getTest);
    this.countData$ = this.store.select(getCount);
  }

  loadData() {
    //this.store.dispatch(learnSimpleAction());

   // this.store.dispatch(learnSimpleActionProps({ payload: "Using Actions to Change the store" }));
    //this.store.dispatch(callLearnEffect());
  }

}
