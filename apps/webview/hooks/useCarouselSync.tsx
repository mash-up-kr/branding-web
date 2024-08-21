'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

interface CarouselSyncOptions {
  initialIndex: number;
  autoScrollOnLoad: boolean;
}

/**
 * Embla Carousel을 사용할 때 메인 캐러셀과 썸네일 캐러셀을 동기화하는 역할
 * @param {number} initialIndex - 메인 캐러셀과 썸네일 캐러셀에서 초기 스크롤할 인덱스
 * @param {boolean} [autoScrollOnLoad=false] - 캐러셀 로드 시 자동으로 초기 인덱스로 스크롤할지 여부를 결정
 * @see {@link https://www.embla-carousel.com/examples/predefined/#thumbnails}
 */
const useCarouselSync = ({ initialIndex, autoScrollOnLoad }: CarouselSyncOptions) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({});
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaMainApi || !emblaThumbsApi || !autoScrollOnLoad) return undefined;

    const scrollTimeId = setTimeout(() => {
      emblaMainApi.scrollTo(initialIndex);
      emblaThumbsApi.scrollTo(initialIndex);
    }, 1000);

    return () => {
      clearTimeout(scrollTimeId);
    };
  }, [emblaMainApi, emblaThumbsApi, initialIndex, autoScrollOnLoad]);

  const scrollToIndex = (index: number) => {
    setSelectedIndex(index);
    if (emblaMainApi && emblaThumbsApi) {
      emblaMainApi.scrollTo(index);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSelect = () => {
    if (emblaMainApi && emblaThumbsApi) {
      const newIndex = emblaMainApi.selectedScrollSnap();
      setSelectedIndex(newIndex);
      emblaThumbsApi.scrollTo(newIndex);
    }
  };

  useEffect(() => {
    if (!emblaMainApi) return undefined;
    handleSelect();
    emblaMainApi.on('select', handleSelect).on('reInit', handleSelect);

    return () => {
      emblaMainApi.off('select', handleSelect).off('reInit', handleSelect);
    };
  }, [emblaMainApi, handleSelect]);

  return {
    selectedIndex,
    emblaMainRef,
    emblaThumbsRef,
    scrollToIndex,
  };
};

export default useCarouselSync;
