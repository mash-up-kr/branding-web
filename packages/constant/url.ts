export const STATIC_ORIGIN = 'https://static.mash-up.kr';

export const createSvgUrl = (basePath: string) => (path: string) =>
  `${STATIC_ORIGIN}/images/svg/${basePath}/${path}.svg`;

export const createPngUrl = (basePath: string) => (path: string) =>
  `${STATIC_ORIGIN}/images/png/${basePath}/${path}.png`;

export const createJpgUrl = (basePath: string) => (path: string) =>
  `${STATIC_ORIGIN}/images/jpg/${basePath}/${path}.jpg`;
