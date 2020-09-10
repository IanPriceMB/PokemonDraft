import {
  SET_GAME_STATE,
  GAME_STATE_LOADING,
  TURN_END,
  ROUND_END,
} from './enums';

const initialState = {
  isLoading: false,
  draftRound: 1,
  activePlayer: 0,
  mode: 'singlePlayer',
  stage: 'draft',
};

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case SET_GAME_STATE:
      return {
        ...payload,
      };
    case GAME_STATE_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case TURN_END:
      const nextPlayer =  payload.activePlayer === 3 ? 0 : payload.activePlayer + 1;
      return {
        ...state,
        activePlayer: nextPlayer,
      }
    case ROUND_END:
      if (payload.draftRound + 1 === 7) {
        return {
          ...state,
          draftRound:  0,
          stage: 'teamBuilder'
        }
      } else {
        return {
          ...state,
          draftRound:  payload.draftRound + 1,
        }
      }
    default:
      return state;
  };
};