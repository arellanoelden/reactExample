import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import {loadGames} from './actions/gameActions';
import {loadMessages} from './actions/MessageActions';
import {loadUsers} from './actions/userActions';
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(loadGames());
store.dispatch(loadMessages());
store.dispatch(loadUsers());
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
