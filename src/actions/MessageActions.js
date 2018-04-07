import * as types from './actionTypes';
import messageApi from '../api/mockMessageApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadMessagesSuccess(messages) {
  return { type: types.LOAD_MESSAGES_SUCCESS, messages};
}

export function createMessageSuccess(message) {
  return {type: types.CREATE_MESSAGE_SUCCESS, message};
}

export function updateMessageSuccess(message) {
  return {type: types.UPDATE_MESSAGE_SUCCESS, message};
}

/*export function deleteGameSuccess(games) {
  return {type: types.DELETE_GAME_SUCCESS, games};
}*/

export function loadMessages() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return messageApi.getAllMessages().then(messages => {
      dispatch(loadMessagesSuccess(messages));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveMessage(message) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return messageApi.saveMessage(message.msg,message.user).then(message => {
        dispatch(createMessageSuccess(message));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

/*export function deleteGame(game) {
    return function (dispatch, getState) {
      dispatch(beginAjaxCall());
      return gameApi.deleteGame(game).then(game => { 
          dispatch(deleteGameSuccess(game));
      }).catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
    };
}*/