import { Suspense } from 'react';

import { styled } from '@/styled-system/jsx';

import { InfoBadges } from './_components/InfoBadge';
import { LevelCarousel } from './_components/LevelCarousel';
import { TopNavigationButton } from '../[team]/_components/TopNavigationButton';

const Page = async () => (
  <styled.div display="flex" flexDirection="column" justifyContent="space-around" h="80dvh">
    <styled.div
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
    >
      <TopNavigationButton actionType="routerBack" />
      <styled.span
        fontWeight={600}
        fontSize={16}
        letterSpacing="-1%"
        color="gray.900"
        userSelect="none"
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
      >
        성장 일기
      </styled.span>
    </styled.div>

    <styled.div
      w="100%"
      minH={450}
      bg="white"
      padding={20}
      borderRadius={20}
      m="20px auto 29px auto"
    >
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

    <div>
      <styled.div color="gray.700" fontWeight={700} fontSize={16} letterSpacing="-1%" mb={10}>
        내 일기
      </styled.div>
      <Suspense>
        <LevelCarousel />
      </Suspense>
    </div>
  </styled.div>
);

export default Page;
