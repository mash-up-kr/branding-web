'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export const compensatePopcorn = async ({ missionLevelId }: { missionLevelId: number }) => {
  try {
    const authToken = cookies().get('token');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const params = new URLSearchParams({
      missionLevelId: String(missionLevelId),
    });

    const res = await fetch(
      `https://api.dev-member.mash-up.kr/api/v1/mashong/popcorn?${params.toString()}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken.value}`,
          'Content-Type': 'application/json',
        },
      },
    );

    revalidatePath('mashong-mission-status');

    const { data } = await res.json();
    return data as boolean;
  } catch (error) {
    console.error(error);
    return false;
  }
};
