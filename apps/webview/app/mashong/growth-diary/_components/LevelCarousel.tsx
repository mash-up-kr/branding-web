import { EmblaViewportRefType } from 'embla-carousel-react';
import React, { useState } from 'react';
import { useDebounceCallback } from 'usehooks-ts';

import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

interface LevelCarouselProps {
  currentLevel: number;
  selectedIndex: number;
  forwardedRef?: EmblaViewportRefType;
  // eslint-disable-next-line no-unused-vars
  onClick: (index: number) => void;
}

export const LevelCarousel = ({
  currentLevel,
  selectedIndex,
  forwardedRef,
  onClick,
}: LevelCarouselProps) => (
  <styled.div ref={forwardedRef}>
    <styled.div display="flex" gap={16}>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((level) => (
        <LevelButton
          key={`button-${level}`}
          level={level}
          isActive={selectedIndex + 1 === level}
          isLocked={currentLevel < level}
          onClick={() => {
            if (currentLevel < level) {
              // shake 애니메이션 필요
              return;
            }
            onClick(level - 1);
          }}
        />
      ))}
    </styled.div>
  </styled.div>
);

interface LevelButtonProps {
  level: number;
  isActive?: boolean;
  isLocked?: boolean;
  onClick: () => void;
}

const LevelButton = ({ level, isActive = false, isLocked = false, onClick }: LevelButtonProps) => {
  const [shake, setShake] = useState(false);

  const debouncedShake = useDebounceCallback(() => {
    setShake(true);
    setTimeout(() => setShake(false), 700);
  }, 200);

  const handleClick = () => {
    if (isLocked) {
      debouncedShake();
    } else {
      onClick();
    }
  };

  return (
    <styled.button
      type="button"
      onClick={handleClick}
      cursor="pointer"
      animation={shake ? 'shake 0.7s ease' : ''}
    >
      <styled.div
        width={60}
        height={60}
        backgroundColor={isLocked ? 'gray.100' : isActive ? 'brand.100' : 'white'}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={10}
        borderWidth="1.5px"
        borderColor={isActive ? 'brand.500' : 'transparent'}
        userSelect="none"
        transition="all ease 400ms"
      >
        {isLocked ? (
          <SvgImage path="growth-diary/level-lock" width={32} height={32} />
        ) : (
          <styled.span fontWeight={700} fontSize={16} color={isActive ? 'brand.500' : 'gray.400'}>
            Lv.{level}
          </styled.span>
        )}
      </styled.div>
    </styled.button>
  );
};
