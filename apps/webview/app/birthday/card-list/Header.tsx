'use client';

import { useWebviewHandler } from '@/hooks/useWebviewHandler';
import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

const Header = () => {
  const webviewHandler = useWebviewHandler();

  return (
    <styled.header
      height="56px"
      position="fixed"
      maxW="[768px]"
      w="100%"
      left="[50%]"
      translate="auto"
      translateX="-1/2"
      zIndex="1"
    >
      <styled.div
        display="flex"
        flexDirection="row"
        justifyContent="end"
        alignItems="center"
        px="20px"
        py="16px"
      >
        <SvgImage
          basePath="birthday"
          path="common/close"
          width={24}
          height={24}
          fill={false}
          onClick={() => {
            webviewHandler.step('back');
          }}
        />
      </styled.div>
    </styled.header>
  );
};

export default Header;
