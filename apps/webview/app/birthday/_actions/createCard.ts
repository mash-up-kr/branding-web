'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const createCard = async ({
  recipientMemberId,
  imageUrl,
  message,
}: {
  recipientMemberId: number;
  imageUrl: string;
  message: string;
}) => {
  try {
    const authToken = cookies().get('token');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/birthday-cards`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken.value}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipientMemberId,
        imageUrl,
        message,
      }),
    });

    const { code } = await response.json();

    revalidateTag('birthday-list');

    return code;
  } catch (error) {
    console.error(error);
    return 'ERROR';
  }
};
