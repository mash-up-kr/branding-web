import { cookies, headers } from 'next/headers';
import { notFound } from 'next/navigation';

import Sheet from '@/app/mashong/mission-board/Sheet';
import { Square, styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

import { PopcornAlert } from './PopcornAlert';

export type MissionStatus = {
  compensation: number;
  currentStatus: number;
  goal: number;
  isCompensated: boolean;
  level: number;
  missionLevelId: number;
  missionRepeatType: 'DAILY' | 'NONE';
  missionType: 'INDIVIDUAL' | 'TEAM';
  title: string;
};

const missionStatusListUsingGET = async ({
  authorization,
}: {
  authorization: string;
}): Promise<undefined | { data: MissionStatus[] }> => {
  const missionStatusListUsingGETResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/mashong-mission/status`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
      next: { tags: ['mashong-mission-status'] },
    },
  );

  if (!missionStatusListUsingGETResponse.ok) return undefined;
  return missionStatusListUsingGETResponse.json();
};

const Page = async () => {
  const authorization = cookies().get('token')?.value ?? headers().get('authorization');

  if (!authorization) {
    notFound();
  }

  const missionStatusListUsingGETData = await missionStatusListUsingGET({
    authorization,
  });

  if (!missionStatusListUsingGETData) {
    console.error('missionStatusListUsingGETData is undefined');
    notFound();
  }

  const popcornCountRemainingToObtain = missionStatusListUsingGETData.data?.reduce(
    (acc, { isCompensated, compensation }) => (isCompensated ? acc : acc + compensation),
    0,
  );

  return (
    <>
      <Square size="24px" />
      <styled.div display="flex" justifyContent="space-between" px="20px">
        <styled.div display="flex" flexDirection="column" gap="10px">
          <styled.span
            color="white"
            whiteSpace="pre-line"
            fontWeight="700"
            fontSize="24px"
            lineHeight="1.2"
          >
            튀길 수 있는 팝콘이{'\n'}
            {popcornCountRemainingToObtain}알 있어요!
          </styled.span>
          <styled.span
            color="white"
            letterSpacing="-0.01em"
            lineHeight="1.2"
            fontWeight="500"
            fontSize="14px"
          >
            미션을 달성하고 팝콘을 모아보세요!
          </styled.span>
        </styled.div>
        <styled.div w="60px" h="60px">
          <SvgImage path="mission-board/popcorn" width={60} height={60} />
        </styled.div>
      </styled.div>
      <Sheet missions={missionStatusListUsingGETData.data} />
      <PopcornAlert />
    </>
  );
};
export default Page;
