'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

const Page = () => {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const [isLongPress, setIsLongPress] = useState(false);
  const timerRef = useRef<any>(null);

  const handleTouchStart = () => {
    timerRef.current = setTimeout(() => {
      setIsLongPress(true);
      setIsDark(true);
    }, 3000);
  };

  const handleTouchEnd = () => {
    clearTimeout(timerRef.current);
    setIsLongPress(false);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isDark) {
      const darkenInterval = setInterval(() => {
        setIsDark((prev) => {
          if (prev === true) {
            clearInterval(darkenInterval);
            router.push('/birthday/event-loading');
            return true;
          }
          return true;
        });
      }, 2000);

      return () => clearInterval(darkenInterval);
    }
  }, [isDark, router]);

  return (
    <styled.div display="flex" flexDirection="column" height="100vh" position="relative">
      <styled.div
        bg="linear-gradient(#1E2122, #4A4C76)"
        width="100%"
        flex="3"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <styled.div p="16px 20px" display="flex" justifyContent="end" zIndex={9999}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={() => {
              router.replace('/birthday/crew-list');
            }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.7071 4.2928C20.0976 4.68332 20.0976 5.31649 19.7071 5.70701L5.70711 19.707C5.31658 20.0975 4.68342 20.0975 4.29289 19.707C3.90237 19.3164 3.90237 18.6833 4.29289 18.2928L18.2929 4.2928C18.6834 3.90228 19.3166 3.90228 19.7071 4.2928Z"
              fill={isLongPress ? '#000' : '#EBEFF9'}
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.7071 19.7069C19.3166 20.0974 18.6834 20.0974 18.2929 19.7069L4.29286 5.70691C3.90234 5.31638 3.90234 4.68322 4.29286 4.29269C4.68339 3.90217 5.31655 3.90217 5.70708 4.29269L19.7071 18.2927C20.0976 18.6832 20.0976 19.3163 19.7071 19.7069Z"
              fill={isLongPress ? '#000' : '#EBEFF9'}
            />
          </svg>
        </styled.div>
        <styled.div position="relative" height="100%">
          <styled.div
            fontSize="24px"
            fontWeight={700}
            lineHeight="28.64px"
            letterSpacing="-1%"
            color="#fff"
            margin="0 20px"
          >
            소원을 생각하면서
            <br />
            촛불을 꺼보세요!
          </styled.div>
          <styled.div position="absolute" right={0} bottom="20px">
            <SvgImage
              basePath="birthday"
              path="common/mashong-with-peaked-hat"
              width={360}
              height={60}
            />
          </styled.div>
          <styled.div
            position="absolute"
            left="50%"
            bottom="-20px"
            transform="translate(-50%)"
            width="270px"
            height="270px"
          >
            <SvgImage basePath="birthday" path="common/cake" width={270} height={270} />
          </styled.div>
          <styled.div
            bg={!isLongPress ? '#5421E6' : ''}
            opacity={0.6}
            width="59px"
            height="59px"
            position="absolute"
            left="50%"
            transform="translate(-50%)"
            bottom="167px"
            borderRadius="100px"
            transition="background-color 1s ease"
          />
          <styled.div
            bg={!isLongPress ? '#5421E6' : ''}
            opacity={0.3}
            width="89px"
            height="89px"
            position="absolute"
            left="50%"
            transform="translate(-50%)"
            bottom="152px"
            borderRadius="100px"
            transition="background-color 1s ease"
          />
        </styled.div>
      </styled.div>
      <styled.div bg="linear-gradient(#373A6F, #0F1025)" width="100%" flex="1" />
      <styled.button
        position="absolute"
        zIndex={999}
        width="100%"
        height="100%"
        transition="background-color 2s ease"
        bg={isDark ? 'black' : ''}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />
    </styled.div>
  );
};

export default Page;
