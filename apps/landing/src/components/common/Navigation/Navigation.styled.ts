import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

export const Navigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    gap: 8rem;
    align-items: center;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 4rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      gap: 3rem;
    }
  `}
`;

export const NavigationList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    gap: 8rem;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 4rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      gap: 3rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      display: none;
    }
  `}
`;

export const LinkToById = styled(Link)`
  ${({ theme }) => css`
    ${theme.fonts.en.bold18};
    padding: 1rem 0;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.bold15};
    }
  `}
`;

export const JoinUsAnchor = styled.a`
  ${({ theme }) => css`
    ${theme.fonts.en.bold16};
    display: inline-block;
    padding: 1.1rem 2.2rem;
    color: ${theme.colors.white};
    background: linear-gradient(95.77deg, #ff3b5e 1.24%, #6046ff 104.64%);
    border-radius: 2.8rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.bold15};
      padding: 1rem 1.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.bold14};
      padding: 0.75rem 1.6rem;
    }
  `}
`;
