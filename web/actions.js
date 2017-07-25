import {createAction} from 'redux-actions';

export const load = createAction('LOAD');
export const loadFulfilled = createAction('LOAD_FULFILLED');
export const like = createAction('LIKE');
export const remove = createAction('REMOVE');
