import { Suspense } from 'react';

import { styled } from '@/styled-system/jsx';

import { DiaryCardImage } from './_components/DiaryCardImage';
import { InfoBadges } from './_components/InfoBadge';
import { LevelCarousel } from './_components/LevelCarousel';

const Page = async () => (
  <styled.div
    minH="calc(100dvh - 48px)"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    pt="56px"
  >
    <styled.div margin="24px auto 0 auto" position="relative" width="100%" aspectRatio={32 / 45}>
      <Suspense>
        <InfoBadges />
        <DiaryCardImage />
      </Suspense>
    </styled.div>

    <styled.div mt={12}>
      <styled.div color="gray.700" fontWeight={700} fontSize={16} letterSpacing="-1%" mb={10}>
        내 일기
      </styled.div>
      <Suspense>
        <LevelCarousel />
      </Suspense>
    </styled.div>
  </styled.div>
);

export default Page;
