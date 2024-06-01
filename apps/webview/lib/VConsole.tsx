'use client';

import Script from 'next/script';

declare let VConsole: any;

const VConsoleScript = () => {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <Script
      src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"
      onReady={() => {
        // eslint-disable-next-line no-new
        new VConsole();
      }}
    />
  );
};

export default VConsoleScript;
