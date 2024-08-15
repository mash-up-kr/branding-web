/**
 * @purpose 컴포넌트나 함수 내에서 수동으로 `throw new Error`를 작성하지 않아도, 조건이 충족되지 않으면 자동으로 에러를 처리해줍니다.
 */
export function assert(condition: boolean): asserts condition {
  if (!condition) {
    const conditionString = new Error().stack?.split('\n')[2].trim() || 'Assertion failed';
    throw new Error(`Assertion failed: ${conditionString}`);
  }
}

/**
 * @purpose 주어진 문자열 값이 제공된 객체의 키인지 확인합니다.
 */
export function isKeyOfObject<T extends object>(value: any, obj: T): value is keyof T {
  return value in obj;
}
