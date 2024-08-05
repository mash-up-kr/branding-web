import { useEffect, useState } from 'react';

import { AndroidBridge, AppleBridge, WebviewHandler } from '@/lib/WebviewHandler';

const isDom = () => typeof window !== 'undefined';
function getPlatform() {
  const agent = (navigator as any).userAgentData;
  return agent?.platform ?? navigator.platform;
}

const pt = (v: RegExp) => isDom() && v.test(getPlatform());
const ua = (v: RegExp) => isDom() && v.test(navigator.userAgent);

const isApple = () => pt(/mac|iphone|ipad|ipod/i);
const isAndroid = () => pt(/android/i) || ua(/android/i);

type Handler = InstanceType<typeof WebviewHandler>;

export const useWebviewHandler = () => {
  const [handler, setHandler] = useState<Handler | null>(null);

  useEffect(() => {
    if (handler) return;

    if (isApple()) {
      setHandler(new WebviewHandler(new AppleBridge()));
    } else if (isAndroid()) {
      setHandler(new WebviewHandler(new AndroidBridge()));
    }
  }, []);

  return handler ?? { step: () => {} };
};
