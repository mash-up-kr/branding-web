import { PLATFORM_NAME_MAP } from '@/../../packages/constant';
import { cookies, headers } from 'next/headers';

import { styled } from '@/styled-system/jsx';

import { GoDiaryButton } from './_components/GoDiaryButton';
import { MashongRoomContainer } from './_components/MashongRoomContainer';
import { TopMenuButton } from './_components/TopMenuButton';
import { TopNavigationButton } from './_components/TopNavigationButton';

async function getMashongStatus() {
  try {
    const authToken = cookies().get('token')?.value ?? headers().get('authorization');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`https://api.dev-member.mash-up.kr/api/v1/mashong/status`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      next: { tags: ['mashong-status'] },
    });

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      accumulatedPopcornValue: 0,
      currentLevel: 1,
      goalPopcornValue: 0,
      lastPopcornValue: 0,
    };
  }
}

async function checkAttendance() {
  try {
    const authToken = cookies().get('token')?.value ?? headers().get('authorization');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`https://api.dev-member.mash-up.kr/api/v1/mashong/attend`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

const Page = async ({ params }: { params: { team: string } }) => {
  const { accumulatedPopcornValue, currentLevel, goalPopcornValue, lastPopcornValue } =
    await getMashongStatus();

  const teamName = params.team.toUpperCase() as keyof typeof PLATFORM_NAME_MAP;

  await checkAttendance();

  return (
    <styled.div>
      <styled.div display="flex" justifyContent="space-between" my="8px">
        <TopNavigationButton />
        <GoDiaryButton />
      </styled.div>
      <styled.h2
        fontWeight={600}
        fontSize={24}
        lineHeight="28.6px"
        letterSpacing="-1%"
        mb={16}
        mt={8}
      >
        매숑이가 성장한지 <styled.span color="brand.500">50</styled.span>일째
      </styled.h2>
      <styled.div display="flex" gap={16}>
        <TopMenuButton variant="checkin">출석</TopMenuButton>
        <TopMenuButton variant="mission">미션</TopMenuButton>
      </styled.div>
      <MashongRoomContainer
        availablePopcorn={lastPopcornValue}
        currentLevel={currentLevel}
        currentXP={accumulatedPopcornValue}
        maxXP={goalPopcornValue}
        teamName={teamName}
      />
    </styled.div>
  );
};

export default Page;
