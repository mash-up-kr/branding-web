'use client';

import { useSearchParams } from 'next/navigation';

import SvgImage from '@/ui/svg-image';

export const DiaryCardImage = () => {
  const searchParams = useSearchParams();
  const currentLevel = Number(searchParams.get('activeLevel'));
  return <SvgImage path={`growth-diary/card/lv${currentLevel}`} fill priority />;
};
