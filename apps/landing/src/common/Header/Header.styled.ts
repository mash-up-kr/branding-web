import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Header = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 50%;
    z-index: ${theme.zIndex.header};
    width: 144rem;
    height: 10rem;
    padding: 2.8rem 8rem;
    background: ${theme.colors.black};
    transform: translate3d(-50%, 0, 0);
    opacity: 0.8;
    backdrop-filter: blur(1rem);

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      width: 100%;
    }

    @media (max-width: ${theme.breakPoint.media.tablet}) {
      padding: 3rem 6rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 1rem 2rem;
    }
  `}
`;
