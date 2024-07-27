'use client';

import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { styled } from '@/styled-system/jsx';
import { Toast } from '@/ui/Toast';

export const PopcornToast = ({ value }: { value: number }) => {
  useEffect(() => {
    const toastId = toast(
      <styled.span fontWeight={500} fontSize={14} lineHeight="16.7px" letterSpacing="-1%">
        매숑이가{' '}
        <styled.span fontWeight={700} color="brand.300">
          팝콘 {value}개
        </styled.span>
        를 냠냠했어요
      </styled.span>,
    );

    return () => {
      toast.remove(toastId);
    };
  }, [value]);

  return <Toast />;
};
