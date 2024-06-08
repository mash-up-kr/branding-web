declare module '*.svg' {
  import type { FunctionComponent, SVGAttributes } from 'react';

  const svgComponent: FunctionComponent<SVGAttributes<SVGElement>>;
  export default svgComponent;
}
