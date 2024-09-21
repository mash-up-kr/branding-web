'use server';

import { cookies } from 'next/headers';

export const feedPopcorn = async () => {
  try {
    const authToken = cookies().get('token');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/mashong/popcorn/feed`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken.value}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        popcornCount: 1,
      }),
    });

    const { data } = await res.json();

    return {
      remainingPopcorn: data.lastPopcornValue,
      currentLevel: data.currentLevel,
      currentXP: data.accumulatedPopcornValue,
      maxXP: data.currentLevelGoalPopcorn,
      fed: data.fed,
    };
  } catch (error) {
    console.error(error);
    return {
      fed: false,
    };
  }
};
