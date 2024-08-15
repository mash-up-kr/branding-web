import { toPng } from 'html-to-image';
import { RefObject, useCallback } from 'react';

import useWebShare from '@/app/birthday/hooks/useWebShare';

const useDownloadElementToImage = <T extends HTMLElement>(ref: RefObject<T>, filename: string) => {
  const { isSupported, share } = useWebShare();

  const saveImage = useCallback(async () => {
    if (ref.current === null) {
      return;
    }

    await toPng(ref.current, { cacheBust: true });
    await toPng(ref.current, { cacheBust: true });

    toPng(ref.current, {
      cacheBust: true,
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    })
      .then(async (dataUrl) => {
        if (isSupported) {
          const response = await fetch(dataUrl);
          const blob = await response.blob();
          const file = new File([blob], filename, { type: blob.type });

          share({ files: [file] });
        } else {
          const link = document.createElement('a');
          link.download = filename;
          link.href = dataUrl;

          link.click();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref, isSupported, filename, share]);

  return { saveImage };
};

export default useDownloadElementToImage;
