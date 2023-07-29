import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TypingContainer = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold16};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    line-height: 3.6rem;
    letter-spacing: normal;
    white-space: nowrap;
    text-align: center;
  `}
`;

export const TextRelative = styled.div`
  position: relative;
`;

interface MaskLineProps {
  isMaskLineIntersect: boolean;
}

export const MaskLine = styled.div<MaskLineProps>`
  ${({ isMaskLineIntersect }) => css`
    position: absolute;
    top: 0;
    right: 0;
    width: ${isMaskLineIntersect ? '0%' : '100%'};
    height: 100%;
    background: #000000;
    opacity: 0.9;
    transition: ${isMaskLineIntersect ? '2s linear' : 'none'};
  `}
`;
