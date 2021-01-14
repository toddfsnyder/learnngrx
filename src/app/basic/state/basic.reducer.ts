import { createReducer, on } from '@ngrx/store';
import { initialBasicState } from '../model/basic-model';
import { basicAction } from './basic.action';

const _basicReducer = createReducer(
  initialBasicState,
  on(basicAction, state => ({ ...state, test: "Updated via Simple Action" }))
);

export function basicReducer(state, action) {
  return _basicReducer(state, action);
}
