'use client';

import { PropsWithChildren } from 'react';

import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

import { StyledMotionDiv } from './MashongRoom';

export const SpeechBubble = ({ children, isVisible }: PropsWithChildren<{ isVisible: boolean }>) =>
  isVisible ? (
    <StyledMotionDiv
      position="relative"
      display="inline-block"
      top="173"
      left="114"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <SvgImage path="main/speech-bubble" width={132} height={38} />
      <styled.div
        position="absolute"
        left="50%"
        top="50%"
        fontWeight={400}
        fontSize={14}
        lineHeight="16.7px"
        transform="translate(-50%, -65%)"
        width="100%"
        textAlign="center"
        userSelect="none"
      >
        <p>{children}</p>
      </styled.div>
    </StyledMotionDiv>
  ) : (
    <styled.div w={132} h={38} position="relative" display="inline-block" top="173" left="114" />
  );
