import '@emotion/react';
import { ColorType, FontType, GlobalZIndexType } from 'theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorType;
    fonts: FontType;
    globalZIndex: GlobalZIndexType;
  }
}
