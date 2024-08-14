'use client';

import { useRouter } from 'next/navigation';

import { styled } from '@/styled-system/jsx';

const GoBirthdayEventButton = () => {
  const router = useRouter();

  return (
    <styled.button
      type="button"
      mt="12px"
      bgColor="#6A36FF"
      borderRadius="8px"
      fontSize="14px"
      fontWeight={500}
      height="32px"
      width="127px"
      color="#fff"
      onClick={() => {
        router.push('/birthday/event');
      }}
    >
      생일 카드 보러가기
    </styled.button>
  );
};

export default GoBirthdayEventButton;
