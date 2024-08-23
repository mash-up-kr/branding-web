'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

export const StyledMotionDiv = styled(motion.div);

const bubbleTailSvgUrl = `https://static.mash-up.kr/images/svg/mashong/main/speech-bubble_tail.svg`;

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
          _after: {
            content: '""',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%)',
            bottom: -18,
            width: '18px',
            height: '18px',
            backgroundImage: `url('${bubbleTailSvgUrl}')`,
            backgroundRepeat: 'no-repeat',
          },
        })}
      >
        {children}
      </styled.div>
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
