import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const TypingContainer = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold16};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    line-height: 3.6rem;
    letter-spacing: normal;
    white-space: nowrap;
    text-align: center;
  `}
`;

export const TextWrapper = styled.div``;

interface fillWidthProps {
  duration: number;
  delay?: number;
  timingFunction?: string;
  isInView?: boolean;
}

const fillWidth = ({
  duration,
  delay = 0,
  timingFunction = 'linear',
  isInView = true,
}: fillWidthProps) => {
  const fillWidthAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

  return css`
    width: 100%;
    animation: ${isInView ? fillWidthAnimation : null} ${duration}s ${delay}s ${timingFunction}
      forwards;
  `;
};

export const TextRelative = styled.div<{ isInView: boolean }>`
  ${({ theme, isInView }) => css`
    position: relative;

    &:first-of-type {
      ${theme.animation.fadeUp({ duration: 0.8, delay: 0.01, move: '3rem', isInView })};

      & > div {
        ${fillWidth({ duration: 2, delay: 0.01, isInView })};
      }
    }
    &:nth-of-type(2) {
      ${theme.animation.fadeUp({ duration: 0.8, delay: 0.4, move: '3rem', isInView })};

      & > div {
        ${fillWidth({ duration: 2, delay: 0.4, isInView })};
      }
    }
    &:nth-of-type(3) {
      ${theme.animation.fadeUp({ duration: 0.8, delay: 0.8, move: '3rem', isInView })};

      & > div {
        ${fillWidth({ duration: 2, delay: 0.8, isInView })};
      }
    }
    &:nth-of-type(4) {
      ${theme.animation.fadeUp({ duration: 0.8, delay: 1.2, move: '3rem', isInView })};

      & > div {
        ${fillWidth({ duration: 2, delay: 1.2, isInView })};
      }
    }
    &:nth-of-type(5) {
      ${theme.animation.fadeUp({ duration: 0.8, delay: 1.6, move: '3rem', isInView })};

      & > div {
        ${fillWidth({ duration: 2, delay: 1.6, isInView })};
      }
    }
  `}
`;

export const MaskLine = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.9;
`;
