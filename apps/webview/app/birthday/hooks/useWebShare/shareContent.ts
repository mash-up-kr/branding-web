/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export const shareContent =
  (onSuccess: () => void, onError: (error?: unknown) => void) =>
  ({ files, text, title, url }: ShareData = {}) => {
    navigator
      .share({ files, text, title, url })
      .then(onSuccess)
      .catch((error) => {
        onError();
        if (error.name === 'NotAllowedError') {
          window.location.reload();
        }
      });
  };
