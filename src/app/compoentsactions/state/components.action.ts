import { createAction, props } from '@ngrx/store';

// Working with Actions
export const addAction = createAction('addAction');
export const subAction = createAction('subAction'); 
export const resetAction = createAction('resetAction'); 

// Action that passes
export const learnActionProps = createAction('learnActionProps',  props<{ payload: any }>());
