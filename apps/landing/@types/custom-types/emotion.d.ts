import '@emotion/react';
import { FontType, ColorType } from 'theme';

declare module '@emotion/react' {
  export interface Theme {
    fonts: FontType;
    colors: ColorType;
  }
}
