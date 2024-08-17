import { type ReactNode } from 'react';

import { styled } from '@/styled-system/jsx';

import Header from './_components/Header';

export const metadata = {};

const Layout = ({ children }: { children: ReactNode }) => (
  <styled.div
    display="flex"
    flexDirection="column"
    maxWidth="[768px]"
    mx="auto"
    minH="100dvh"
    pt="env(safe-area-inset-top)"
    pb={48}
    px={24}
    backgroundColor="gray.50"
  >
    <Header />
    {children}
  </styled.div>
);

export default Layout;
