// @flow
import { createAction } from 'redux-actions';
import { put, takeLatest } from 'redux-saga/effects';
import { combineSaga } from '../../../utils';
import { searchAutoCompleteReducer as reducer } from '../state/search-auto-complete.reducer';
import { loadWordRecommendationsAction } from './load-word-recommendations.usecase';


// onchange as you type -> save your searchKey and at the same time I want to get recommendations

const prefix = `app/${reducer.sliceName}/`;

const UPDATE_SEARCH_KEY: string = `${prefix}UPDATE_SEARCH_KEY`;
export const updateSearchKeyAction = createAction(UPDATE_SEARCH_KEY);
const UPDATE_SEARCH_KEY_SUCCESS: string = `${prefix}UPDATE_SEARCH_KEY_SUCCESS`;
const UPDATE_SEARCH_KEY_ERROR: string = `${prefix}UPDATE_SEARCH_KEY_ERROR`;

function* updateSearchKeyWatch(): any {
    yield takeLatest(UPDATE_SEARCH_KEY, updateSearchKeyWorker);
}
combineSaga(updateSearchKeyWatch);

function* updateSearchKeyWorker(action: any): any {
    try {
        const searchKey = action.payload;
        yield put(createAction(UPDATE_SEARCH_KEY_SUCCESS)(searchKey));
        yield put(loadWordRecommendationsAction());
    } catch (e) {
        yield put(createAction(UPDATE_SEARCH_KEY_ERROR)(e));
    }
}

const searchAutoCompleteReduceHandlers = {
    [UPDATE_SEARCH_KEY]: (state) => {
        return {
            ...state,
            isLoading: true,
        };
    },
    [UPDATE_SEARCH_KEY_SUCCESS]: (state, action) => {
        return {
            ...state,
            isLoading: false,
            searchKey: action.payload,
        };
    },
    [UPDATE_SEARCH_KEY_ERROR]: (state) => {
        return {
            ...state,
            isLoading: false,
        };
    },
};
reducer.addHandlers(searchAutoCompleteReduceHandlers);


































