import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProjectSection = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    gap: 5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    scroll-snap-align: center;
    scroll-snap-stop: always;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 5rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      gap: 4rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      gap: 4rem;
    }
  `}
`;

export const HeaderLayout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 144rem;
    margin: 0 auto;
    padding: 0 8rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      width: 100%;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      padding: 0 6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      padding: 0 3rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 0 2rem;
    }
  `}
`;

export const Heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    gap: 1.6rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 1.2rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      gap: 1rem;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold70};
    display: flex;
    flex-flow: column nowrap;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.extrabold54};
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold50};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold46};
    }
  `}
`;

export const GradientText = styled.span`
  background: linear-gradient(91deg, #ff3b5e 0.4%, #6046ff 68.8%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.kr.medium15};
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.kr.medium14};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.medium13};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      white-space: normal;
    }
  `}
`;

export const SlideController = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    gap: 4rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 3rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      gap: 2rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: none;
    }
  `}
`;

export const SlideControlButton = styled.button<{ isDisabled: boolean }>`
  ${({ theme, isDisabled }) => css`
    width: 5rem;
    height: 5rem;
    margin: 0;
    padding: 0;
    background: none;
    border: 0;
    opacity: ${isDisabled ? 0.7 : 1};
    transition: opacity 0.2s ease-in-out;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      width: 4.2rem;
      height: 4.2rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      width: 4rem;
      height: 4rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 3.2rem;
      height: 3.2rem;
    }
  `}
`;

export const ButtonImageLeft = styled.img`
  width: 100%;
  height: 100%;
  rotate: 180deg;
`;
export const ButtonImageRight = styled.img`
  width: 100%;
  height: 100%;
`;

export const SlideLayout = styled.div<{ transform: string }>`
  ${({ theme, transform }) => css`
    display: flex;
    flex-flow: row nowrap;
    gap: 5rem;
    align-items: start;
    justify-content: start;
    max-width: 100vw;
    transform: ${transform};
    transition: transform 1s ease-in-out;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 3rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      gap: 2rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      gap: 2rem;
      overflow-x: scroll;
      scrollbar-width: none;

      &:-webkit-scrollbar {
        display: none;
      }
    }
  `}
`;

export const ProjectCard = styled.div`
  ${({ theme }) => css`
    position: relative;
    min-width: 34.4rem;
    height: 51.6rem;
    overflow: hidden;
    border-radius: 1rem;

    &:first-of-type {
      margin-left: calc((100vw - 144rem + 16rem) / 2);
    }
    &:last-of-type {
      margin-right: calc((100vw - 144rem + 16rem) / 2);
    }

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      min-width: 26rem;
      height: 39rem;
      border-radius: 0.75rem;

      &:first-of-type {
        margin-left: 8rem;
      }
      &:last-of-type {
        margin-right: 8rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      min-width: 26rem;
      height: 39rem;
      border-radius: 0.75rem;

      &:first-of-type {
        margin-left: 6rem;
      }
      &:last-of-type {
        margin-right: 6rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      min-width: 20.8rem;
      height: 31.3rem;
      border-radius: 2rem;

      &:first-of-type {
        margin-left: 3rem;
      }
      &:last-of-type {
        margin-right: 3rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      min-width: 20.8rem;
      height: 31.3rem;
      border-radius: 2rem;

      &:first-of-type {
        margin-left: 2rem;
      }
      &:last-of-type {
        margin-right: 2rem;
      }
    }
  `}
`;

export const ProjectInfoWrapper = styled.div<{ backgroundImageUrl: string }>`
  ${({ backgroundImageUrl }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    background: url(${backgroundImageUrl}) no-repeat center center / cover;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);

      & > div {
        bottom: 0;
      }
    }
  `}
`;

export const ProjectInfo = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: -100%;
    left: 0;
    display: flex;
    flex-flow: column nowrap;
    gap: 1.2rem;
    align-items: start;
    justify-content: start;
    width: 100%;
    padding: 3rem;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.59) 37%,
      rgba(0, 0, 0, 0.9) 100%
    );
    transition: bottom 0.3s ease-in-out;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 0.8rem;
      padding: 2.4rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      gap: 0.6rem;
      padding: 2.4rem;
    }
  `}
`;

export const Generation = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold18};
    width: auto;
    padding: 0.3rem 1.2rem;
    border: 1px solid ${theme.colors.white};
    border-radius: 3.5rem;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.extrabold14};
      padding: 0.2rem 0.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold12};
      padding: 0.2rem 0.7rem;
    }
  `}
`;

export const ProjectTitleArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    gap: 0.8rem;
    align-items: start;
    justify-content: start;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      gap: 0.6rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      gap: 0.4rem;
    }
  `}
`;

export const ProjectTitle = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold34};
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.extrabold26}
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold20}
    }
  `}
`;

export const SubTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.bold20}

    @media (max-width: ${theme.breakPoint.media.notebook}) {
      ${theme.fonts.en.bold15}
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.bold13}
    }
  `}
`;
