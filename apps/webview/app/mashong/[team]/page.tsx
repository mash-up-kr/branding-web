import { PLATFORM_NAME_MAP } from 'constant';
import { cookies, headers } from 'next/headers';
import { assert, isKeyOfObject, getDaysSince } from 'utils';

import { styled } from '@/styled-system/jsx';

import Header from './_components/Header';
import { MashongRoomContainer } from './_components/MashongRoomContainer';
import { TopMenuButton } from './_components/TopMenuButton';

export const revalidate = 1;

async function getMashongStatus() {
  try {
    const authToken = cookies().get('token')?.value ?? headers().get('authorization');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/mashong/status`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      next: { tags: ['mashong-status'] },
    });

    const { data } = await res.json();

    return {
      remainingPopcorn: data.lastPopcornValue,
      currentLevel: data.currentLevel,
      currentXP: data.accumulatedPopcornValue,
      maxXP: data.goalPopcornValue,
      platformName: data.platformName,
    };
  } catch (error) {
    console.error(error);
    return {
      remainingPopcorn: 10,
      currentLevel: 1,
      currentXP: 80,
      maxXP: 100,
      platformName: 'Android',
    };
  }
}

async function checkAttendance() {
  try {
    const authToken = cookies().get('token')?.value ?? headers().get('authorization');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/mashong/attend`, {
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
  const { currentXP, maxXP, remainingPopcorn, currentLevel } = await getMashongStatus();

  const platformName: string = params.team.toUpperCase();
  assert(isKeyOfObject(platformName, PLATFORM_NAME_MAP));

  const isAttendSuccess = (await checkAttendance()) ?? false;

  return (
    <styled.div>
      <Header currentLevel={currentLevel} platformName={platformName} />
      <styled.div px={24} pt={56}>
        <styled.h2 fontWeight={600} fontSize={24} lineHeight="28.6px" letterSpacing="-1%" mb={16}>
          매숑이가 성장한지{' '}
          <styled.span color="brand.500">
            {/** 14기 시작 기준 */}
            {getDaysSince('2024-03-09')}
          </styled.span>
          일째
        </styled.h2>
        <styled.div display="flex" gap={16}>
          <TopMenuButton variant="checkin" shouldOpenSheet={isAttendSuccess}>
            출석
          </TopMenuButton>
          <TopMenuButton variant="mission">미션</TopMenuButton>
        </styled.div>
        <MashongRoomContainer
          remainingPopcorn={remainingPopcorn}
          currentLevel={currentLevel}
          currentXP={currentXP}
          maxXP={maxXP}
          platformName={platformName}
        />
      </styled.div>
    </styled.div>
  );
};

export default Page;
