// @flow
import { createAction } from 'redux-actions';
import { put, takeLatest } from 'redux-saga/effects';
import { combineSaga } from '../../../utils';
import { searchAutoCompleteReducer as reducer } from '../state/search-auto-complete.reducer';
import { loadWordRecommendationsAction } from './load-word-recommendations.usecase';

const prefix = `app/${reducer.sliceName}/`;

const UPDATE_PREFIX_LIST: string = `${prefix}UPDATE_PREFIX_LIST`;
export const updatePrefixListAction = createAction(UPDATE_PREFIX_LIST);
const UPDATE_PREFIX_LIST_SUCCESS: string = `${prefix}UPDATE_PREFIX_LIST_SUCCESS`;
const UPDATE_PREFIX_LIST_ERROR: string = `${prefix}UPDATE_PREFIX_LIST_ERROR`;

function* updatePrefixListWatch(): any {
    yield takeLatest(UPDATE_PREFIX_LIST, updatePrefixListWorker);
}
combineSaga(updatePrefixListWatch);

function* updatePrefixListWorker(action: any): any {
    try {
        const prefixList = action.payload;
        yield put(createAction(UPDATE_PREFIX_LIST_SUCCESS)(prefixList));
        yield put(loadWordRecommendationsAction());
    } catch (e) {
        yield put(createAction(UPDATE_PREFIX_LIST_ERROR)(e));
    }
}

const searchAutoCompleteReduceHandlers = {
    [UPDATE_PREFIX_LIST]: (state) => {
        return {
            ...state,
            isLoading: true,
        };
    },
    [UPDATE_PREFIX_LIST_SUCCESS]: (state, action) => {
        return {
            ...state,
            isLoading: false,
            prefixList: action.payload,
        };
    },
    [UPDATE_PREFIX_LIST_ERROR]: (state) => {
        return {
            ...state,
            isLoading: false,
        };
    },
};
reducer.addHandlers(searchAutoCompleteReduceHandlers);