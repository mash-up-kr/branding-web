'use client';

import { useRouter } from 'next/navigation';

import { styled } from '@/styled-system/jsx';

const GoBirthdayCardCreatorButton = ({ id, name }: { id: string; name: string }) => {
  const router = useRouter();

  return (
    <styled.button
      type="button"
      width="84px"
      height="32px"
      fontSize="14px"
      fontWeight={500}
      color="#6A36FF"
      bgColor="#F5F1FF"
      borderRadius="8px"
      onClick={() => {
        router.push(`/birthday/card-creator/${id}?name=${name}`);
      }}
    >
      축하해주기
    </styled.button>
  );
};

export default GoBirthdayCardCreatorButton;
