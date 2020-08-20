// @flow
import { createSelector } from 'reselect';
import { searchAutoCompleteReducer } from './search-auto-complete.reducer';

const sliceSelector = (state) => state[searchAutoCompleteReducer.sliceName];

const searchWordsFormSelector = (state: any) =>
    state.form['search-words-form-component'];

export const searchWordsFormInitialValuesSelector = createSelector(() => {
    return {
        searchKey: ' ',
        recommendations: []
    };
});

export const recommendationsSelector = createSelector(() => {
    return ['a', 'b', 'c'];
});

export const searchWordsFormValuesSelector = createSelector(
    searchWordsFormSelector,
    (slice) => slice?.values ?? {}
);

export const searchKeySelector = createSelector(
    sliceSelector,
    (slice) => slice.searchKey
);

export const searchResultsSelectorFactory = (searchKey) => createSelector(
    sliceSelector,
    (slice) => {
        const { searchResults } = slice;
        return searchResults[searchKey] || [];
    }
);

export const searchResultsSelector = createSelector(
    sliceSelector,
    (slice) =>  {
        console.log(slice.searchResults + "42");
        return slice.searchResults
    }
);