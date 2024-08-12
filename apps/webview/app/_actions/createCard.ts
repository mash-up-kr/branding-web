'use server';

import { cookies } from 'next/headers';

export const createCard = async ({
  id,
  message,
  imageUrl,
}: {
  id: string;
  message: string;
  imageUrl: string;
}) => {
  try {
    const authToken = cookies().get('token');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/birthday-cards`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken.value}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipientMemberId: Number(id),
        imageUrl,
        message,
      }),
    });

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
};
