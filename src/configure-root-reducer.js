// @flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import {  getHistory } from './utils/history';

const commonReducers: any = {};

export function configureRootReducer(asyncTopReducers: any) {
  let topReducers = {
    form: formReducer,
    ...commonReducers,
    ...asyncTopReducers,
  };

  const history = getHistory();
  if (history) {
    topReducers = {
      router: connectRouter(history),
      ...topReducers,
    };
  }

  return combineReducers(topReducers);
}

