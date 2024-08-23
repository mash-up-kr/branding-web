'use client';

import { type EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

import { type BirthdayCardResponse } from '@/app/birthday/card-list/page';
import useDownloadElementToImage from '@/app/birthday/hooks/useDownloadElementToImage';
import { AspectRatio, Square, styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

interface ContentsProps {
  birthdayCards: BirthdayCardResponse[];
}

const Contents = ({ birthdayCards }: ContentsProps) => {
  const router = useRouter();
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const { saveImage } = useDownloadElementToImage(
    { current: contentRefs.current[selectedIndex] },
    'birthday_card.png',
  );

  const isEmptyBirthdayCards = birthdayCards.length === 0;

  return (
    <>
      <styled.div ref={emblaRef} overflow="hidden">
        <styled.div display="flex" ml="30px" maxW="calc(100% - 60px)">
          {isEmptyBirthdayCards && (
            <styled.div
              ref={(birthdayCardRef) => {
                contentRefs.current[selectedIndex] = birthdayCardRef!;
              }}
              bg="white"
              w="calc(100%)"
              flexShrink="0"
              mr="20px"
              rounded="32px"
              p="24px"
              display="flex"
              flexDirection="column"
              gap="24px"
            >
              <AspectRatio ratio={16 / 9} rounded="16px" overflow="hidden">
                <Image
                  unoptimized
                  alt=""
                  fill
                  src="https://static.mash-up.kr/images/png/birthday/card-thumbnail-default.png"
                />
              </AspectRatio>
              <styled.div display="flex" flexDirection="column" alignItems="center">
                <styled.div display="flex" flexDirection="column" gap="4px" alignItems="center">
                  <styled.span
                    fontWeight={700}
                    fontSize="24px"
                    lineHeight={1.2}
                    letterSpacing="-0.01em"
                  >
                    매숑이
                  </styled.span>
                  <styled.span
                    fontSize="14px"
                    fontWeight={400}
                    lineHeight={1.2}
                    letterSpacing="-0.01em"
                    color="gray.500"
                  >
                    Mash-up
                  </styled.span>
                </styled.div>
                <Square size="20px" />
                <styled.span
                  whiteSpace="pre-wrap"
                  textAlign="center"
                  fontWeight={400}
                  fontSize="16px"
                  lineHeight={1.2}
                  letterSpacing="-0.01em"
                  color="gray.800"
                >
                  {'생일 축하해🎉🎉🎉\n매쉬업에서 만나서 반가워!!\n좋은 하루 보내고 한잔해~'}
                </styled.span>
                <Square size="57px" />
              </styled.div>
            </styled.div>
          )}
          {birthdayCards.map((item, index) => (
            <styled.div
              ref={(birthdayCardRef) => {
                contentRefs.current[index] = birthdayCardRef!;
              }}
              key={item.id}
              bg="white"
              w="calc(100%)"
              flexShrink="0"
              mr="20px"
              rounded="32px"
              p="24px"
              display="flex"
              flexDirection="column"
              gap="24px"
            >
              <AspectRatio ratio={16 / 9} rounded="16px" overflow="hidden">
                <Image
                  unoptimized
                  alt=""
                  fill
                  src={
                    item.imageUrl ??
                    'https://static.mash-up.kr/images/png/birthday/card-thumbnail-default.png'
                  }
                />
              </AspectRatio>
              <styled.div display="flex" flexDirection="column" alignItems="center">
                <styled.div display="flex" flexDirection="column" gap="4px" alignItems="center">
                  <styled.span
                    fontWeight={700}
                    fontSize="24px"
                    lineHeight={1.2}
                    letterSpacing="-0.01em"
                  >
                    {item.senderMemberName ?? '매숑이'}
                  </styled.span>
                  <styled.span
                    fontSize="14px"
                    fontWeight={400}
                    lineHeight={1.2}
                    letterSpacing="-0.01em"
                    color="gray.500"
                  >
                    {item.senderMemberPlatform ?? 'Mash-up'}
                  </styled.span>
                </styled.div>
                <Square size="20px" />
                <styled.span
                  whiteSpace="pre-wrap"
                  textAlign="center"
                  fontWeight={400}
                  fontSize="16px"
                  lineHeight={1.2}
                  letterSpacing="-0.01em"
                  color="gray.800"
                >
                  {item.message ??
                    '생일 축하해!\n매쉬업에서 만날 수 있어서 좋았어\n오늘 즐거운 하루 보내'}
                </styled.span>
                <Square size="57px" />
              </styled.div>
            </styled.div>
          ))}
        </styled.div>
      </styled.div>
      <styled.div display="flex" flexDirection="column" gap="8px" px="16px">
        <styled.button
          bg="brand.100"
          rounded="12px"
          h="52px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={saveImage}
        >
          <styled.div display="flex" gap="8px">
            <SvgImage
              basePath="birthday"
              path="card-list/download"
              width={20}
              height={20}
              fill={false}
            />
            <styled.span
              color="brand.500"
              fontSize="16px"
              lineHeight={1.2}
              letterSpacing="-0.01em"
              fontWeight={500}
            >
              이미지 저장
            </styled.span>
          </styled.div>
        </styled.button>
        <styled.button
          bg="brand.500"
          rounded="12px"
          h="52px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            router.replace('/birthday/crew-list');
          }}
        >
          <styled.span
            color="white"
            fontSize="16px"
            lineHeight={1.2}
            letterSpacing="-0.01em"
            fontWeight={500}
          >
            확인했어요
          </styled.span>
        </styled.button>
      </styled.div>
    </>
  );
};

export default Contents;
