import { type ReactNode } from 'react';

import Header from '@/app/birthday/card-list/Header';
import { styled } from '@/styled-system/jsx';

export const metadata = {};

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <styled.div
      bg="linear-gradient(162.61deg, #E2CBFF 10.57%, #A7E4FA 109.87%)"
      display="flex"
      flexDirection="column"
      maxW="768px"
      mx="auto"
      minH="100dvh"
      pt="56px"
      pb="40px"
      justifyContent="space-between"
    >
      {children}
    </styled.div>
  </>
);

export default Layout;
