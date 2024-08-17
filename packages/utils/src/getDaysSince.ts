/**
 * 입력된 날짜부터 오늘까지 경과한 일수를 UTC 기준으로 반환합니다.
 *
 * @param {string} dateString - 기준 날짜 (형식: YYYY-MM-DD).
 * @returns {number} - 기준 날짜부터 오늘까지 경과한 일수.
 */
export function getDaysSince(dateString: string): number {
  const startDate = new Date(`${dateString}T00:00:00Z`).getTime();

  const today = new Date();
  const utcToday = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()),
  ).getTime();

  const timeDifference = utcToday - startDate;

  return Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;
}
