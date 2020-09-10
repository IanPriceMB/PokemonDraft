import {
  SET_GAME_STATE,
  GAME_STATE_LOADING,
  TURN_END,
  ROUND_END,
} from './enums';
import { actionFactory, fetchActionFactory } from '../../utils/helperFunctions';

export const setGameState = actionFactory(SET_GAME_STATE);

export const gameStateLoading = actionFactory(GAME_STATE_LOADING);

export const fetchGameState = fetchActionFactory(setGameState, gameStateLoading);

export const turnEnd = actionFactory(TURN_END);

export const roundEnd = actionFactory(ROUND_END);
