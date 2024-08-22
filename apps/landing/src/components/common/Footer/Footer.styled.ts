import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    max-width: 144rem;
    margin: 0 auto;
    padding: 6rem 8rem 14rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      flex-flow: column nowrap;
      gap: 3rem;
      align-items: center;
      justify-content: start;
      padding: 6rem 0;
    }
  `}
`;

export const MashUpHeading = styled.h2`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.8rem;
  align-items: center;
  justify-content: start;
`;

export const MashUpText = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold24};
  `}
`;

export const EtcItemsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
  align-items: end;
  justify-content: start;
`;

export const ExternalLinkWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: start;
`;

export const GithubIconWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 3.2rem;
  height: 3.2rem;
`;

export const GithubIconBackground = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 55%;
    left: 50%;
    width: 2.85rem;
    height: 2.85rem;
    background-color: ${theme.colors.white};
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0);
  `}
`;

export const CopyRight = styled.small`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular14};
    color: ${theme.colors.gray30};
  `}
`;
