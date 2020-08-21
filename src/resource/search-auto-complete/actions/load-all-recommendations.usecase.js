// @flow
import { createAction } from 'redux-actions';
import { call, put, takeLatest, select, debounce } from 'redux-saga/effects';
import { combineSaga } from '../../../utils';
import { searchAutoCompleteReducer as reducer } from '../state/search-auto-complete.reducer';
import { prefixListSelector } from '../state/search-auto-complete.selectors';
import { loadWordRecommendations } from './apis/load-word-recommendations';

const prefix = `app/${reducer.sliceName}/`;

const LOAD_ALL_RECOMMENDATIONS: string = `${prefix}LOAD_ALL_RECOMMENDATIONS`;
export const loadAllRecommendationsAction = createAction(LOAD_ALL_RECOMMENDATIONS);
const LOAD_ALL_RECOMMENDATIONS_SUCCESS: string = `${prefix}LOAD_ALL_RECOMMENDATIONS_SUCCESS`;
const LOAD_ALL_RECOMMENDATIONS_ERROR: string = `${prefix}LOAD_ALL_RECOMMENDATIONS_ERROR`;

function* loadAllRecommendationsWatch(): any {
    yield takeLatest(LOAD_ALL_RECOMMENDATIONS, loadAllRecommendationsWorker);
}
combineSaga(loadAllRecommendationsWatch);

function* loadAllRecommendationsWorker(): any {
    try {
        const prefixList = yield select(prefixListSelector);
        const result = yield call(loadWordRecommendations, prefixList);
        yield put(createAction(LOAD_ALL_RECOMMENDATIONS_SUCCESS)(result));
    } catch (e) {
        yield put(createAction(LOAD_ALL_RECOMMENDATIONS_ERROR)(e));
    }
}

const searchAutoCompleteReduceHandlers = {
    [LOAD_ALL_RECOMMENDATIONS]: (state) => {
        return {
            ...state,
            isLoading: true,
        };
    },
    [LOAD_ALL_RECOMMENDATIONS_SUCCESS]: (state, action) => {
        const response = action.payload;
        return {
            ...state,
            isLoading: false,
            allRecommendations: response.data,
        };
    },
    [LOAD_ALL_RECOMMENDATIONS_ERROR]: (state) => {
        return {
            ...state,
            isLoading: false,
        };
    },
};
reducer.addHandlers(searchAutoCompleteReduceHandlers);