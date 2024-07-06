'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export const feedPopcorn = async () => {
  try {
    const authToken = cookies().get('token');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`https://api.dev-member.mash-up.kr/api/v1/mashong/popcorn/feed`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken.value}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        popcornCount: 1,
      }),
    });

    revalidatePath('mashong-status');

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      fed: false,
    };
  }
};
