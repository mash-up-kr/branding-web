import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const TypingContainer = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold36};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 8.9rem 0 9rem;
    line-height: 8rem;
    letter-spacing: normal;
    white-space: nowrap;
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.bold26};
      padding: 0 3.4rem;
      line-height: 5.6rem;
      letter-spacing: normal;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.kr.bold20};
      padding: 0 1.8rem;
      line-height: 4.2rem;
      letter-spacing: normal;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold16};
      padding: 0 1.4rem;
      line-height: 3.6rem;
      letter-spacing: normal;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 0 1rem;
    }
  `}
`;

export const TextWrapper = styled.div``;

interface fillWidthProps {
  duration: number;
  delay?: number;
  timingFunction?: string;
}

const fillWidth = ({ duration, delay = 0, timingFunction = 'linear' }: fillWidthProps) => {
  const fillWidthAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

  return css`
    animation: ${fillWidthAnimation} ${duration}s ${delay}s ${timingFunction} forwards;
  `;
};

interface TextRelativeProps {
  isIntersect: boolean;
}

export const TextRelative = styled.div<TextRelativeProps>`
  ${({ theme, isIntersect }) => css`
    position: relative;

    &:first-of-type {
      ${isIntersect ? theme.animation.fadeUp({ duration: 0.8, delay: 0.01, move: '3rem' }) : null};

      & > div {
        ${isIntersect ? fillWidth({ duration: 2, delay: 0.01 }) : null};
      }
    }
    &:nth-of-type(2) {
      ${isIntersect ? theme.animation.fadeUp({ duration: 0.8, delay: 0.4, move: '3rem' }) : null};

      & > div {
        ${isIntersect ? fillWidth({ duration: 2, delay: 0.4 }) : null};
      }
    }
    &:nth-of-type(3) {
      ${isIntersect ? theme.animation.fadeUp({ duration: 0.8, delay: 0.8, move: '3rem' }) : null};

      & > div {
        ${isIntersect ? fillWidth({ duration: 2, delay: 0.8 }) : null};
      }
    }
    &:nth-of-type(4) {
      ${isIntersect ? theme.animation.fadeUp({ duration: 0.8, delay: 1.2, move: '3rem' }) : null};

      & > div {
        ${isIntersect ? fillWidth({ duration: 2, delay: 1.2 }) : null};
      }
    }
    &:nth-of-type(5) {
      ${isIntersect ? theme.animation.fadeUp({ duration: 0.8, delay: 1.6, move: '3rem' }) : null};

      & > div {
        ${isIntersect ? fillWidth({ duration: 2, delay: 1.6 }) : null};
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
