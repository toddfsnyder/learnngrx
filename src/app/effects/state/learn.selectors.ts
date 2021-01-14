import { createSelector } from '@ngrx/store';
import { learnContext } from '../model/learn-model';

export interface AppState {
    learnContext: learnContext;
}

export const selectLearnContext = (state: AppState) => state.learnContext

export const getTest_learn = createSelector(
    selectLearnContext,
    state => state.test
)

export const getCustomers_learn = createSelector(
    selectLearnContext,
    state => state.customers
)

export const getSelectedCustomer_learn = createSelector(
    selectLearnContext,
    state => state.selectedCustomer
)
