'use client';

import { PLATFORM_NAME_MAP } from 'constant';
import { useSearchParams } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { assert, isKeyOfObject } from 'utils';

import { styled } from '@/styled-system/jsx';

export const InfoBadges = () => {
  const searchParams = useSearchParams();
  const currentLevel = searchParams.get('level');
  const currentPlatform = searchParams.get('platform')?.toUpperCase();
  assert(isKeyOfObject(currentPlatform, PLATFORM_NAME_MAP));

  return (
    <styled.div display="flex" gap={8}>
      <InfoBadge>Lv.{currentLevel}</InfoBadge>
      <InfoBadge>{PLATFORM_NAME_MAP[currentPlatform]}</InfoBadge>
    </styled.div>
  );
};

const InfoBadge = ({ children }: PropsWithChildren) => (
  <styled.span
    borderRadius={30}
    padding="3.5px 12px"
    bg="gray.100"
    fontWeight={500}
    fontSize={14}
    letterSpacing="-1%"
    lineHeight="16.7px"
    color="gray.600"
  >
    {children}
  </styled.span>
);
