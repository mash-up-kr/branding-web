import { PLATFORM_NAME_MAP } from '@/../../packages/constant';
import { headers } from 'next/headers';

import { MashongRoom } from '@/app/_components/MashongRoom';
import { PopcornToast } from '@/app/_components/PopcornToast';
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
      <MashongRoom keyValue={popcornValue} teamName={PLATFORM_NAME_MAP.WEB} mashongLevel={10} />
      <PopcornToast value={popcornValue} />
      <PopcornXpTracker currentValue={popcornValue ?? 0} maxValue={15} />
    </div>
  );
};

export default Page;
