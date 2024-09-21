import { useReducer } from 'react';

export const FeedActionTypes = {
  OPTIMISTIC_UPDATE: 'FEED_POPCORN_OPTIMISTIC',
  UPDATE_SUCCESS: 'FEED_POPCORN_SUCCESS',
  UPDATE_FAILURE: 'FEED_POPCORN_FAILURE',
} as const;

export interface FeedState {
  currentXP: number;
  popcornConsumed: number;
  remainingPopcorn: number;
  maxXP: number;
  currentLevel: number;
}

export type FeedAction =
  | { type: typeof FeedActionTypes.OPTIMISTIC_UPDATE }
  | { type: typeof FeedActionTypes.UPDATE_SUCCESS; payload: Partial<FeedState> }
  | { type: typeof FeedActionTypes.UPDATE_FAILURE; payload: { prevState: FeedState } };

const feedReducer = (state: FeedState, action: FeedAction): FeedState => {
  switch (action.type) {
    case FeedActionTypes.OPTIMISTIC_UPDATE:
      return {
        ...state,
        currentXP: state.currentXP + 1,
        popcornConsumed: state.popcornConsumed + 1,
        remainingPopcorn: state.remainingPopcorn - 1,
      };
    case FeedActionTypes.UPDATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case FeedActionTypes.UPDATE_FAILURE:
      return action.payload.prevState;
    default:
      return state;
  }
};

export const useFeedProgress = (initialState: FeedState) => useReducer(feedReducer, initialState);
