// @flow
import { createAndCombineSliceReducer } from '../../../utils';

export const sliceName = 'searchAutoCompleteSlice';

export type searchAutoCompleteSlice = {
    isLoading: boolean,
    searchKey: string,
    searchResults: Object
};

const initialState: searchAutoCompleteSlice = {
    isLoading: false,
    searchKey: ' ',
    searchResults : {}
};

export const searchAutoCompleteReducer = createAndCombineSliceReducer(
    sliceName,
    initialState
);
