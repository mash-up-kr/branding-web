import Cookies from 'js-cookie';

export const getMashongStatus = async () => {
  try {
    const authToken = Cookies.get('token');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/mashong/status`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      next: { tags: ['mashong-status'] },
    });

    const { data } = await res.json();

    return {
      remainingPopcorn: data.lastPopcornValue,
      currentLevel: data.currentLevel,
      currentXP: data.accumulatedPopcornValue,
      maxXP: data.goalPopcornValue,
      platformName: data.platformName,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
