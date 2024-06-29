import { headers } from 'next/headers';

import { PopcornXpTracker } from '@/app/_components/PopcornXpTracker';

async function getPopcorn() {
  try {
    const authToken = headers().get('authorization');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`https://api.dev-member.mash-up.kr/api/v1/mashong/popcorn`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return { data: null };
  }
}

const Page = async ({ params }: { params: { team: string } }) => {
  const { data: popcornValue } = await getPopcorn();

  return (
    <div>
      {params.team} Dashboard
      <PopcornXpTracker currentValue={popcornValue ?? 0} maxValue={10} />
    </div>
  );
};

export default Page;
