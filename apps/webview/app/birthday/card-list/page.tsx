import { cookies, headers } from 'next/headers';
import { notFound } from 'next/navigation';

import Contents from '@/app/birthday/card-list/Contents';
import { Square, styled } from '@/styled-system/jsx';

export interface BirthdayCardResponse {
  id: number;
  imageUrl: string;
  message: string;
  senderMemberName: string;
  senderMemberPlatform: string;
}

const getMyUsingGET = async (): Promise<
  | undefined
  | {
      data: {
        birthdayCards: BirthdayCardResponse[];
      };
    }
> => {
  const authToken = cookies().get('token')?.value ?? headers().get('authorization');

  if (!authToken) {
    throw new Error(`유효한 인증 토큰이 필요합니다.`);
  }

  const getMyUsingGETResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/birthday-cards`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  );
  if (!getMyUsingGETResponse.ok) return undefined;
  return getMyUsingGETResponse.json();
};

const Page = async () => {
  const getMyUsingGETData = await getMyUsingGET();

  if (!getMyUsingGETData) {
    notFound();
  }

  return (
    <>
      <styled.div>
        <styled.div px="20px" pt="env(safe-area-inset-top)">
          <styled.h2
            whiteSpace="pre-wrap"
            fontWeight={700}
            fontSize="24px"
            lineHeight={1.2}
            letterSpacing="-0.01em"
          >
            {getMyUsingGETData.data.birthdayCards.length === 0
              ? '매숑이가 너에게만 보낸\n특별한 선물이야'
              : '매숑이들이\n보낸 선물을 확인해 보세요'}
          </styled.h2>
        </styled.div>
        <Square size="40px" />
      </styled.div>
      <Contents birthdayCards={getMyUsingGETData.data.birthdayCards} />
    </>
  );
};

export default Page;
