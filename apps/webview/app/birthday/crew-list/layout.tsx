import { type ReactNode } from 'react';

import { styled } from '@/styled-system/jsx';

export const metadata = {};

const Layout = ({ children }: { children: ReactNode }) => (
  <styled.div bgColor="gray.50" width="100%" height="100dvh">
    {children}
  </styled.div>
);

export default Layout;
