import React from 'react';

import { showErrorToast } from '@/app/_components/ErrorToast';
import { showPopcornToast } from '@/app/mashong/[team]/_components/PopcornToast';

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
  showErrorToast('팝콘 주기를 실패했어요..');
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

  showPopcornToast(prevState.popcornConsumed + 1);
  onSuccess?.();
};
