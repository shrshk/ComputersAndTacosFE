// @flow
import React from 'react';
import { Switch, Route } from 'react-router';

import { HomePageContainer } from './resource/home/view/home-page.container';
import { TestPageContainer } from './resource/test/view/test.container';
import { SearchAutoComplete }  from './resource/search-auto-complete/view/search-auto-complete.container';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePageContainer} />
    <Route exact path="/test" component={TestPageContainer} />
      <Route exact path="/search" component={SearchAutoComplete} />
  </Switch>
);
