// @flow
import { createAction } from 'redux-actions';
import { call, put, takeLatest, select, debounce } from 'redux-saga/effects';
import { combineSaga } from '../../../utils';
import { searchAutoCompleteReducer as reducer } from '../state/search-auto-complete.reducer';
import {  loadWordRecommendations } from '../actions/apis/load-word-recommendations';
import { searchKeySelector } from '../state/search-auto-complete.selectors';

// comp -> load words -> reducer
// redux -> wordList -> comp -> comp render
// dispatch action -> save data -> return data to the comp/UI

const prefix = `app/${reducer.sliceName}/`;

const LOAD_WORD_RECOMMENDATIONS: string = `${prefix}LOAD_WORD_RECOMMENDATIONS`;
export const loadWordRecommendationsAction = createAction(LOAD_WORD_RECOMMENDATIONS);
const LOAD_WORD_RECOMMENDATIONS_SUCCESS: string = `${prefix}LOAD_WORD_RECOMMENDATIONS_SUCCESS`;
const LOAD_WORD_RECOMMENDATIONS_ERROR: string = `${prefix}LOAD_WORD_RECOMMENDATIONS_ERROR`;

// redux-saga
// watch -> worker -> dispatches the API call -> updates redux store with data

function* loadWordRecommendationsWatch(): any {
    yield takeLatest(LOAD_WORD_RECOMMENDATIONS, loadWordRecommendationsWorker);
}

combineSaga(loadWordRecommendationsWatch);

function* loadWordRecommendationsWorker(action: any): any {
    try {
        const searchKey = yield select(searchKeySelector);
        const queryString = [searchKey];
        const result = yield call(loadWordRecommendations, queryString);
        yield put(createAction(LOAD_WORD_RECOMMENDATIONS_SUCCESS)(result));
    } catch (e) {
        yield put(createAction(LOAD_WORD_RECOMMENDATIONS_ERROR)(e));
    }
    
}


const searchAutoCompleteReduceHandlers = {
    [LOAD_WORD_RECOMMENDATIONS]: (state) => {
        return {
            ...state,
            isLoading: true,
        };
    },
    [LOAD_WORD_RECOMMENDATIONS_SUCCESS]: (state, action) => {
        const response = action.payload;
        return {
            ...state,
            isLoading: false,
            searchResults: response.data,
        };
    },
    [LOAD_WORD_RECOMMENDATIONS_ERROR]: (state) => {
        return {
            ...state,
            isLoading: false,
        };
    },
};

reducer.addHandlers(searchAutoCompleteReduceHandlers);





































































