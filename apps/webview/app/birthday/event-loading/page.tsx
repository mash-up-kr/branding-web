'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

const EventLoading = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/birthday/card-list');
    }, 2000);
  }, [router]);
  return (
    <styled.div width="100%" height="100vh" display="flex" bg="#F8F7FC">
      <styled.div
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flex={1}
        textAlign="center"
      >
        <SvgImage basePath="birthday" path="common/event-mashong" width={182} height={140} />
        <styled.div fontWeight={600} color="#25272E" fontSize="20px" lineHeight="23.87px" mt="26px">
          매숑이들이
          <br />
          보낸 선물이 있어!
        </styled.div>
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
        boxShadow="0px 0px 400px 50px #5421E6"
      />
    </styled.div>
  );
};

export default EventLoading;
