import { createSelector } from '@ngrx/store';

export const selectCount = (state: { counter: number }) => state.counter;
export const doubleCount = createSelector(selectCount, (state) => state * 2);
