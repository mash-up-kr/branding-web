export const globalZIndex = {
  background: -5,
  default: 0,
  content: 5,
} as const;

export type GlobalZIndexType = typeof globalZIndex;
