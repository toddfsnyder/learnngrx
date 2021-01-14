import { createSelector } from '@ngrx/store';
import { basicContext } from '../model/basic-model';

export interface AppState {
  basicContext: basicContext;
}

export const selectLearnContext = (state: AppState) => state.basicContext
export const getTest = createSelector(
  selectLearnContext,
  state => state.test
)

export const getCount = createSelector(
  selectLearnContext,
  state => state.count
)

