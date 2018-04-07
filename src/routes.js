import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/HomePage';
import Games from './components/Games';
import Chat from './components/Chat';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="games" component={Games} />
    <Route path="chat" component={Chat} />
  </Route>
);
