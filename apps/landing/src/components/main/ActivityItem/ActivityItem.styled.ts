import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ActivityItemProps {
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export const ActivityItem = styled.article<ActivityItemProps>`
  ${({ position: { top = '', bottom = '', left = '', right = '' } }) => css`
    position: absolute;
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
    width: 37.1rem;
  `}
`;

export const ActivityTextWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-flow: column nowrap;
    gap: 0.6rem;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold24};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular16}
  `}
`;

export const Thumbnail = styled.img`
  ${() => css`
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
  `}
`;
