import localFont from 'next/font/local';
import '@/index.css';
import { type ReactNode } from 'react';

import VConsoleScript from '@/lib/VConsole';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode;
}) => (
  <html lang="ko" className={pretendard.className}>
    <body>{children}</body>
    <VConsoleScript />
  </html>
);

export default RootLayout;
