import { PLATFORM_NAME_MAP } from 'constant';
import { PropsWithChildren } from 'react';

import { styled } from '@/styled-system/jsx';

import { LevelCarousel } from './_components/LevelCarousel';
import { TopNavigationButton } from '../[team]/_components/TopNavigationButton';

interface SearchParams {
  level: number;
  platform: keyof typeof PLATFORM_NAME_MAP;
}

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const currentLevel = searchParams.level;
  const currentPlatform = searchParams.platform.toUpperCase() as keyof typeof PLATFORM_NAME_MAP;

  return (
    <styled.div display="flex" flexDirection="column" justifyContent="space-around" h="80dvh">
      <styled.div display="flex" justifyContent="space-between" alignItems="center">
        <TopNavigationButton />
        <styled.span
          fontWeight={600}
          fontSize={16}
          letterSpacing="-1%"
          color="gray.900"
          userSelect="none"
        >
          성장 일기
        </styled.span>
        <styled.button type="button" cursor="pointer">
          <styled.span fontWeight={600} fontSize={16} letterSpacing="-1%" color="gray.800">
            공유
          </styled.span>
        </styled.button>
      </styled.div>

      <styled.div
        w="100%"
        minH={450}
        bg="white"
        padding={20}
        borderRadius={20}
        m="20px auto 29px auto"
      >
        <styled.div display="flex" gap={8}>
          <InfoLabel>Lv.{currentLevel}</InfoLabel>
          <InfoLabel>{PLATFORM_NAME_MAP[currentPlatform]}</InfoLabel>
        </styled.div>
        <styled.strong
          fontWeight={700}
          fontSize={30}
          lineHeight="35.8px"
          letterSpacing="-1%"
          padding="20px 0"
          display="inline-block"
          color="gray.950"
        >
          나는 매쉬업에 <br />
          태어나버렸다.
        </styled.strong>
      </styled.div>

      <div>
        <styled.div color="gray.700" fontWeight={700} fontSize={16} letterSpacing="-1%" mb={10}>
          내 일기
        </styled.div>
        <LevelCarousel />
      </div>
    </styled.div>
  );
};

export default Page;

const InfoLabel = ({ children }: PropsWithChildren) => (
  <styled.span
    borderRadius={30}
    padding="3.5px 12px"
    bg="gray.100"
    fontWeight={500}
    fontSize={14}
    letterSpacing="-1%"
    lineHeight="16.7px"
    color="gray.600"
  >
    {children}
  </styled.span>
);
