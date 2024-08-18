import { type ReactNode } from 'react';

import { styled } from '@/styled-system/jsx';

import Header from './_components/Header';

export const metadata = {};

const Layout = ({ children }: { children: ReactNode }) => (
  <styled.div
    display="flex"
    flexDirection="column"
    mx="auto"
    minW="344px"
    minH="100dvh"
    pt="env(safe-area-inset-top)"
    bg="gray.50"
    maxW={768}
  >
    <Header />
    {children}
  </styled.div>
);

export default Layout;
