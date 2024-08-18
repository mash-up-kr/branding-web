import { Suspense } from 'react';

import { styled } from '@/styled-system/jsx';

import { DiaryCardImage } from './_components/DiaryCardImage';
import { InfoBadges } from './_components/InfoBadge';
import { LevelCarousel } from './_components/LevelCarousel';

const Page = async () => (
  <styled.div
    minH="100dvh"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    alignItems="center"
    pt="56px"
    overflow="hidden"
    position="relative"
  >
    <Suspense>
      <styled.div
        margin="24px auto 0 auto"
        position="relative"
        width="calc(100% - 48px)"
        aspectRatio={32 / 45}
        maxW={700}
        mx="auto"
      >
        <InfoBadges />
        <DiaryCardImage />
      </styled.div>
    </Suspense>

    <styled.div
      position="relative"
      width="calc(100% - 48px)"
      maxW="700px"
      mx="auto"
      mt="100px"
      bottom="48px"
    >
      <styled.div
        position="absolute"
        top="-40px"
        left="0"
        width="100%"
        color="gray.700"
        fontWeight={700}
        fontSize={16}
        letterSpacing="-1%"
        boxSizing="border-box"
      >
        내 일기
      </styled.div>

      <Suspense>
        <LevelCarousel />
      </Suspense>
    </styled.div>
  </styled.div>
);

export default Page;
