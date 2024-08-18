'use server';

import { cookies } from 'next/headers';

export const levelUp = async (goalLevel: number) => {
  try {
    const authToken = cookies().get('token');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/mashong/level-up`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken.value}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        goalLevel,
      }),
    });

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      currentLevel: goalLevel - 1,
      levelUp: false,
    };
  }
};
