'use server';

import { cookies } from 'next/headers';

export const createPresignedUrl = async () => {
  try {
    const authToken = cookies().get('token');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/birthday-cards/images/presigned-url`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken.value}`,
          'Content-Type': 'application/json',
        },
      },
    );

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return 'ERROR';
  }
};
