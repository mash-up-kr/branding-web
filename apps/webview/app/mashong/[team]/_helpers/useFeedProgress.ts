import { useReducer } from 'react';

import { showPopcornToast } from '../_components/PopcornToast';

export const FeedActionTypes = {
  OPTIMISTIC_UPDATE: 'FEED_POPCORN_OPTIMISTIC',
  UPDATE_SUCCESS: 'FEED_POPCORN_SUCCESS',
  UPDATE_FAILURE: 'FEED_POPCORN_FAILURE',
} as const;

export interface FeedState {
  currentXP: number;
  remainingPopcorn: number;
  maxXP: number;
  currentLevel: number;
  popcornConsumed: number;
}

export type FeedAction =
  | { type: typeof FeedActionTypes.OPTIMISTIC_UPDATE }
  | { type: typeof FeedActionTypes.UPDATE_SUCCESS; payload: Partial<FeedState> }
  | { type: typeof FeedActionTypes.UPDATE_FAILURE; payload: { prevState: FeedState } };

const feedReducer = (state: FeedState, action: FeedAction): FeedState => {
  switch (action.type) {
    case FeedActionTypes.OPTIMISTIC_UPDATE:
      if (state.remainingPopcorn <= 0) return { ...state };
      showPopcornToast(state.popcornConsumed + 1);
      return {
        ...state,
        currentXP: state.currentXP + 1,
        remainingPopcorn: state.remainingPopcorn - 1,
        popcornConsumed: state.popcornConsumed + 1,
      };
    case FeedActionTypes.UPDATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        popcornConsumed: 0,
      };
    case FeedActionTypes.UPDATE_FAILURE:
      return { ...action.payload.prevState, popcornConsumed: 0 };
    default:
      return state;
  }
};

export const useFeedProgress = (initialState: FeedState) => useReducer(feedReducer, initialState);
