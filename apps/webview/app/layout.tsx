import { type ReactNode } from 'react';

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode;
}) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
