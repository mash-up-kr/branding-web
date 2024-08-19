import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProjectSection = styled.section`
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
  scroll-snap-stop: always;
`;

export const HeaderLayout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
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

export const Heading = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.6rem;
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

export const SlideController = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 4rem;
`;

export const SlideControlButton = styled.button`
  width: 5rem;
  height: 5rem;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
`;

export const ButtonImageLeft = styled.img`
  width: 100%;
  height: 100%;
  rotate: 180deg;
`;
export const ButtonImageRight = styled.img`
  width: 100%;
  height: 100%;
`;
