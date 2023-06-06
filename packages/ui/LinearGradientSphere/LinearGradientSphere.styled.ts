import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TPlatform } from 'constants';

export type TSphereVariants = TPlatform | 'MASHUP' | 'DEFAULT';

const SPHERE_BACKLIGHT_COLOR = {
  DEFAULT: 'linear-gradient(0deg, #FF1C60 36.93%, #5243FF 100%)',
  MASHUP: 'linear-gradient(98.54deg, #FF1C60 0%, #5243FF 100%)',
  IOS: 'linear-gradient(134.55deg, #4A527C 15.9%, #ADBAFF 92.94%)',
  NODE: 'linear-gradient(154.94deg, #FF2F61 0.01%, #FFB48A 109.79%)',
  BRANDING: 'linear-gradient(141.58deg, #FFD702 3.14%, #FF7629 99.26%)',
  DESIGN: 'linear-gradient(135deg, #6842FF 0%, #C446FF 100%)',
  WEB: 'linear-gradient(111.03deg, #0A31FF 11.37%, #0AB5FF 93.31%)',
  SPRING: 'linear-gradient(69.27deg, #1CFF77 -1.02%, #43D2FF 110.44%)',
  ANDROID: 'linear-gradient(91.02deg, #0DA300 3.3%, #9EFF00 104.01%)',
};

const BOX_SHADOW = {
  DEFAULT: 'inset 0px 0px 63.0025px rgba(101, 75, 204, 0.45)',
  MASHUP: 'inset 0px 0px 29.8323px rgba(194, 75, 204, 0.45)',
  DESIGN: 'inset 0px 0px 29.8323px rgba(101, 75, 204, 0.45)',
  IOS: 'inset 0px 0px 29.8323px rgba(167, 173, 204, 0.45)',
  ANDROID: 'inset 0px 0px 29.8323px rgba(75, 204, 111, 0.45)',
  WEB: 'inset 0px 0px 29.8323px rgba(75, 111, 204, 0.45)',
  SPRING: 'inset 0px 0px 29.8323px rgba(75, 173, 204, 0.45)',
  NODE: 'inset 0px 0px 29.8323px rgba(204, 75, 75, 0.45)',
} as const;

const SPHERE_COLOR = {
  DEFAULT: 'linear-gradient(180deg, #2C3265 -3.9%, #000000 20.31%)',
  MASHUP:
    'linear-gradient(180deg, rgba(84, 41, 255, 0.3) -3.9%, rgba(108, 0, 52, 0.46) -3.89%, rgba(20, 0, 62, 0.83) 16.09%, #000000 33.78%)',
  DESIGN: 'linear-gradient(180deg, #31017F -3.9%, #000000 20.31%)',
  IOS: 'linear-gradient(180deg, #494F73 -3.9%, #000000 20.31%)',
  ANDROID: 'linear-gradient(180deg, #123800 -3.9%, #000000 20.31%)',
  WEB: 'linear-gradient(180deg, #002358 -3.9%, #000000 20.31%)',
  SPRING: 'linear-gradient(180deg, #004438 -3.9%, #000000 20.31%)',
  NODE: 'linear-gradient(180deg, #580000 -3.9%, #000000 20.31%)',
};

export interface SphereContainerProps {
  diameterRem: number;
  position?: 'relative' | 'absolute' | 'static' | 'fixed' | 'sticky';
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const SphereContainer = styled.div<SphereContainerProps>`
  ${({ theme, diameterRem, position = 'relative', top, bottom, left, right }) => css`
    position: ${position};
    top: ${top ? `${top}` : 'unset'};
    right: ${right ? `${right}` : 'unset'};
    bottom: ${bottom ? `${bottom}` : 'unset'};
    left: ${left ? `${left}` : 'unset'};
    z-index: ${theme.globalZIndex.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: ${diameterRem}rem;
    opacity: 0.7;
  `}
`;

export const BackLight = styled.div<{ variant?: TSphereVariants; diameterRem: number }>`
  ${({ variant, diameterRem }) => css`
    position: absolute;
    top: -0.5rem;
    width: ${diameterRem}rem;
    height: ${diameterRem}rem;
    background: ${variant ? SPHERE_BACKLIGHT_COLOR[variant] : SPHERE_BACKLIGHT_COLOR.DEFAULT};
    border-radius: ${diameterRem}rem;
    opacity: 0.8;
    filter: blur(6.4rem);
  `}
`;

export const Sphere = styled.div<{ variant?: TSphereVariants; diameterRem: number }>`
  ${({ variant, diameterRem }) => css`
    position: absolute;
    width: ${diameterRem}rem;
    height: ${diameterRem}rem;
    background: ${variant ? SPHERE_COLOR[variant] : SPHERE_COLOR.DEFAULT};
    border-radius: ${diameterRem}rem;
    box-shadow: ${variant ? BOX_SHADOW[variant] : BOX_SHADOW.DEFAULT};
  `}
`;
