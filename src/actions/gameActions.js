import * as types from './actionTypes';
import gameApi from '../api/mockGameApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadGamesSuccess(games) {
  return { type: types.LOAD_GAMES_SUCCESS, games};
}

export function createGameSuccess(game) {
  return {type: types.CREATE_GAME_SUCCESS, game};
}

export function updateGameSuccess(game) {
  return {type: types.UPDATE_GAME_SUCCESS, game};
}

export function deleteGameSuccess(games) {
  return {type: types.DELETE_GAME_SUCCESS, games};
}

export function loadGames() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return gameApi.getAllGames().then(games => {
      dispatch(loadGamesSuccess(games));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveGame(game) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return gameApi.saveGame(game).then(game => {
      game.id ? dispatch(updateGameSuccess(game)) :
        dispatch(createGameSuccess(game));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteGame(game) {
    return function (dispatch, getState) {
      dispatch(beginAjaxCall());
      return gameApi.deleteGame(game).then(game => { 
          dispatch(deleteGameSuccess(game));
      }).catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
    };
}