'use server';

import { cookies } from 'next/headers';

export const feedPopcorn = async () => {
  const authToken = cookies().get('token');
  if (!authToken) throw new Error('auth cookie required.');

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

  const { message, data } = await res.json();

  if (message) {
    console.error(message);
  }

  console.log('TEST:data ', data);
  return data;
};
