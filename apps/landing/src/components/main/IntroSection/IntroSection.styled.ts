import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const IntroSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100vh;
`;

export const IntroTextAlignLeft = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold110};
    width: 100%;
    text-align: left;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.extrabold80};
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold60};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold60};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold50};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.en.extrabold58};
    }
  `}
`;

export const IntroTextAlignRight = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold110};
    width: 100%;
    margin: 1rem 0;
    text-align: right;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.extrabold80};
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold60};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold60};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold50};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.en.extrabold58};
    }
  `}
`;
