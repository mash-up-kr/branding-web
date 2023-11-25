import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ParallaxIntroduceSection = styled.section`
  height: 300vh;
  margin-top: 50vh;
  overflow: hidden;
  scroll-snap-align: start;
`;

interface IntroduceProps {
  isShowIntroduceText: boolean;
}

export const Introduce = styled.div<IntroduceProps>`
  ${({ theme, isShowIntroduceText }) => css`
    ${theme.fonts.en.extrabold50};
    position: fixed;
    top: 50%;
    width: 100%;
    white-space: pre-wrap;
    text-align: center;
    transform: translate3d(0, -50%, 0);
    opacity: ${isShowIntroduceText ? 1 : 0};
    transition: 0.3s ease-in-out;
  `}
`;
