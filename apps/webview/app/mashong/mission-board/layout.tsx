import { type ReactNode } from 'react';

import Header from '@/app/mashong/mission-board/Header';
import { styled } from '@/styled-system/jsx';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <styled.div
      display="flex"
      flexDirection="column"
      maxWidth="[768px]"
      mx="auto"
      minH="100dvh"
      pb="env(safe-area-inset-bottom)"
      bg="[#6A36FF]"
      pt="calc(56px + env(safe-area-inset-top))"
    >
      {children}
    </styled.div>
  </>
);

export default Layout;
