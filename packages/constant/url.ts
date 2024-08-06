export const STATIC_ORIGIN = 'static.mash-up.kr';
export const createSvgUrl = (basePath: string) => (path: string) =>
  `//${STATIC_ORIGIN}/images/svg/${basePath}/${path}.svg`;
