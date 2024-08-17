'use client';

import { ReactNode } from 'react';
import { toast } from 'react-hot-toast/headless';

import { styled } from '@/styled-system/jsx';

export const ErrorToast = ({ message }: { message: ReactNode }) => (
  <styled.span
    fontWeight={500}
    fontSize={14}
    lineHeight="16.7px"
    letterSpacing="-1%"
    color="white"
    whiteSpace="nowrap"
  >
    {message}
  </styled.span>
);

export const showErrorToast = (message: ReactNode) => {
  toast.custom(<ErrorToast message={message} />, { duration: 3000 });
};
