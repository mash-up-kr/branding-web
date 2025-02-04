import { css } from '@emotion/react';
import styled from '@emotion/styled';

import MashUpLogoIcon from '@/assets/svg/mash-up-recruit-banner-logo.svg';
import RecruitingBannerLeftVectorIcon from '@/assets/svg/recruiting-banner-left-vector.svg';
import RecruitingBannerRightVectorIcon from '@/assets/svg/recruiting-banner-right-vector.svg';
import RightArrowIcon from '@/assets/svg/right-arrow.svg';

export const RecruitingBanner = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: -10rem;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: linear-gradient(90deg, #1b64ff 0%, #7632ff 100%);

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      bottom: -8rem;
    }
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      bottom: -6rem;
    }
  `}
`;

export const RecruitingBannerInner = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    gap: 2.4rem;
    align-items: center;
    justify-content: center;
    padding: 2.4rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 1.6rem;
      padding: 1.8rem;
    }
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding: 1.25rem;
    }
  `}
`;

export const RecruitBannerTextWrapperContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 0.8rem;
    }
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      flex-flow: column nowrap;
      gap: 0.3rem;
      align-items: start;
    }
  `}
`;

export const RecruitBannerTextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 0.8rem;
    }
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      gap: 0.6rem;
    }
  `}
`;

export const RecruitingBannerEnText = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold32};
    color: ${theme.colors.white};

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.extrabold20};
    }
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold15};
      line-height: 1;
    }
  `}
`;

export const RecruitingBannerKrText = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold30};
    color: ${theme.colors.white};

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.bold19};
    }
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold16};
      line-height: 1;
    }
  `}
`;

export const MoveToRecruitingPageButton = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold24};
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0.8rem 2.4rem;
    color: ${theme.colors.purple70};
    background: ${theme.colors.white};
    border-radius: 2.3rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.bold13};
      gap: 0.7rem;
      padding: 0.8rem 1.6rem;
      line-height: 1.2;
    }
  `}
`;

export const MashUpLogo = styled(MashUpLogoIcon)`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoint.media.notebook}) {
      width: 2.4rem;
      height: 2.4rem;
    }
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 1.6rem;
      height: 1.6rem;
    }
  `}
`;

export const RightArrow = styled(RightArrowIcon)`
  ${({ theme }) =>
    css`
      @media (max-width: ${theme.breakPoint.media.notebook}) {
        width: 1.6rem;
        height: 0.74rem;
      }
    `}
`;

export const RecruitingBannerLeftVector = styled(RecruitingBannerLeftVectorIcon)`
  ${({ theme }) =>
    css`
      position: absolute;
      top: 50%;
      left: -16.8rem;
      transform: translate3d(0, -50%, 0);

      @media (max-width: ${theme.breakPoint.media.notebook}) {
        left: -10.7rem;
        width: 6.95rem;
        height: 3.1rem;
      }
      @media (max-width: ${theme.breakPoint.media.tabletS}) {
        left: -9.2rem;
        width: 5.87rem;
        height: 2.6rem;
      }
      @media (max-width: ${theme.breakPoint.media.mobile}) {
        display: none;
      }
    `}
`;

export const RecruitingBannerRightVector = styled(RecruitingBannerRightVectorIcon)`
  ${({ theme }) => css`
    position: absolute;
    top: 2.52rem;
    right: -13rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      top: 2.6rem;
      right: -7.1rem;
      width: 3.75rem;
      height: 1.8rem;
    }
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      top: 1.9rem;
      right: -7.1rem;
      width: 3.17rem;
      height: 1.5rem;
    }
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: none;
    }
  `}
`;
