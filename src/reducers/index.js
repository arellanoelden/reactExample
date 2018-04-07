import {combineReducers} from 'redux';
import games from './gameReducer';
import messages from './messageReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  games,
  messages,
  ajaxCallsInProgress
});

export default rootReducer;
