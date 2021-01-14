import { createReducer, on } from "@ngrx/store";
import { initialLearnState } from "../model/learn-model";
import { filterDataSuccess, handleLeanError, handleLeanSuccess, setFilterId } from "./learn.action";

const _learnReducer = createReducer(
    initialLearnState,
    on(handleLeanSuccess,(state, { payload }) => ({...state, customers:  payload })),
    on(handleLeanError,(state, { error }) => ({...state, test:  error })),
    on(setFilterId,(state, { payload }) => ({...state, filterId:  payload })),
    on(filterDataSuccess,(state, { payload }) => ({...state, selectedCustomer:  payload }))
);

export function learnReducer(state, action) {
  return _learnReducer(state, action);
}
