// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { create as createAxios } from 'axios';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import {
    axiosHelper,
    setAppServiceUrls,
    setHistory,
} from './utils';
import { configureStore } from './configure-store';
import { AppRoot } from './shared/app-root/app-root';

export function main(appServiceUrls: any) {
    setAppServiceUrls(appServiceUrls);
    const appAxios = createAxios();
    axiosHelper.setAxios(appAxios);

    const history = setHistory(createBrowserHistory());

    // Create redux store with history
    const initialState: any = {};
    const store: any = configureStore(initialState, history);

    const MOUNT_NODE = document.getElementById('root');
    if (!MOUNT_NODE) {
        return;
    }

    const render = () => {
        ReactDOM.render(
            <Provider store={store}>
              <Router history={history}>
                <AppRoot />
              </Router>
            </Provider>,
            MOUNT_NODE
        );
    };

    render();
}
