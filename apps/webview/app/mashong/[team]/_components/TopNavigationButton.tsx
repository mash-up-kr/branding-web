'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { useWebviewHandler } from '@/hooks/useWebviewHandler';
import { styled } from '@/styled-system/jsx';

type TopNavigationButtonProps = {
  actionType: 'webviewBack' | 'routerBack';
};

export const TopNavigationButton = ({ actionType }: TopNavigationButtonProps) => {
  const webviewHandler = useWebviewHandler();
  const router = useRouter();

  const handleClick = () => {
    switch (actionType) {
      case 'webviewBack':
        webviewHandler.step('back');
        break;
      case 'routerBack':
        router.back();
        break;
      default:
        console.warn(`Unknown action type: ${actionType}`);
    }
  };

  return (
    <styled.button
      type="button"
      cursor="pointer"
      width={40}
      height={40}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={handleClick}
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
