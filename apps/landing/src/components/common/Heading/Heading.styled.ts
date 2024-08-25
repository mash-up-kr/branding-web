import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { MashUpLogo as MashUpLogoComponent } from 'ui';

export const LinkToHome = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.8rem;
  align-items: center;
`;

export const MashUp = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold24};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold20};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      display: none;
    }
  `}
`;

export const MashUpLogo = styled(MashUpLogoComponent)`
  ${({ theme }) => css`
    width: 4.4rem;
    height: 4.4rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      width: 3.6rem;
      height: 3.6rem;
    }
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;
