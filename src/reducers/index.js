import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import games from './gameReducer';
import messages from './messageReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  games,
  messages,
  ajaxCallsInProgress
});

export default rootReducer;
