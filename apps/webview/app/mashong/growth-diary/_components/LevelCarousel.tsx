'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { assert } from 'utils';

import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

export const LevelCarousel = () => {
  const searchParams = useSearchParams();
  const currentLevel = Number(searchParams.get('level'));
  assert(!Number.isNaN(currentLevel));

  const [carouselRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
  });

  const [activeLevel, setActiveLevel] = useState(currentLevel);

  useEffect(() => {
    if (!emblaApi) return undefined;

    const scrollTimeId = setTimeout(() => {
      emblaApi.scrollTo(currentLevel - 1);
    }, 1000);

    return () => {
      clearTimeout(scrollTimeId);
    };
  }, [emblaApi, currentLevel]);

  return (
    <styled.div ref={carouselRef} overflow="hidden">
      <styled.div display="flex" gap={16}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((level) => (
          <LevelButton
            key={level}
            level={level}
            isActive={activeLevel === level}
            isLocked={currentLevel < level}
            onClick={() => {
              if (level > currentLevel) return;
              setActiveLevel(level);
            }}
          />
        ))}
      </styled.div>
    </styled.div>
  );
};

interface LevelButtonProps {
  level: number;
  isActive?: boolean;
  isLocked?: boolean;
  onClick: () => void;
}

const LevelButton = ({ level, isActive = false, isLocked = false, onClick }: LevelButtonProps) => (
  <styled.button type="button" onClick={onClick} cursor="pointer">
    <styled.div
      width={60}
      height={60}
      backgroundColor={isLocked ? 'gray.100' : 'white'}
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
        <styled.div width={32} height={32} backgroundColor="#D9D9D9" display="block" />
      )}
    </styled.div>
    <styled.span
      color={isActive ? 'brand.500' : 'gray.400'}
      fontWeight={500}
      fontSize={13}
      marginTop={4}
    >
      Lv.{level}
    </styled.span>
  </styled.button>
);
