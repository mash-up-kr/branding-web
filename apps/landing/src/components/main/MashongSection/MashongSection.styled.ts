import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MashongSection = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  overflow-y: scroll;
  scrollbar-width: none;

  &:-webkit-scrollbar {
    display: none;
  }
`;

export const MashongImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 48rem;
  height: 50rem;
  transform: translate3d(-50%, calc(-50% + 1rem), 0);
`;

export const MashongSectionScrollArea = styled.div`
  width: 100%;
  min-height: 400vh;
`;

export const BackgroundTextWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold230};
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: ${theme.globalZIndex.background};
    display: flex;
    flex-flow: column nowrap;
    transform: translate3d(-50%, calc(-50% - 3rem), 0);
  `}
`;

export const GradientText = styled.span`
  white-space: nowrap;
  background: linear-gradient(90deg, #ff3b5e 0.03%, #6046ff 99.96%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translate3d(-32rem, 0, 0);
`;

export const BorderText = styled.span`
  color: transparent;
  white-space: nowrap;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  transform: translate3d(32rem, 0, 0);
`;
