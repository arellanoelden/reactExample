import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/HomePage';
import Games from './components/Games';
import Chat from './components/Chat';
import CoursesPage from './components/CoursesPage';
import ManageCoursePage from './components/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="games" component={Games} />
    <Route path="chat" component={Chat} />
  </Route>
);
