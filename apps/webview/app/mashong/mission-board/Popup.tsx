import { ElementRef, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

// eslint-disable-next-line no-unused-vars
const Popup = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => {
  const contentsRef = useRef<ElementRef<typeof styled.div>>(null);

  const handleClickContentsOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(contentsRef, handleClickContentsOutside);

  return (
    isOpen && (
      <styled.div
        w="100%"
        h="100%"
        position="fixed"
        top="0"
        bg="rgba(0, 0, 0, 0.8)"
        zIndex="100"
        maxW="768px"
        left="50%"
        translate="auto"
        translateX="-1/2"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <styled.div
          ref={contentsRef}
          display="flex"
          flexDirection="column"
          gap="26px"
          justifyContent="center"
          alignItems="center"
        >
          <SvgImage path="mission-board/eat-popcorn" width={200} height={140} />
          <styled.p
            whiteSpace="pre-wrap"
            textAlign="center"
            color="rgba(255, 255, 255, 1)"
            fontWeight={600}
            lineHeight="24px"
            fontSize="20px"
            letterSpacing="-0.01em"
          >
            매숑이에게 먹일{'\n'}팝콘 3알을 획득하셨어요!
          </styled.p>
          <styled.button
            rounded="12px"
            w="120px"
            h="52px"
            bg="rgba(106,54,255,1)"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <styled.span
              fontSize="16px"
              lineHeight="1.2"
              letterSpacing="-0.01em"
              fontWeight={500}
              color="rgba(255,255,255,1)"
            >
              확인
            </styled.span>
          </styled.button>
        </styled.div>
      </styled.div>
    )
  );
};

export default Popup;
