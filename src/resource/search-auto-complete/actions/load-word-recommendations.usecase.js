// @flow
import { createAction } from 'redux-actions';
import { call, put, takeLatest, select, debounce } from 'redux-saga/effects';
import { combineSaga } from '../../../utils';
import { searchAutoCompleteReducer as reducer } from '../state/search-auto-complete.reducer';
import { searchKeySelector } from '../state/search-auto-complete.selectors';
import { loadWordRecommendations } from './apis/load-word-recommendations';

const prefix = `app/${reducer.sliceName}/`;

const LOAD_WORD_RECOMMENDATIONS: string = `${prefix}LOAD_WORD_RECOMMENDATIONS`;
export const loadWordRecommendationsAction = createAction(LOAD_WORD_RECOMMENDATIONS);
const LOAD_WORD_RECOMMENDATIONS_SUCCESS: string = `${prefix}LOAD_WORD_RECOMMENDATIONS_SUCCESS`;
const LOAD_WORD_RECOMMENDATIONS_ERROR: string = `${prefix}LOAD_WORD_RECOMMENDATIONS_ERROR`;

function* loadWordRecommendationsWatch(): any {
    yield takeLatest(LOAD_WORD_RECOMMENDATIONS, loadWordRecommendationsWorker);
}
combineSaga(loadWordRecommendationsWatch);

function* loadWordRecommendationsWorker(action: any): any {
    try {
        const waitInterval = action.payload;
        if (waitInterval)
            yield debounce(waitInterval);
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