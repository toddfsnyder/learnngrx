import { createReducer, on } from '@ngrx/store';
import { initialComponentState } from '../model/component-model';
import { addAction, learnActionProps, resetAction, subAction } from './components.action';

const _componentReducer = createReducer(
    initialComponentState,
    on(addAction, state => ({ ...state, count: state.count + 1})),
    on(subAction, state => ({ ...state, count: state.count - 1})),
    on(resetAction, state => ({ ...state, count: 0 })),
    on(learnActionProps,(state, { payload }) => ({...state, count:  payload })),
);

export function componentReducer(state, action) {
  return _componentReducer(state, action);
}
