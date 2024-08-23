import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MashongSection = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100vh;
  min-height: 300vh;
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
  height: 50vh;
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
