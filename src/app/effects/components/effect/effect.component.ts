import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/model/customer';
import { callLearnEffect, filterData, setFilterId } from '../../state/learn.action';
import { getCustomers_learn, getSelectedCustomer_learn, getTest_learn } from '../../state/learn.selectors';

@Component({
  selector: 'app-effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.scss']
})
export class EffectComponent implements OnInit {

  testData$: Observable<string>;
  customers$: Observable<Array<Customer>>;
  selectedCustomer$: Observable<Customer>;

  idValue: number = 0;

  constructor(private store: Store<{}>, ) { }

  ngOnInit(): void {
    this.testData$ = this.store.select(getTest_learn);
    this.customers$ = this.store.select(getCustomers_learn);
    this.selectedCustomer$ = this.store.select(getSelectedCustomer_learn);
  }

  loadData() {
      this.store.dispatch(callLearnEffect());
  }

  filterData() {
    this.store.dispatch(setFilterId({ payload: this.idValue }));
    this.store.dispatch(filterData());
  }

}