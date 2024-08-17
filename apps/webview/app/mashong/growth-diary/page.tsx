import { Suspense } from 'react';

import { styled } from '@/styled-system/jsx';

import { InfoBadges } from './_components/InfoBadge';
import { LevelCarousel } from './_components/LevelCarousel';

const Page = async () => (
  <styled.div
    minH="calc(100dvh - 48px)"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    pt="calc(env(safe-area-inset-top) + 56px)"
  >
    <styled.div w="100%" minH={450} bg="white" padding={20} borderRadius={20} mt={24}>
      <Suspense>
        <InfoBadges />
      </Suspense>

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
