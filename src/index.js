// @flow
import { get } from 'axios';
import { main } from './App';
import * as serviceWorker from './serviceWorker';

get('app.service.urls.json').then((response) => {
    const appServiceUrls = response.data;
    main(Object.freeze(appServiceUrls));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
