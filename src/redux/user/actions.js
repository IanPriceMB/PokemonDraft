import {
  SET_USER,
  SET_USER_LOADING,
  SET_PLAYER_ID,
} from './enums';
import { actionFactory, fetchActionFactory } from '../../utils/helperFunctions';

export const setUser = actionFactory(SET_USER);

export const setUserLoading = actionFactory(SET_USER_LOADING);

export const fetchUser = fetchActionFactory(setUser, setUserLoading);

export const setPlayerId = actionFactory(SET_PLAYER_ID);


