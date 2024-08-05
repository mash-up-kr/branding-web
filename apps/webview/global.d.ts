export declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    MashupBridge: {
      step: Function;
    };
    webkit: {
      messageHandlers: {
        mashupBridge: {
          postMessage: Function;
        };
      };
    };
  }
}
