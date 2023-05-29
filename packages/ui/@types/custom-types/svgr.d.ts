declare module '*.svg' {
  import React from 'react';

  const svgComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default svgComponent;
}
