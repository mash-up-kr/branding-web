'use client';

import { PLATFORM_NAME_MAP } from 'constant';
import { useSearchParams } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { assert, isKeyOfObject } from 'utils';

import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

export const InfoBadges = () => {
  const searchParams = useSearchParams();
  const currentLevel = Number(searchParams.get('activeLevel'));
  const currentPlatform = searchParams.get('platform')?.toUpperCase();
  assert(isKeyOfObject(currentPlatform, PLATFORM_NAME_MAP));

  return (
    <styled.div display="flex" gap={8} pos="absolute" top={20} left={20} zIndex={1}>
      <InfoBadge bgColor="brand.400" color="white">
        <SvgImage path="growth-diary/platform-prefix" width={12} height={12} />
        Lv.{currentLevel}
      </InfoBadge>
      <InfoBadge bgColor="gray.100" color="gray.600">
        {PLATFORM_NAME_MAP[currentPlatform]}
      </InfoBadge>
    </styled.div>
  );
};

const InfoBadge = ({
  children,
  bgColor,
  color,
}: PropsWithChildren<{ bgColor: string; color: string }>) => (
  <styled.span
    display="flex"
    gap={4}
    borderRadius={30}
    padding="3.5px 12px"
    bg={bgColor}
    fontWeight={700}
    fontSize={14}
    letterSpacing="-1%"
    lineHeight="16.7px"
    color={color}
  >
    {children}
  </styled.span>
);
