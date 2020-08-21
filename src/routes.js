// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { HomePageContainer } from './resource/home/view/home-page.container';
import { TestPageContainer } from './resource/test/view/test.container';
import { SearchAutoComplete } from './resource/search-auto-complete/view/search-auto-complete.container';

export const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomePageContainer} />
    <Route exact path="/test" component={TestPageContainer} />
    <Route exact path="/search" component={SearchAutoComplete} />
  </BrowserRouter>
);
