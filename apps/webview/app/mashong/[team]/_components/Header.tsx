'use client';

import { styled } from '@/styled-system/jsx';

import { GoDiaryButton } from './GoDiaryButton';
import { TopNavigationButton } from './TopNavigationButton';

const Header = () => (
  <styled.header
    height="calc(env(safe-area-inset-top) + 56px)"
    position="absolute"
    maxW="[768px]"
    w="100%"
    left="[50%]"
    translate="auto"
    translateX="-1/2"
    pt="env(safe-area-inset-top)"
    zIndex="1"
  >
    <styled.div
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      h="full"
      p="[8px]"
    >
      <TopNavigationButton />
      <GoDiaryButton />
    </styled.div>
  </styled.header>
);

export default Header;
