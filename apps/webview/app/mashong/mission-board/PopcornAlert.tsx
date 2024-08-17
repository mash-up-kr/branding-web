'use client';

import Cookies from 'js-cookie';
import { useEffect } from 'react';

import { showErrorToast } from '@/app/_components/ErrorToast';
import { styled } from '@/styled-system/jsx';
import { Toast } from '@/ui/Toast';

export const PopcornAlert = () => {
  useEffect(() => {
    const popcornAlertSeen = Cookies.get('popcornAlertSeen');

    if (popcornAlertSeen === '1') {
      showErrorToast(
        <styled.span maxWidth="30px">
          팝콘이 없어요ㅠㅠ <br /> 미션을 하면 팝콘을 얻을 수 있어요!
        </styled.span>,
      );
      Cookies.remove('popcornAlertSeen');
    }
  }, []);

  return <Toast />;
};
