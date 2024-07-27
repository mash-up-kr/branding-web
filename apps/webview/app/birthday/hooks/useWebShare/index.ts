import { useState, useEffect } from 'react';

import { shareContent } from './shareContent';

const noop: () => void = () => undefined;

const useWebShare = (onSuccess = noop, onError = noop) => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (!navigator.share) {
      setIsSupported(false);
    } else {
      setIsSupported(true);
    }
  }, [onSuccess, onError]);

  return {
    isSupported,
    share: shareContent(onSuccess, onError),
  };
};

export default useWebShare;
