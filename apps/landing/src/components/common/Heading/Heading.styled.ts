import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

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
