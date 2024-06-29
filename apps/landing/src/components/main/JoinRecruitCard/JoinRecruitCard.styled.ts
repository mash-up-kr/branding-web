import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Lottie } from 'ui';

export const JoinRecruitCard = styled.li`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold24};
    position: relative;
    min-width: 33.3rem;
    height: 30.3rem;
    padding: 2.4rem;
    white-space: pre-wrap;
    background: linear-gradient(90deg, #ff3b5e 0.11%, #6046ff 99.8%);
    border-radius: 1rem;
    cursor: pointer;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.bold22};

      min-width: 29.6rem;
      height: 27rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.kr.bold20};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      min-width: 27.5rem;
      height: 25rem;
      padding: 20px;
    }
  `}
`;

export const GoToRecruitLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const RightArrowIcon = styled.img`
  margin-left: 1rem;
`;

export const HiLottie = styled(Lottie)`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 17rem;
    height: 17rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      left: 1.8rem;
      width: 16rem;
      height: 16rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      left: 0;
      width: 15rem;
      height: 15rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      left: 1rem;
      width: 13rem;
      height: 13rem;
    }
  `}
`;

export const MashUpLogo = styled.img`
  ${({ theme }) => css`
    position: absolute;
    right: 2.4rem;
    bottom: 2.4rem;
    width: 3rem;
    height: 3rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      right: 2rem;
      bottom: 2rem;
      width: 2.6rem;
      height: 2.6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      right: 2rem;
      bottom: 2rem;
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;
