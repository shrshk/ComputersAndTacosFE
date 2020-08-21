// @flow
import { createSelector } from 'reselect';
import { searchAutoCompleteReducer } from './search-auto-complete.reducer';

const sliceSelector = (state) => state[searchAutoCompleteReducer.sliceName];

export const searchKeySelector = createSelector(
    sliceSelector,
    (slice) => slice.searchKey
);

export const searchResultsSelector = createSelector(
    sliceSelector,
    (slice) =>  {
        return slice.searchResults
    }
);