import { cookies, headers } from 'next/headers';
import Image from 'next/image';

import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

import GoBirthdayCardCreatorButton from './_components/GoBirthdayCardCreatorButton';
import GoBirthdayEventButton from './_components/GoBirthdayEventButton';
import TopNavigationButton from './_components/TopNavigationButton';

type Member = {
  congratulated: boolean;
  id: number;
  name: string;
  platform: string;
};

type Birthday = {
  date: string;
  members: Member[];
};

async function getCrewList() {
  try {
    const authToken = cookies().get('token')?.value ?? headers().get('authorization');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/birthdays/upcoming?days=7`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { isBirthdayToday: false, todayBirthday: false, upcomingBirthdays: [] };
  }
}

async function getMyProfile() {
  try {
    const authToken = cookies().get('token')?.value ?? headers().get('authorization');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/members`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { name: '' };
  }
}

const Page = async () => {
  const data = await getCrewList();
  const myProfile = await getMyProfile();

  return (
    <styled.div pt="env(safe-area-inset-top)">
      <TopNavigationButton />
      {data?.isBirthdayToday && (
        <styled.div
          position="sticky"
          top="calc(56px + env(safe-area-inset-top))"
          width="100vw"
          p="0 20px 20px"
          bgColor="gray.50"
        >
          <styled.div
            display="flex"
            justifyContent="space-between"
            fontSize="24px"
            fontWeight={700}
            lineHeight="28.64px"
            letterSpacing="-0.01em"
          >
            <styled.div>
              {myProfile?.name}님,
              <br /> 오늘 생일이시군요!
            </styled.div>
            <Image
              unoptimized
              alt=""
              width={60}
              height={60}
              src="https://static.mash-up.kr/images/png/birthday/mashong-with-cake.png"
              style={{ rotate: '2deg' }}
            />
          </styled.div>
          <GoBirthdayEventButton />
        </styled.div>
      )}
      <styled.div
        p="0 20px 20px"
        bgColor="gray.50"
        overflow="auto"
        height="calc(100dvh - 179px - env(safe-area-inset-top))"
      >
        <styled.div display="flex" gap="32px" flexDirection="column">
          {!data?.isBirthdayToday &&
            !data?.todayBirthday &&
            data?.upcomingBirthdays.length === 0 && (
              <styled.div>
                <styled.div fontSize="24px" fontWeight={600} lineHeight="28.64px">
                  다가오는 생일이
                  <br />
                  없어요
                </styled.div>
                <styled.div
                  position="absolute"
                  left="50%"
                  top="50%"
                  transform="translate(-50%, -50%)"
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <SvgImage
                    basePath="birthday"
                    path="common/empty-mashong"
                    width={284}
                    height={256}
                  />
                  <styled.div
                    fontSize="20px"
                    fontWeight={700}
                    lineHeight="23.87px"
                    color="#25272E"
                    mt="17px"
                  >
                    축하받을 사람이가
                    <br />
                    언제 나타날까..
                  </styled.div>
                </styled.div>
              </styled.div>
            )}
          {(data?.todayBirthday?.members ?? []).length > 0 && (
            <styled.div display="flex" gap="12px" flexDirection="column" flex={1}>
              <styled.div fontSize="14px" fontWeight={500} color="#383E4C">
                오는 생일
              </styled.div>
              <styled.div display="flex" flexDirection="column" gap="16px">
                {data?.todayBirthday.members.map((member: any) => (
                  <styled.div
                    key={member.id}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <styled.div display="flex" gap="12px">
                      {/* <styled.div width="44px" height="44px" bgColor="purple" borderRadius="8px" /> */}
                      <SvgImage
                        basePath="birthday"
                        path={`platform/${member.platform}`}
                        width={44}
                        height={44}
                      />
                      <styled.div>
                        <styled.div fontSize="16px" fontWeight={700} color="#2C3037">
                          {member.name}
                        </styled.div>
                        <styled.div fontSize="14px" fontWeight={400} color="#ABB2C1">
                          {member.platform}
                        </styled.div>
                      </styled.div>
                    </styled.div>
                    {member.congratulated ? (
                      <styled.div fontSize="14px" color="#6A36FF" fontWeight={400}>
                        축하 완료
                      </styled.div>
                    ) : (
                      <GoBirthdayCardCreatorButton id={member.id} name={member.name} />
                    )}
                  </styled.div>
                ))}
              </styled.div>
            </styled.div>
          )}
          {(data?.upcomingBirthdays ?? []).length > 0 && (
            <styled.div display="flex" flexDirection="column" gap="12px" flex={1}>
              <styled.div fontSize="14px" fontWeight={500} color="#383E4C">
                다가오는 생일
              </styled.div>
              <styled.div display="flex" flexDirection="column" gap="20px">
                {data?.upcomingBirthdays.map((i: Birthday, index: number) => (
                  <styled.div key={index} display="flex" flexDirection="column" gap="8px">
                    <styled.div fontSize="12px" fontWeight={400} color="#686F7E">
                      {new Date().getFullYear()}-{i.date}
                    </styled.div>
                    <styled.div display="flex" flexDirection="column" gap="16px">
                      {i.members.map((j) => (
                        <styled.div key={j.name} display="flex" alignItems="center">
                          <styled.div display="flex" gap="12px">
                            <SvgImage
                              basePath="birthday"
                              path={`platform/${j.platform}`}
                              width={44}
                              height={44}
                            />
                            <styled.div>
                              <styled.div fontSize="16px" fontWeight={700} color="#2C3037">
                                {j.name}
                              </styled.div>
                              <styled.div fontSize="14px" fontWeight={400} color="#ABB2C1">
                                {j.platform}
                              </styled.div>
                            </styled.div>
                          </styled.div>
                        </styled.div>
                      ))}
                    </styled.div>
                  </styled.div>
                ))}
              </styled.div>
            </styled.div>
          )}
        </styled.div>
      </styled.div>
    </styled.div>
  );
};
export default Page;
