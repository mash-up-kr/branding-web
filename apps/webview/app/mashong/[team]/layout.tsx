import { type ReactNode } from 'react';

import { styled } from '@/styled-system/jsx';

export const metadata = {};

const Layout = ({ children }: { children: ReactNode }) => (
  <styled.div
    display="flex"
    flexDirection="column"
    bg="gray.50"
    maxWidth="768px"
    mx="auto"
    minH="100dvh"
    pt="env(safe-area-inset-top)"
  >
    {children}
  </styled.div>
);

export default Layout;
