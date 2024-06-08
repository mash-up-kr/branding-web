const staticOrigin = 'static.mash-up.kr';
export const createSvgUrl = (basePath: string) => (path: string) =>
  `//${staticOrigin}/images/svg/${basePath}/${path}.svg`;
