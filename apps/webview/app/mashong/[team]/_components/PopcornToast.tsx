'use client';

import { toast } from 'react-hot-toast/headless';

import { styled } from '@/styled-system/jsx';

const PopcornToast = ({ value }: { value: number }) => (
  <styled.span
    bg="#2C3037"
    color="white"
    textAlign="center"
    borderRadius={12}
    padding="12px 16px"
    fontSize={14}
  >
    <span>매숑이가 </span>
    <styled.span fontWeight={700} color="brand.300">
      팝콘 {value}개
    </styled.span>
    <span>를 냠냠했어요</span>
  </styled.span>
);

export const showPopcornToast = (value: number) => {
  toast.custom(<PopcornToast value={value} />, {
    duration: 3000,
  });
};
