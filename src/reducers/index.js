import {combineReducers} from 'redux';
import games from './gameReducer';
import messages from './messageReducer';
import users from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  games,
  messages,
  users,
  ajaxCallsInProgress
});

export default rootReducer;
