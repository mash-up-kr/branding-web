import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  ${({ theme }) => css`
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
      padding: 0 2rem;
    }
  `}
`;
