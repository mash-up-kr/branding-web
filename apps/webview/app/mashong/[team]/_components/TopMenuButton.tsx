'use client';

import { PropsWithChildren, useState } from 'react';

import CheckInBottomSheet from '@/app/_components/CheckInBottomSheet';
import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

export const TopMenuButton = ({
  variant,
  children,
}: PropsWithChildren<{ variant: 'checkin' | 'mission' }>) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const onClick = () => {
    if (variant === 'checkin') {
      setIsSheetOpen(true);
    } else {
      // TODO: mission route
    }
  };

  return (
    <>
      <styled.button type="button" cursor="pointer" onClick={onClick}>
        <SvgImage
          path={`main/icon-${variant}-button`}
          width={48}
          height={48}
          className={css({
            background: '#fff',
            borderRadius: 10,
            border: '1px solid #EBEFF9',
            padding: 9,
            marginBottom: 6,
          })}
        />
        <styled.span
          fontWeight={500}
          fontSize={14}
          lineHeight="16.7px"
          letterSpacing="-1%"
          color="#4D535E"
        >
          {children}
        </styled.span>
      </styled.button>
      <CheckInBottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </>
  );
};
