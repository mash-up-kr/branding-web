import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const PlatformIntroduceSection = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 5rem;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

export const PlatformIntroduceLayout = styled.div<{ isInView: boolean }>`
  ${({ theme, isInView }) => css`
    ${theme.fonts.kr.medium16};
    ${theme.animation.fadeUp({ duration: 0.8, delay: 0.01, move: '3rem', isInView })}
    display: flex;
    flex-flow: column nowrap;
    gap: 1.6rem;
    width: 144rem;
    margin: 0 auto;
    padding: 0 8rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      width: 100%;
      margin: initial;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      padding: 0 6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding: 0 3rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 37.5rem;
      padding: 0 2rem;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold70};
    display: flex;
    flex-flow: column nowrap;
    align-items: start;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.extrabold54};
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold50};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold46};
    }
  `}
`;

export const GradientText = styled.span`
  background: linear-gradient(91deg, #ff3b5e 0.4%, #6046ff 68.8%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.medium15};
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.kr.medium14};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.medium13};
    }
  `}
`;

export const PlatformSlideLayout = styled.div<{ isInView: boolean }>`
  ${({ theme, isInView }) => css`
    ${theme.animation.fadeUp({ duration: 0.8, delay: 0.01, move: '3rem', isInView })}
    display: flex;
    flex-flow: column nowrap;
    gap: 2.4rem;
    align-items: start;
    justify-content: start;
    max-width: 100vw;
    overflow: hidden;
  `}
`;

export const PlatformList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    gap: 1.6rem;
    width: 144rem;
    margin: 0 auto;
    padding: 0 8rem;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 1.2rem;
      width: 100%;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      gap: 1rem;
      padding: 0 6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding: 0 3rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 0 2rem;
    }
  `}
`;

interface PlatformProps {
  isSelected: boolean;
}

export const Platform = styled.li<PlatformProps>`
  ${({ theme, isSelected }) => css`
    ${isSelected ? theme.fonts.en.extrabold18 : theme.fonts.en.bold18};
    padding: 0.9rem 2rem;
    white-space: nowrap;
    background: ${isSelected
      ? 'linear-gradient(90deg, #FF3B5E 0.11%, #6046FF 99.8%)'
      : 'transparent'};
    background-origin: border-box;
    border: 0.1rem solid ${isSelected ? 'transparent' : theme.colors.white};
    border-radius: 5rem;
    cursor: pointer;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.bold16};
      padding: 0.8rem 1.6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.bold14};
      padding: 0.8rem 14rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.bold13};
      padding: 0.8rem 1.2rem;
    }
  `}
`;

const infiniteSlideAnimation = keyframes`
0% {
  transform: translate3d(0, 0, 0);
}
100% {
  transform: translate3d(-50%, 0, 0);
}
`;

interface IntroduceSlideProps {
  isAnimationPause: boolean;
}

export const IntroduceSlideA = styled.ul<IntroduceSlideProps>`
  ${({ theme, isAnimationPause }) => css`
    display: flex;
    gap: 2.2rem;
    padding-right: 2.2rem;
    padding-left: 8rem;
    overflow-x: visible;
    animation: ${infiniteSlideAnimation} 40s 0.3s infinite linear;
    animation-play-state: ${isAnimationPause ? 'paused' : 'running'};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      padding-left: 6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding-left: 3rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding-left: 2rem;
    }
  `}
`;

export const IntroduceSlideB = styled.ul<IntroduceSlideProps>`
  ${({ theme, isAnimationPause }) => css`
    display: flex;
    gap: 2.2rem;
    padding-right: 2.2rem;
    overflow-x: visible;
    animation: ${infiniteSlideAnimation} 40s 0.3s infinite linear;
    animation-play-state: ${isAnimationPause ? 'paused' : 'running'};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      padding-left: 6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding-left: 3rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding-left: 2rem;
    }
  `}
`;

const IntroduceCard = styled.li`
  ${({ theme }) => css`
    min-width: 33.3rem;
    height: 30.3rem;
    border-radius: 1rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      min-width: 29.6rem;
      height: 27rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      min-width: 27.5rem;
      height: 25rem;
    }
  `}
`;

export const IntroduceTextCard = styled(IntroduceCard)`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold24};
    position: relative;
    padding: 2.4rem;
    color: ${theme.colors.gray50};
    white-space: pre-wrap;
    background: ${theme.colors.gray95};

    &:hover {
      & > p > span {
        opacity: 1;
      }
    }

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.bold22};
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.kr.bold20};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding: 2rem;
    }
  `}
`;

export const IntroduceText = styled.p`
  ${({ theme }) => css`
    position: relative;
    z-index: 1;
    color: transparent;
    background-image: linear-gradient(to right, ${theme.colors.gray50}, ${theme.colors.gray50});
    background-clip: text;
  `}
`;

export const IntroduceGradientText = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${theme.globalZIndex.background};
    background-image: linear-gradient(90deg, #ff3b5e 0.11%, #6046ff 99.8%);
    background-clip: text;
    opacity: 0;
    transition: opacity 0.3s linear;
  `}
`;

interface IntroduceImageCardProps {
  backgroundUrl: string;
}

export const IntroduceImageCard = styled(IntroduceCard)<IntroduceImageCardProps>`
  ${({ backgroundUrl }) => css`
    background: url(${backgroundUrl});
    background-size: cover;
  `}
`;

export const LottieWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 2.4rem;
    bottom: 2.4rem;
    width: 8rem;
    height: 8rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      width: 7rem;
      height: 7rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      right: 2rem;
      bottom: 2rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 6rem;
      height: 6rem;
    }
  `}
`;
