import { createSelector } from '@ngrx/store';
import { componentContext } from '../model/component-model';

export interface AppState {
  componentContext: componentContext;
}

export const selectComponentContext = (state: AppState) => state.componentContext

export const getCount_component = createSelector(
    selectComponentContext,
    state => state.count
)

