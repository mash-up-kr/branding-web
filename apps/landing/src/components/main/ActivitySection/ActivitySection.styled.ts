import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ActivitySection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 192rem;
    height: 279.6rem;
    margin: 0 auto;
    padding: 4.8rem 8rem 4.8rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      height: 210.7rem;
      padding: 4.8rem 8rem 4.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      height: 181.2rem;
      padding: 4.8rem 6rem 4.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      height: 242.2rem;
      padding: 4.8rem 3rem 4.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      height: 259.2rem;
      padding: 4rem 2rem 4.8rem;
    }
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

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.extrabold60};
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold50};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold46};
    }
  `}
`;

export const HeadingFirstLine = styled.span`
  ${({ theme }) => css`
    padding-right: 10rem;
    background: linear-gradient(91deg, #ff3b5e 0.4%, #6046ff 68.8%);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      padding-right: 0;
    }
  `}
`;

export const HeadingSecondLine = styled.span`
  ${({ theme }) => css`
    padding-left: 10rem;
    color: ${theme.colors.white};

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      padding-left: 0;
    }
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

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      top: 3.3rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      top: 2.7rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      top: 2.6rem;
    }
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

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      top: 11.7rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      top: 9.9rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      top: 9.2rem;
    }
  `}
`;
