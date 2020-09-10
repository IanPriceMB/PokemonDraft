import {
  SET_USER,
  SET_USER_LOADING,
  SET_PLAYER_ID,
} from './enums';

const initialState = {
  isLoading: false,
  userName: 'Ian',
  userId: 1234,
  playerId: 0,
};

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case SET_USER:
      return {
        ...payload,
      };
    case SET_USER_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_PLAYER_ID:
      return {
        ...state,
        ...payload,
      }
    default:
      return state;
  };
};