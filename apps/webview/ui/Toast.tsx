'use client';

import dynamic from 'next/dynamic';

const Toaster = dynamic(
  async () => {
    const { Toaster: ReactHotToast } = await import('react-hot-toast');
    return ReactHotToast;
  },
  {
    ssr: false,
  },
);

export const Toast = () => (
  <Toaster
    position="top-center"
    reverseOrder={false}
    containerStyle={{ top: 60 }}
    toastOptions={{
      duration: 2_000,
      style: {
        background: '#2C3037',
        padding: '8px 6px',
        margin: 0,
        color: '#fff',
      },
    }}
  />
);
