import React from 'react';

import { FeedActionTypes, FeedState, FeedAction } from './useFeedProgress';

export const handleOptimisticUpdate = (dispatch: React.Dispatch<FeedAction>) => {
  dispatch({ type: FeedActionTypes.OPTIMISTIC_UPDATE });
};

export const handleFeedSuccess = (
  dispatch: React.Dispatch<FeedAction>,
  response: {
    fed: boolean;
    currentXP: number;
    maxXP: number;
    currentLevel: number;
    remainingPopcorn: number;
  },
  prevState: FeedState,
  onSuccess: () => void,
) => {
  updateFeedState(dispatch, response, prevState, onSuccess);
};

export const handleFeedUpdate = (
  dispatch: React.Dispatch<FeedAction>,
  response: {
    fed: boolean;
    currentXP: number;
    maxXP: number;
    currentLevel: number;
    remainingPopcorn: number;
  },
) => {
  updateFeedState(dispatch, response, null);
};

export const handleFeedFailure = (dispatch: React.Dispatch<FeedAction>, prevState: FeedState) => {
  dispatch({
    type: FeedActionTypes.UPDATE_FAILURE,
    payload: { prevState },
  });
};

const updateFeedState = (
  dispatch: React.Dispatch<FeedAction>,
  response: {
    fed: boolean;
    currentXP: number;
    maxXP: number;
    currentLevel: number;
    remainingPopcorn: number;
  },
  prevState: FeedState | null,
  onSuccess?: () => void,
) => {
  const { fed, currentXP, maxXP, currentLevel, remainingPopcorn } = response;
  const isAutoRefetching = !prevState;

  dispatch({
    type: FeedActionTypes.UPDATE_SUCCESS,
    payload: { currentXP, maxXP, currentLevel, remainingPopcorn },
  });

  if (isAutoRefetching) return;

  if (!fed) {
    throw new Error();
  }

  onSuccess?.();
};
