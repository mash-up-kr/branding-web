'use client';

import { useWebviewHandler } from '@/hooks/useWebviewHandler';
import { styled } from '@/styled-system/jsx';

export const TopNavigationButton = () => {
  const webviewHandler = useWebviewHandler();

  return (
    <styled.button
      type="button"
      cursor="pointer"
      width={40}
      height={40}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={() => {
        webviewHandler.step('back');
      }}
    >
      {/** SVG inlining for priority */}
      <svg xmlns="http://www.w3.org/2000/svg" width={9} height={16} fill="none">
        <path
          stroke="#383E4C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 1 1 8l7 7"
        />
      </svg>
    </styled.button>
  );
};
