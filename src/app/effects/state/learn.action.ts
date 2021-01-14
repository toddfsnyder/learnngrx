import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/shared/model/customer';

// Actions for calling Effects
export const callLearnEffect = createAction('callLearnEffect'); 
export const handleLeanSuccess = createAction('handleLeanSuccess',   props<{ payload: any[] }>());
export const handleLeanError = createAction('handleLeanError',  props<{ error: any }>());

// Actions for Filtering Data
export const setFilterId = createAction('setFilterId',  props<{ payload: number }>());
export const filterData = createAction('filterData'); 
export const filterDataSuccess = createAction('filterDataSuccess',   props<{ payload: Customer }>());
