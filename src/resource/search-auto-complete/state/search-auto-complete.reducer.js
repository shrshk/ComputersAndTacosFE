// @flow
import { createAndCombineSliceReducer } from '../../../utils';

export const sliceName = 'searchAutoCompleteSlice';

export type searchAutoCompleteSlice = {
    isLoading: boolean,
    searchKey: string,
    searchResults: Object,
    prefixList: Array<string>
};

const initialState: searchAutoCompleteSlice = {
    isLoading: false,
    searchKey: ' ',
    searchResults : {},
    prefixList: [],
    allRecommendations: {},
};

export const searchAutoCompleteReducer = createAndCombineSliceReducer(
    sliceName,
    initialState
);
