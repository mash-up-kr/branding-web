import { TopNavigationButton } from '@/app/mashong/[team]/_components/TopNavigationButton';
import { styled } from '@/styled-system/jsx';

const Header = () => (
  <styled.header
    height="calc(env(safe-area-inset-top) + 56px)"
    position="absolute"
    maxW="[768px]"
    w="100%"
    left="[50%]"
    translate="auto"
    translateX="-1/2"
    bg="gray.50"
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
      <TopNavigationButton actionType="routerBack" />
      <styled.h1
        fontWeight={600}
        fontSize={16}
        letterSpacing="-1%"
        color="gray.900"
        userSelect="none"
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
      >
        성장 일기
      </styled.h1>
    </styled.div>
  </styled.header>
);

export default Header;
