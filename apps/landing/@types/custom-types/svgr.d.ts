import type { FunctionComponent, SVGAttributes } from 'react';

declare module '*.svg' {
  const svgComponent: FunctionComponent<SVGAttributes<SVGElement>>;
  export default svgComponent;
}
