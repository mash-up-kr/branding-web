import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Header = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${theme.zIndex.header};
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(1rem);
  `}
`;

export const HeaderInner = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 144rem;
    height: 10rem;
    margin: 0 auto;
    padding: 2.8rem 8rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      width: 100%;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      padding: 3rem 6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding: 1.4rem 3rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 1.4rem 2rem;
    }
  `}
`;
