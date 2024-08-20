import React from 'react';

import SvgImage from '@/ui/svg-image';

interface DiaryCardImageProps {
  level: number;
}

export const DiaryCardImage = ({ level }: DiaryCardImageProps) => (
  <SvgImage path={`growth-diary/card/lv${level}`} width={320} height={450} priority />
);
