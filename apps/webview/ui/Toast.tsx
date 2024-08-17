'use client';

import { isValidElement } from 'react';
import { useToaster } from 'react-hot-toast/headless';

import { styled } from '@/styled-system/jsx';

export const Toast = () => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause } = handlers;

  return (
    <div onMouseEnter={startPause} onMouseLeave={endPause}>
      {toasts
        .filter((toast) => toast.visible)
        .map((toast) => (
          <styled.div
            key={toast.id}
            {...toast.ariaProps}
            position="absolute"
            top="calc(30px + env(safe-area-inset-top))"
            left="50%"
            transform="translateX(-50%)"
            width="100%"
            textAlign="center"
          >
            {isValidElement(toast.message) ? toast.message : String(toast.message)}
          </styled.div>
        ))}
    </div>
  );
};
