'use client';

import { revalidatePath } from 'next/cache';
import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren, useState } from 'react';
import { useTimeout } from 'usehooks-ts';

import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

import CheckInBottomSheet from './CheckInBottomSheet';

export const TopMenuButton = ({
  variant,
  shouldOpenSheet = false,
  children,
}: PropsWithChildren<{ variant: 'checkin' | 'mission'; shouldOpenSheet?: boolean }>) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(shouldOpenSheet);

  const onClick = () => {
    if (variant === 'checkin') {
      setIsSheetOpen(true);
    } else {
      router.push('/mashong/mission-board');
    }
  };

  useTimeout(() => {
    revalidatePath(pathname);
  }, 1000 * 60 * 30);

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
      {variant === 'checkin' && (
        <CheckInBottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
      )}
    </>
  );
};
