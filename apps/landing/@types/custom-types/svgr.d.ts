import React from 'react';

declare module '*.svg' {
  const svgComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default svgComponent;
}
