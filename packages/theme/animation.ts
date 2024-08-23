import { css, keyframes } from '@emotion/react';

interface fadeProps {
  duration: number;
  delay?: number;
  move?: string;
  isInView?: boolean;
}

const fadeUp = ({ duration, delay = 0, move = '100px', isInView = true }: fadeProps) => {
  const fadeUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, ${move}, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

  return css`
    opacity: 0;
    animation: ${isInView ? fadeUpAnimation : null} ${duration}s ${delay}s ease-in-out forwards;
  `;
};

const fadeDown = ({ duration, delay = 0, move = '100px', isInView = true }: fadeProps) => {
  const fadeUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -${move}, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  `;

  return css`
    transform: translate3d(0, -${move}, 0);
    opacity: 0;
    animation: ${isInView ? fadeUpAnimation : null} ${duration}s ${delay}s ease-in-out forwards;
  `;
};

const fadeIn = ({ duration, delay = 0, isInView = true }: fadeProps) => {
  const fadeUpAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  return css`
    opacity: 0;
    animation: ${isInView ? fadeUpAnimation : null} ${duration}s ${delay}s ease-in-out forwards;
  `;
};

export const animation = {
  fadeUp,
  fadeDown,
  fadeIn,
} as const;

export type AnimationType = typeof animation;
