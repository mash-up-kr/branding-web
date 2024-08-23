import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

import { TopNavigationButton } from './mashong/[team]/_components/TopNavigationButton';

const NotFound = () => (
  <styled.div
    display="flex"
    flexDirection="column"
    bg="gray.50"
    maxWidth="768px"
    mx="auto"
    minH="100dvh"
    pt="env(safe-area-inset-top)"
    pb="env(safe-area-inset-bottom)"
    position="relative"
    justifyContent="center"
    alignItems="center"
    overflow="hidden"
  >
    <styled.header
      height="56px"
      position="absolute"
      maxW="[768px]"
      w="100%"
      top="0"
      left="[50%]"
      translate="auto"
      translateX="-1/2"
      bg="gray.50"
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
        <TopNavigationButton actionType="routerBack" />
      </styled.div>
    </styled.header>
    <SvgImage path="error" width={148} height={148} />
    <styled.span
      fontWeight="400"
      fontSize="14px"
      lineHeight="16.8px"
      letterSpacing="-1%"
      textAlign="center"
    >
      오류가 발생했어요...
    </styled.span>
  </styled.div>
);

export default NotFound;
