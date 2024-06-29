import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface LottieProps {
  width?: number;
  height?: number;
}

export const Lottie = styled.div<LottieProps>`
  ${({ width, height }) => css`
    width: ${width ? `${width}px` : '100%'};
    height: ${height ? `${height}px` : '100%'};
  `}
`;
