import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PlatformIntroduceSection = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  scroll-snap-align: center;
`;

export const PlatformIntroduceLayout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    gap: 1.6rem;
    width: 144rem;
    margin: 0 auto;
    padding: 0 8rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      width: 100%;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      padding: 0 6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding: 0 3rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 37.5rem;
      margin: 0 auto;
      padding: 0 2rem;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold70};
    display: flex;
    flex-flow: column nowrap;

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

export const PlatformSlideLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 24px;
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

    &:-webkit-scrollbar {
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
      width: 37.5rem;
      margin: 0 auto;
      padding: 0 2rem;
    }
  `}
`;

export const Platform = styled.li`
  ${({ theme }) => css`
    ${theme.fonts.en.bold18};
    padding: 9px 20px;
    white-space: nowrap;
    border: 1px solid ${theme.colors.white};
    border-radius: 50px;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.bold16};
      padding: 8px 16px;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.bold14};
      padding: 8px 14px;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.bold13};
      padding: 8px 12px;
    }
  `}
`;

export const IntroduceSlide = styled.ul`
  display: flex;
  gap: 22px;
  max-width: 100vw;
  padding: 0 22px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &:-webkit-scrollbar {
    display: none;
  }
`;

const IntroduceCard = styled.li`
  ${({ theme }) => css`
    min-width: 33.3rem;
    height: 30.3rem;
    border-radius: 1.6rem;

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

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.bold22};
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.kr.bold20};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding: 20px;
    }
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
    width: 9rem;
    height: 9rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      width: 8rem;
      height: 8rem;
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
