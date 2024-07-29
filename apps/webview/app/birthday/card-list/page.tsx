import { headers } from 'next/headers';
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

const getMyUsingGET = async ({
  authorization,
}: {
  authorization: string;
}): Promise<
  | undefined
  | {
      data: {
        birthdayCards: BirthdayCardResponse[];
      };
    }
> => {
  const getMyUsingGETResponse = await fetch(
    'https://api.dev-member.mash-up.kr/api/v1/birthday-cards',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    },
  );
  if (!getMyUsingGETResponse.ok) return undefined;
  return getMyUsingGETResponse.json();
};

const Page = async () => {
  const authorization = headers().get('authorization');

  if (!authorization) {
    notFound();
  }

  const getMyUsingGETData = await getMyUsingGET({ authorization });

  if (!getMyUsingGETData) {
    notFound();
  }

  return (
    <>
      <styled.div>
        <styled.div px="20px">
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
