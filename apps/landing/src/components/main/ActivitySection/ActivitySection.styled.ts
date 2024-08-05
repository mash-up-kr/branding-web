import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ActivitySection = styled.section`
  ${() => css`
    width: 100%;
    height: 279.6rem;
    padding: 4.8rem 32rem 4.8rem;
  `}
`;

export const ActivitySectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

interface ActivitySectionHeadingProps {
  isInView: boolean;
}

export const ActivitySectionHeading = styled.h2<ActivitySectionHeadingProps>`
  ${({ theme, isInView }) => css`
    ${theme.fonts.en.extrabold80};
    position: fixed;
    top: 40.5rem;
    left: 50%;
    z-index: ${theme.globalZIndex.background};
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    align-items: center;
    width: 100%;
    transform: translate3d(-50%, 0, 0);
    opacity: ${isInView ? 1 : 0};
    transition: opacity 0.5s;
  `}
`;

export const HeadingFirstLine = styled.span`
  ${() => css`
    background: linear-gradient(91deg, #ff3b5e 0.4%, #6046ff 68.8%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

export const HeadingSecondLine = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const FirstGradientLine = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 4.4rem;
    left: 0;
    z-index: ${theme.globalZIndex.background};
    width: 100vw;
    height: 0.1rem;
    background: linear-gradient(91deg, #ff3b5e 0%, #6046ff 100%);
  `}
`;

export const SecondGradientLine = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 15.2rem;
    left: 0;
    z-index: ${theme.globalZIndex.background};
    width: 100vw;
    height: 0.1rem;
    background: linear-gradient(91deg, #6046ff 0%, #ff3b5e 100%);
  `}
`;
