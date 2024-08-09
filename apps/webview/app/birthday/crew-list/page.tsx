'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import useFetch from '@/hooks/useFetch';
import { useWebviewHandler } from '@/hooks/useWebviewHandler';
import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

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

const Page = () => {
  const router = useRouter();
  const webviewHandler = useWebviewHandler();

  const { data } = useFetch<{
    isBirthdayToday: boolean; // 해당 유저 생일
    todayBirthday: Birthday;
    upcomingBirthdays: Birthday[];
  }>('/v1/birthdays/upcoming?days=7');

  const { data: myProfile } = useFetch<{ name: string }>('/v1/members');

  return (
    <styled.div pt="env(safe-area-inset-top)">
      <styled.div
        position="sticky"
        top="env(safe-area-inset-top)"
        bgColor="gray.50"
        display="flex"
        alignItems="center"
        height="56px"
        minW="100%"
        onClick={() => {
          webviewHandler.step('back');
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M23 13L16 20L23 27"
            stroke="#383E4C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </styled.div>
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
          <styled.button
            type="button"
            mt="12px"
            bgColor="#6A36FF"
            borderRadius="8px"
            fontSize="14px"
            fontWeight={500}
            height="32px"
            width="127px"
            color="#fff"
            onClick={() => {
              router.push('/birthday/event');
            }}
          >
            생일 카드 보러가기
          </styled.button>
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
                      <styled.button
                        type="button"
                        width="84px"
                        height="32px"
                        fontSize="14px"
                        fontWeight={500}
                        color="#6A36FF"
                        bgColor="#F5F1FF"
                        borderRadius="8px"
                        onClick={() => {
                          router.push(`/birthday/card-creator/${member.id}?name=${member.name}`);
                        }}
                      >
                        축하해주기
                      </styled.button>
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
                {data?.upcomingBirthdays.map((i, index) => (
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
