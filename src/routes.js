import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

import Main from './components/Main';
import HomePage from './containers/HomePageContainer';
import AppPage from './containers/AppPageContainer';
import AboutPage from './components/AboutPage';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={HomePage}/>
    <Route path="app" component={UserIsAuthenticated(AppPage)}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);