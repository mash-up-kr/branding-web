'use client';

import { useRouter } from 'next/navigation';

import { useWebviewHandler } from '@/hooks/useWebviewHandler';
import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

const Header = () => {
  const router = useRouter();
  const webviewHandler = useWebviewHandler();

  return (
    <styled.header
      height="calc(env(safe-area-inset-top) + 56px)"
      position="fixed"
      maxW="[768px]"
      w="100%"
      left="[50%]"
      translate="auto"
      translateX="-1/2"
      bg="brand.500"
      pt="env(safe-area-inset-top)"
      zIndex="1"
    >
      <styled.div
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        h="full"
        p="[8px]"
      >
        <SvgImage
          path="mission-board/chevron-left"
          width={40}
          height={40}
          fill={false}
          onClick={() => {
            router.back();
          }}
        />
        <styled.h1
          fontSize="16px"
          lineHeight="1.2"
          letterSpacing="-0.01em"
          fontWeight="600"
          color="white"
        >
          미션
        </styled.h1>
        <styled.div
          display="flex"
          flexDirection="row"
          w="40px"
          h="40px"
          justifyContent="center"
          alignItems="center"
        >
          <SvgImage
            path="mission-board/carrot"
            width={32}
            height={32}
            fill={false}
            onClick={() => {
              webviewHandler.step('danggn');
            }}
          />
        </styled.div>
      </styled.div>
    </styled.header>
  );
};

export default Header;
