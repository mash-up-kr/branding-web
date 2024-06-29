export type KeyOf<T> = keyof T;
export type ValueOf<T> = T[keyof T];

/** @see {@link https://github.com/microsoft/TypeScript/issues/43505#issuecomment-1686128430} */
export type NumericRange<
  start extends number,
  end extends number,
  arr extends unknown[] = [],
  acc extends number = never,
> = arr['length'] extends end
  ? acc | start | end
  : NumericRange<start, end, [...arr, 1], arr[start] extends undefined ? acc : acc | arr['length']>;
