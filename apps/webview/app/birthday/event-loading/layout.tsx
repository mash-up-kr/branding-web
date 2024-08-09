import { STATIC_ORIGIN } from 'constant';
import { type ReactNode } from 'react';

import { styled } from '@/styled-system/jsx';

export const metadata = {};

const Layout = ({ children }: { children: ReactNode }) => (
  <styled.div
    display="flex"
    flexDirection="column"
    maxWidth="768px"
    mx="auto"
    minH="100dvh"
    pb="env(safe-area-inset-bottom)"
    px="24px"
    backgroundColor="gray.50"
    position="relative"
    justifyContent="center"
  >
    <styled.div
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      filter="blur(1px)"
      bgPosition="top left, top right, bottom right"
      bgSize="300px, 400px, 360px"
      bgRepeat="no-repeat"
      style={{
        backgroundImage: [
          `url('${STATIC_ORIGIN}/images/svg/mashong/evolution/bg-left-top.svg')`,
          `url('${STATIC_ORIGIN}/images/svg/mashong/evolution/bg-right-top.svg')`,
          `url('${STATIC_ORIGIN}/images/svg/mashong/evolution/bg-right-bottom.svg')`,
        ].join(', '),
      }}
    />
    {children}
  </styled.div>
);

export default Layout;
