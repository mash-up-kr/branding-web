import throttle from 'lodash-es/throttle';
import { useEffect, useState } from 'react';

import { VIEWPORT_SIZE, TViewPortSize } from '@/constants';
import { breakPoint } from '@/styles/breakPoint';

export const useDetectViewport = (initialViewPort = breakPoint.value) => {
  const [viewportSize, setViewportSize] = useState<TViewPortSize>(VIEWPORT_SIZE.DESKTOP);

  const { mobile, tabletS, tabletL, notebook } = initialViewPort;

  useEffect(() => {
    const detectionViewport = () => {
      const { innerWidth: vw } = window;

      if (vw <= mobile) {
        setViewportSize(VIEWPORT_SIZE.MOBILE);
      } else if (vw > mobile && vw <= tabletS) {
        setViewportSize(VIEWPORT_SIZE.TABLET_S);
      } else if (vw > tabletS && vw <= tabletL) {
        setViewportSize(VIEWPORT_SIZE.TABLET_L);
      } else if (vw > tabletL && vw <= notebook) {
        setViewportSize(VIEWPORT_SIZE.NOTEBOOK);
      } else if (vw > notebook) {
        setViewportSize(VIEWPORT_SIZE.DESKTOP);
      }
    };

    detectionViewport();

    const handleDetectViewport = throttle(detectionViewport, 200);
    window.addEventListener('resize', handleDetectViewport);

    return () => {
      window.removeEventListener('resize', handleDetectViewport);
    };
  }, [mobile, tabletS, tabletL, notebook]);

  return { viewportSize };
};
