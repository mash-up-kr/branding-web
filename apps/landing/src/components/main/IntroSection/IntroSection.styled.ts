import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { fonts } from 'theme';

import { breakPoint } from '@/styles/breakPoint';

export const IntroSection = styled.section`
  ${({ theme }) => css`
    position: relative;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    scroll-snap-align: center;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 0 1.8rem 0 1.9rem;
    }
  `}
`;

export const IntroSectionLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
`;

const infoTextWrapperStyle = css`
  ${fonts.en.extrabold110};
  display: flex;
  flex-flow: row nowrap;
  gap: 5rem;
  align-items: flex-end;
  width: 100%;
  text-align: left;

  @media (max-width: ${breakPoint.media.notebook}) {
    ${fonts.en.extrabold80};
    gap: 2rem;
  }

  @media (max-width: ${breakPoint.media.tabletL}) {
    ${fonts.en.extrabold60};
  }

  @media (max-width: ${breakPoint.media.tabletS}) {
    ${fonts.en.extrabold50};
    gap: 1.2rem;
  }

  @media (max-width: ${breakPoint.media.mobile}) {
    ${fonts.en.extrabold58};
    gap: 0.8rem;
  }
`;

export const MashUp = styled.div`
  ${infoTextWrapperStyle};
`;

export const Seeking = styled.div`
  ${({ theme }) => css`
    ${infoTextWrapperStyle};

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.extrabold80};
      margin: 0.8rem 0;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold60};
      margin: 0.6rem 0 0.5rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold50};
      margin: 0.6rem 0;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.en.extrabold58};
      margin: 0.5rem 0;
    }
  `}
`;

export const ValueForGrowth = styled.div`
  ${({ theme }) => css`
    ${infoTextWrapperStyle};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: none;
    }
  `}
`;

export const ValueFor = styled.div`
  ${({ theme }) => css`
    ${infoTextWrapperStyle};
    display: none;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: flex;
      margin-top: 0.5rem;
    }
  `}
`;

export const Growth = styled.div`
  ${({ theme }) => css`
    ${infoTextWrapperStyle};
    display: none;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: flex;
    }
  `}
`;

export const GradientLineWrapper = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
    padding-bottom: 3rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      padding-bottom: 2.2rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      padding-bottom: 1.6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding-bottom: 1.3rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding-bottom: 1.6rem;
    }
  `}
`;

export const GradientLine = styled.div`
  ${({ theme }) => css`
    height: 0.2rem;
    background: linear-gradient(90.38deg, #ff3b5e 0.11%, #6046ff 99.8%);

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      height: 0.1rem;
    }
  `}
`;

export const LinearGradientSphereDeem = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: ${theme.globalZIndex.background};
    width: 100%;
    height: 44.44%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      height: 43.1944%;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      height: 43.8888%;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      height: 50.2471%;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      height: 50.0749%;
    }
  `}
`;
