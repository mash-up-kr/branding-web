import { css, keyframes } from '@emotion/react';

interface fadeProps {
  duration: number;
  delay?: number;
  move?: string;
}

const fadeUp = ({ duration, delay = 0, move = '100px' }: fadeProps) => {
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
    animation: ${fadeUpAnimation} ${duration}s ${delay}s ease-in-out forwards;
  `;
};

const fadeIn = ({ duration, delay = 0 }: fadeProps) => {
  const fadeUpAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  return css`
    animation: ${fadeUpAnimation} ${duration}s ${delay}s ease-in-out forwards;
  `;
};

export const animation = {
  fadeUp,
  fadeIn,
} as const;

export type AnimationType = typeof animation;
