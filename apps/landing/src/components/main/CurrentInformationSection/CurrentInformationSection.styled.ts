import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CurrentInformationSection = styled.section`
  position: relative;
  width: 100%;
  max-width: 192rem;
  height: 100vh;
  max-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

export const CurrentInfoWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    padding: 0 8rem 0 8rem;
    transform: translate3d(0, -50%, 0);

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      padding: 0 8rem 0 8rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      padding: 0 6rem 0 6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding: 0 3rem 0 3rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      grid-template-columns: repeat(2, 1fr);
      padding: 0 2rem 0 2rem;
      row-gap: 3.6rem;
    }
  `}
`;

export const CurrentInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.2rem;
  align-items: center;
`;

export const CurrentInfoTitle = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium22};
    color: ${theme.colors.gray60};

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.medium16};
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.kr.medium14};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.medium13};
    }
  `}
`;

export const CurrentInfoDescription = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold70};
    color: ${theme.colors.white};

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.extrabold50};
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold46};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold32};
    }
  `}
`;
