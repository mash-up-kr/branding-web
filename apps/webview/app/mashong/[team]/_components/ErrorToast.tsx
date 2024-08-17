'use client';

import { styled } from '@/styled-system/jsx';
import { toast } from 'react-hot-toast';

export const ErrorToast = ({ message }: { message: string }) => (
  <styled.span
    fontWeight={500}
    fontSize={14}
    lineHeight="16.7px"
    letterSpacing="-1%"
    bg="#2C3037"
    color="white"
    textAlign="center"
    borderRadius={12}
    padding="12px 16px"
  >
    {message}
  </styled.span>
);

export const showErrorToast = (message: string) => {
  toast.custom(<ErrorToast message={message} />, { duration: 3000 });
};
