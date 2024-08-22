'use client';

import { PropsWithChildren } from 'react';

import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

import { StyledMotionDiv } from './MashongRoom';

export const SpeechBubble = ({ children, isVisible }: PropsWithChildren<{ isVisible: boolean }>) =>
  isVisible ? (
    <StyledMotionDiv
      position="relative"
      display="inline-block"
      top="173"
      left="50%"
      transform="translateX(-50%) !important"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      zIndex={999}
    >
      <styled.div
        className={css({
          position: 'relative',
          padding: '8px 12px',
          backgroundColor: '#fff',
          border: '1px solid #6A36FF',
          fontSize: 14,
          borderRadius: '10px',
        })}
      >
        {children}
      </styled.div>
      <BubbleTail
        className={css({
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%)',
          bottom: -7,
        })}
      />
    </StyledMotionDiv>
  ) : (
    <styled.div
      w={132}
      h={38}
      position="relative"
      display="inline-block"
      top="173"
      left="50%"
      transform="translateX(-50%) !important"
    />
  );

const BubbleTail = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
    className={className}
  >
    <path
      d="M7.12833 10.7125C8.12131 11.7625 9.87869 11.7625 10.8717 10.7125L16.8724 4.36714C17.5853 3.61325 17.6541 2.62845 17.2631 1.8448C16.8751 1.06697 16.0448 0.5 15.0007 0.5H2.99929C1.95523 0.5 1.12493 1.06697 0.73689 1.8448C0.345943 2.62845 0.414665 3.61325 1.12761 4.36714L7.12833 10.7125Z"
      fill="white"
      stroke="#6A36FF"
    />
    <path d="M0 2C0 0.895431 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V4H0V2Z" fill="white" />
  </svg>
);
