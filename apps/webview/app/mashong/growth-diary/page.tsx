'use client';

import { PLATFORM_NAME_MAP } from 'constant';
import { useSearchParams } from 'next/navigation';
import { assert, isKeyOfObject } from 'utils';

import useCarouselSync from '@/hooks/useCarouselSync';
import { styled } from '@/styled-system/jsx';

import { DiaryCardImage } from './_components/DiaryCardImage';
import { InfoBadges } from './_components/InfoBadge';
import { LevelCarousel } from './_components/LevelCarousel';

const Page = () => {
  const searchParams = useSearchParams();
  const currentLevel = Number(searchParams.get('currentLevel'));
  const currentPlatform = searchParams.get('platform')?.toUpperCase();
  assert(isKeyOfObject(currentPlatform, PLATFORM_NAME_MAP));

  const { selectedIndex, scrollToIndex, emblaMainRef, emblaThumbsRef } = useCarouselSync({
    initialIndex: currentLevel - 1,
    autoScrollOnLoad: true,
  });

  return (
    <>
      <styled.div width="100%" margin="24px auto 0 auto">
        {/** Main Carousel */}
        <styled.div ref={emblaMainRef}>
          <styled.div display="flex" touchAction="pan-y pinch-zoom">
            {Array.from({ length: currentLevel }).map((_, index) => (
              <styled.div
                key={`main-image-${index + 1}`}
                transform="translate3d(0, 0, 0)"
                flex="0 0 100%"
                padding="0 24px"
                display="flex"
                justifyContent="center"
              >
                <styled.div position="relative">
                  <InfoBadges level={index + 1} platform={currentPlatform} />
                  <DiaryCardImage level={index + 1} />
                </styled.div>
              </styled.div>
            ))}
          </styled.div>
        </styled.div>
      </styled.div>

      <styled.div position="fixed" width="calc(100% - 48px)" maxWidth="700px" bottom="48px">
        <styled.div
          position="absolute"
          top="-40px"
          left={0}
          width="100%"
          color="#4a4a4a"
          fontWeight={700}
          fontSize="16px"
          letterSpacing="-1%"
          boxSizing="border-box"
        >
          내 일기
        </styled.div>

        {/** Thumbnail Carousel */}
        <LevelCarousel
          currentLevel={currentLevel}
          selectedIndex={selectedIndex}
          forwardedRef={emblaThumbsRef}
          onClick={scrollToIndex}
        />
      </styled.div>
    </>
  );
};

export default Page;
