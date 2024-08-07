import { type ReactNode } from 'react';

import { styled } from '@/styled-system/jsx';

export const metadata = {};

const Layout = ({ children }: { children: ReactNode }) => (
  <styled.div
    display="flex"
    flexDirection="column"
    maxWidth="[768px]"
    mx="auto"
    minH="100dvh"
    pt="56px"
    pb="[env(safe-area-inset-bottom)]"
    px={24}
    backgroundColor="gray.50"
    style={{
      paddingTop: 'calc(56px + env(safe-area-inset-top))',
    }}
  >
    {children}
  </styled.div>
);

export default Layout;
