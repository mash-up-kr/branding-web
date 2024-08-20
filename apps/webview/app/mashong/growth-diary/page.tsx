'use client';

import { PLATFORM_NAME_MAP } from 'constant';
import { useSearchParams } from 'next/navigation';
import { assert, isKeyOfObject } from 'utils';

import useCarouselSync from '@/hooks/useCarouselSync';

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
      <div style={{ width: '100%', margin: '24px auto 0 auto' }}>
        {/** Main Carousel */}
        <div ref={emblaMainRef}>
          <div style={{ display: 'flex', touchAction: 'pan-y pinch-zoom' }}>
            {Array.from({ length: currentLevel }).map((_, index) => (
              <div
                key={`main-image-${index + 1}`}
                style={{
                  transform: 'translate3d(0, 0, 0)',
                  flex: '0 0 100%',
                  minWidth: 0,
                  padding: '0 24px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                  }}
                >
                  <InfoBadges level={index + 1} platform={currentPlatform} />
                  <DiaryCardImage level={index + 1} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'fixed',
          width: 'calc(100% - 48px)',
          maxWidth: '700px',
          bottom: '48px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            left: 0,
            width: '100%',
            color: '#4a4a4a',
            fontWeight: 700,
            fontSize: '16px',
            letterSpacing: '-1%',
            boxSizing: 'border-box',
          }}
        >
          내 일기
        </div>

        {/** Thumbnail Carousel */}
        <LevelCarousel
          currentLevel={currentLevel}
          selectedIndex={selectedIndex}
          forwardedRef={emblaThumbsRef}
          onClick={scrollToIndex}
        />
      </div>
    </>
  );
};

export default Page;
