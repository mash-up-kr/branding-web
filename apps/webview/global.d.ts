/* eslint-disable no-unused-vars */
export declare global {
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

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_BASE_PATH: string;
    }
  }
}
