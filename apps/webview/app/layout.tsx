import { type ReactNode } from 'react';

import Providers from '@/app/providers';
import VConsoleScript from '@/lib/VConsole';

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode;
}) => (
  <html lang="en">
    <body>
      <Providers>{children}</Providers>
    </body>
    <VConsoleScript />
  </html>
);

export default RootLayout;
