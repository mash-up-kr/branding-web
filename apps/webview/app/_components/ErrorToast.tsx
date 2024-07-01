'use client';

import { PropsWithChildren, useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { styled } from '@/styled-system/jsx';
import { Toast } from '@/ui/Toast';

export const ErrorToast = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<{ isOpen: boolean; onClose: () => void }>) => {
  useEffect(() => {
    const toastId = isOpen
      ? toast(
          <styled.span fontWeight={500} fontSize={14} lineHeight="16.7px" letterSpacing="-1%">
            {children}
          </styled.span>,
        )
      : undefined;

    onClose();

    return () => {
      toast.remove(toastId);
    };
  }, [onClose, isOpen, children]);

  return <Toast />;
};
