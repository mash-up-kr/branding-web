'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

const Page = () => {
  const router = useRouter();

  const typingRef = useTypingAnimation({
    strings: ['<span>매숑이들이</span><br/><span>보낸 선물이 있어!</span>'],
    typeSpeed: 40,
  });

  useEffect(() => {
    const minWait = new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    Promise.all([minWait])
      .then(() => {
        router.replace('/birthday/card-list');
      })
      .catch(() => {
        // TODO: 에러 토스트
      });
  }, [router]);

  return (
    <styled.div display="flex" flexDirection="column" alignItems="center" gap={26}>
      <SvgImage basePath="birthday" path="common/event-mashong" width={182} height={140} />
      <styled.div
        fontWeight={600}
        fontSize={20}
        lineHeight="23.87px"
        letterSpacing="-1%"
        color="gray.950"
        textAlign="center"
        whiteSpace="nowrap"
        margin="0 auto"
        overflow="hidden"
        position="relative"
        height={48}
      >
        <span ref={typingRef} />
      </styled.div>
      <styled.div
        width="0px"
        height="0px"
        position="absolute"
        top="170px"
        left="-1px"
        boxShadow="0px 0px 115px 40px #2B8AF9"
      />
      <styled.div
        width="0px"
        height="0px"
        position="absolute"
        top="10px"
        right="-1px"
        boxShadow="0px 0px 200px 50px #04C088"
      />
      <styled.div
        width="0px"
        height="0px"
        position="absolute"
        bottom="60px"
        right="30px"
        boxShadow="0px 0px 200px 50px #5421E6"
      />
    </styled.div>
  );
};

export default Page;
