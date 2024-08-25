import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MashongSection = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 300vh;
  max-height: 300vh;
  overflow-y: scroll;
  scrollbar-width: none;

  &:-webkit-scrollbar {
    display: none;
  }
`;

export const FixedTriggerElement = styled.div`
  position: absolute;
  top: 100vh;
  width: 100%;
  height: 100vh;
  background: transparent;
`;

export const BottomTriggerElement = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
`;

export const ViewPortHeightElement = styled.div<{ isBottom: boolean }>`
  ${({ isBottom }) => css`
    position: absolute;
    top: ${isBottom ? null : 0};
    bottom: ${isBottom ? 0 : null};
    left: 0;
    width: 100%;
    height: 100vh;
    background: transparent;
  `}
`;

export const MashongImage = styled.img<{ isFixed: boolean }>`
  ${({ theme, isFixed }) => css`
    position: ${isFixed ? 'fixed' : 'absolute'};
    top: calc(50% - 1rem);
    left: 50%;
    width: 48rem;
    height: 50rem;
    transform: translate3d(-50%, -50%, 0);

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      width: 40.2rem;
      height: 41.8rem;
    }
    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      width: 32.8rem;
      height: 34.1rem;
    }
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 26rem;
      height: 27rem;
    }
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 21.2rem;
      height: 22rem;
    }
  `}
`;

export const BackgroundTextWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold230};
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: ${theme.globalZIndex.background};
    display: flex;
    flex-flow: column nowrap;
    transform: translate3d(-50%, calc(-50% - 3rem), 0);

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.extrabold150};
      transform: translate3d(-50%, calc(-50% - 1.5rem), 0);
    }
    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold130};
      transform: translate3d(-50%, -50%, 0);
    }
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold101};
      transform: translate3d(-50%, -50%, 0);
    }
  `}
`;

export const GradientText = styled.span<{ isInteractionTrigger: boolean }>`
  ${({ isInteractionTrigger }) => css`
    white-space: nowrap;
    background: linear-gradient(90deg, #ff3b5e 0.03%, #6046ff 99.96%);
    background-clip: text;
    transform: ${isInteractionTrigger ? 'translate3d(-32rem, 0, 0)' : 'translate3d(-150%, 0, 0)'};
    transition: transform 1.5s ease;
    -webkit-text-fill-color: transparent;
  `}
`;

export const BorderText = styled.span<{ isInteractionTrigger: boolean }>`
  ${({ isInteractionTrigger }) => css`
    color: transparent;
    white-space: nowrap;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    transform: ${isInteractionTrigger ? 'translate3d(32rem, 0, 0)' : 'translate3d(150%, 0, 0)'};
    transition: transform 1.5s ease;
  `}
`;

export const MashongDescriptionRelativeElement = styled.div<{ isFullHeight: boolean }>`
  ${({ isFullHeight }) => css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${isFullHeight ? '100%' : '100vh'};
    background: transparent;
  `}
`;

export const MashongDescriptionContainer = styled.article<{ isFixed: boolean; isHide: boolean }>`
  ${({ theme, isFixed, isHide }) => css`
    position: ${isFixed ? 'fixed' : 'absolute'};
    bottom: 50%;
    left: 50%;
    gap: 2rem;
    width: 50.4rem;
    padding: 3rem;
    background: linear-gradient(113deg, rgba(33, 37, 41, 0.8) 0%, rgba(33, 37, 41, 0) 142.22%);
    border: 0.1rem solid rgba(255, 255, 255, 0.7);
    border-radius: 2rem;
    transform: translate3d(-50%, 50%, 0);
    opacity: ${isHide ? 0 : 1};
    backdrop-filter: blur(2.6rem);
    transition: opacity 0.8s ease;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      width: 36.4rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      width: 35.2rem;
      padding: 2.4rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 31.5rem;
    }
  `}
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    align-items: start;
    justify-content: start;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 1.2rem;
    }
  `}
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  align-items: center;
  justify-content: start;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold32};

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.bold20};
    }
  `}
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold16};
    padding: 0.2rem 1.2rem;
    color: ${theme.colors.white};
    border: 0.15rem solid ${theme.colors.white};
    border-radius: 4rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.bold13};
      padding: 0.35rem 1.2rem;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium20};
    color: ${theme.colors.white};
    line-height: 1.8;
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.medium15};
      line-height: 1.7;
    }
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.medium14};
      line-height: 1.7;
    }
  `}
`;
