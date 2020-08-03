// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import {
    initCombineSaga,
} from './utils/combine-saga';
import {
    initCombineSliceReducer,
} from './utils/combine-slice-reducer';

import { configureRootReducer } from './configure-root-reducer';

export function configureStore(
    initialState: any,
    history: any
) {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        routerMiddleware(history),
        sagaMiddleware,
    ];

    const enhancers = [applyMiddleware(...middlewares)];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
            : compose;
    /* eslint-enable */

    const store = createStore(
        configureRootReducer(),
        initialState,
        composeEnhancers(...enhancers)
    );

    store.asyncReducers = {};

    store.sagaMiddleware = sagaMiddleware;

    initCombineSaga(sagaMiddleware);
    initCombineSliceReducer(store, configureRootReducer);

    return store;
}