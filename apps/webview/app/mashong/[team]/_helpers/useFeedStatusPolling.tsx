import { Dispatch } from 'react';
import { useInterval } from 'usehooks-ts';

import { handleFeedUpdate } from './feedHandlers';
import { FeedAction } from './useFeedProgress';
import { getMashongStatus } from '../_services/getMashongStatus';

export function useFeedStatusPolling(dispatch: Dispatch<FeedAction>, delay: null | number) {
  useInterval(async () => {
    const response = await getMashongStatus();
    if (response) {
      // @ts-expect-error
      handleFeedUpdate(dispatch, response);
    }
  }, delay);
}
