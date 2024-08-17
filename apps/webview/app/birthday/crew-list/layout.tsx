import { type ReactNode } from 'react';

import { styled } from '@/styled-system/jsx';

/** @see {@link https://github.com/vercel/next.js/issues/49373#issuecomment-1565502698} */
export const dynamic = 'force-dynamic';

export const metadata = {};

const Layout = ({ children }: { children: ReactNode }) => (
  <styled.div bgColor="gray.50" width="100%" height="100dvh">
    {children}
  </styled.div>
);

export default Layout;
