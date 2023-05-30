import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Header = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 50%;
    z-index: ${theme.zIndex.header};
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 144rem;
    height: 10rem;
    padding: 2.8rem 8rem;
    background: rgba(0, 0, 0, 0.8);
    transform: translate3d(-50%, 0, 0);
    backdrop-filter: blur(1rem);

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
