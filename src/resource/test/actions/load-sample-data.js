// @flow
import { createAction } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    getAppServiceUrls,
    combineSaga,
} from '../../../utils';
import { testReducer } from '../state/test.reducer';

const prefix = `app/${testReducer.sliceName}/`;

const axios = require('axios');
const LOAD_SAMPLE_DATA: string = `${prefix}LOAD_SAMPLE_DATA`;
export const loadSampleDataAction = createAction(LOAD_SAMPLE_DATA);
const LOAD_SAMPLE_DATA_SUCCESS: string = `${prefix}LOAD_SAMPLE_DATA_SUCCESS`;
const LOAD_SAMPLE_DATA_ERROR: string = `${prefix}LOAD_SAMPLE_DATA_ERROR`;

function* loadSampleDataWatch(): any {
    yield takeLatest(LOAD_SAMPLE_DATA, loadSampleDataWorker);
}
combineSaga(loadSampleDataWatch);

function* loadSampleDataWorker(): any {
    try {
        const result = yield call(loadSampleData);
        yield put(createAction(LOAD_SAMPLE_DATA_SUCCESS)(result));
    } catch (e) {
        yield put(createAction(LOAD_SAMPLE_DATA_ERROR)(e));
    }
}

function loadSampleData(): Promise<any> {
    return axios({
        method : 'get',
        url: `${getAppServiceUrls().dummyApi}`,
    });
}

const testReduceHandlers = {
    [LOAD_SAMPLE_DATA]: (state) => {
        return {
            ...state,
            isLoading: true,
        };
    },
    [LOAD_SAMPLE_DATA_SUCCESS]: (state, action) => {
        const response = action.payload;
        return {
            ...state,
            isLoading: false,
            data: response.data,
        };
    },
    [LOAD_SAMPLE_DATA_ERROR]: (state) => {
        return {
            ...state,
            isLoading: false,
        };
    },
};
testReducer.addHandlers(testReduceHandlers);