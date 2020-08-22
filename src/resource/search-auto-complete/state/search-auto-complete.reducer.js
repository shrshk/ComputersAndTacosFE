
// root reducer which lives in you browser
// -> emp data -> orders data -> ....

// root reducer -> {... emp reducer, order reducer....}

// @flow
import { createAndCombineSliceReducer } from '../../../utils';

export const sliceName = 'searchAutoCompleteSlice';

const initialState = {
    isLoading: false,
    searchKey: ' ',
    searchResults: {},
    prefixList: [],
    allRecommendations: {},
};

export const searchAutoCompleteReducer = createAndCombineSliceReducer(
    sliceName,
    initialState
);



