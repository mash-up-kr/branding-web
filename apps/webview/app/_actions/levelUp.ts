'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export const levelUp = async (goalLevel: number) => {
  try {
    const authToken = cookies().get('token');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`https://api.dev-member.mash-up.kr/api/v1/mashong/level-up`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken.value}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        goalLevel,
      }),
    });

    revalidatePath('mashong-status');

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
