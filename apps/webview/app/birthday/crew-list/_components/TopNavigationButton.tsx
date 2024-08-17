'use client';

import { useWebviewHandler } from '@/hooks/useWebviewHandler';
import { styled } from '@/styled-system/jsx';

const TopNavigationButton = () => {
  const webviewHandler = useWebviewHandler();

  return (
    <styled.div
      position="sticky"
      top="env(safe-area-inset-top)"
      bgColor="gray.50"
      display="flex"
      alignItems="center"
      height="56px"
      minW="100%"
      onClick={() => {
        webviewHandler.step('back');
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M23 13L16 20L23 27"
          stroke="#383E4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </styled.div>
  );
};

export default TopNavigationButton;
