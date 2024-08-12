'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import useFetch from '@/hooks/useFetch';
import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

const Page = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { name: string };
}) => {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [isSucceess, setIsSuccess] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const { data: images } = useFetch<{ defaultImages: { imageUrl: string }[] }>(
    '/v1/birthday-cards/default-images',
  );

  useEffect(() => {
    if (!images) {
      return;
    }
    setSelectedImageUrl(images.defaultImages[0].imageUrl!);
  }, [images]);

  const [emblaRef] = useEmblaCarousel({ loop: false });

  const getRandomMessage = async () => {
    try {
      const authToken = Cookies.get('token');

      if (!authToken) {
        throw new Error(`유효한 인증 토큰이 필요합니다.`);
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/birthday-cards/random-message`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      );
      const { data } = await response.json();
      setMessage(data.todayMessage);
    } catch (error) {
      console.error(error);
    }
  };

  const createCard = async () => {
    try {
      const authToken = Cookies.get('token');

      if (!authToken) {
        throw new Error(`유효한 인증 토큰이 필요합니다.`);
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/birthday-cards`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipientMemberId: Number(params.id),
          imageUrl: selectedImageUrl,
          message,
        }),
      });
      const { code } = await response.json();
      if (code === 'SUCCESS') {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const goToCrewList = () => {
    router.replace('/birthday/crew-list');
  };

  return (
    <styled.div display="flex" flexDirection="column" height="100dvh" position="relative">
      <styled.div
        display="flex"
        height="calc(env(safe-area-inset-top) + 56px)"
        pt="env(safe-area-inset-top)"
        position="sticky"
        top="0px"
        bgColor="gray.50"
        justifyContent="end"
        alignItems="center"
        px="20px"
        py="16px"
        onClick={() => {
          router.replace('/birthday/crew-list');
        }}
      >
        <SvgImage
          basePath="birthday"
          path="common/close"
          width={24}
          height={24}
          onClick={goToCrewList}
        />
      </styled.div>
      <styled.div bg="gray.50" width="100%" flex="3" display="flex" flexDirection="column">
        <styled.div p="0 20px 20px">
          <styled.div fontSize="24px" fontWeight={600}>
            <styled.span color="brand.500">{searchParams.name}</styled.span>님의 생일을
            <br />
            축하해 주세요.
          </styled.div>
          <styled.div>
            <styled.img />
          </styled.div>
        </styled.div>
        <styled.div p="16px 20px" borderBottom="1px solid red.100">
          {images && (
            <styled.div ref={emblaRef} display="flex" gap="6px" mb="16px" overflow="hidden">
              <styled.div display="flex" gap="6px">
                {images?.defaultImages.map((i) => (
                  <styled.div key={i.imageUrl} position="relative" width="72px">
                    <Image
                      width="72"
                      height="52"
                      unoptimized
                      alt=""
                      src={i.imageUrl}
                      style={{
                        borderRadius: '8px',
                        height: '52px',
                        objectFit: 'cover',
                      }}
                    />
                    <styled.div
                      position="absolute"
                      top={0}
                      left={0}
                      width="72px"
                      height="52px"
                      bg={selectedImageUrl === i.imageUrl ? '#FFFFFF66' : ''}
                      borderRadius="8px"
                      border={
                        selectedImageUrl === i.imageUrl ? '2px solid #6A36FF' : '1px solid #EBEFF9'
                      }
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      onClick={() => {
                        setSelectedImageUrl(i.imageUrl);
                      }}
                    >
                      {selectedImageUrl === i.imageUrl && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.09346 11.8945C4.48398 11.5039 5.11715 11.5039 5.50767 11.8945L9.89236 16.2791L18.5202 7.65129C18.9107 7.26077 19.5439 7.26077 19.9344 7.65129C20.325 8.04181 20.325 8.67498 19.9344 9.0655L10.5995 18.4005C10.2089 18.791 9.57578 18.791 9.18526 18.4005L4.09346 13.3087C3.70294 12.9181 3.70294 12.285 4.09346 11.8945Z"
                            fill="#6A36FF"
                          />
                        </svg>
                      )}
                    </styled.div>
                  </styled.div>
                ))}
                {/* <styled.div
                  position="absolute"
                  right={0}
                  width="92px"
                  height="52px"
                  bg="linear-gradient(to right, rgb(255 255 255 / 0%) 10%, #f8f7fc 100%)"
                /> */}
              </styled.div>
            </styled.div>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            width="100%"
            height="180px"
            alt=""
            src={selectedImageUrl}
            style={{
              borderRadius: '16px',
            }}
          />
        </styled.div>
        <styled.div p="16px 20px">
          <styled.div mb="8px" display="flex" justifyContent="space-between" alignItems="center">
            <styled.div fontSize="16px" fontWeight={600} color="#2C3037">
              보낼 메세지
            </styled.div>
            <styled.button
              fontSize="14px"
              fontWeight={500}
              color="#4D535E"
              bg="#EBEFF9"
              p="7.5px 12px"
              borderRadius="8px"
              onClick={getRandomMessage}
            >
              재밌는 문구 추천 받기
            </styled.button>
          </styled.div>
          <styled.div>
            <styled.textarea
              width="100%"
              height="120px"
              border="1px solid #DEE2E6"
              borderRadius="16px"
              p="12px 14px"
              color="#343A40"
              fontSize="15px"
              fontWeight={500}
              placeholder="매숑아 생일 축하해"
              value={message}
              onChange={(e) => {
                if (e.target.value.length > 50) {
                  return;
                }
                setMessage(e.target.value);
              }}
            />
            <styled.div
              fontWeight={400}
              fontSize="15px"
              textAlign="right"
              color="#ADB5BD"
              mb="10px"
            >
              <styled.span color="#2C3037">{message.length}</styled.span>/50
            </styled.div>
          </styled.div>
        </styled.div>
      </styled.div>
      <styled.div
        position="sticky"
        bottom="0"
        width="100%"
        p="0 20px 52px 20px"
        bg="#F8F7FC"
        borderRadius="8px"
      >
        <styled.button
          width="100%"
          fontSize="16px"
          fontWeight={500}
          height="48px"
          color="#fff"
          disabled={message.length === 0}
          bg={message.length > 0 ? '#6A36FF' : '#CDBFF6'}
          borderRadius="12px"
          onClick={createCard}
        >
          다 썼어요.
        </styled.button>
      </styled.div>
      {isSucceess && (
        <styled.div
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="#000000CC"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <SvgImage
            basePath="birthday"
            path="common/mashong-with-cake"
            width={130}
            height={60}
            style={{ rotate: '2deg' }}
          />
          <styled.div fontWeight={600} fontSize="20px" lineHeight="23.87px" color="#fff" mt="20px">
            생일 카드가
            <br />잘 전달되었어요!
          </styled.div>
          <styled.button
            width="120px"
            fontSize="16px"
            fontWeight={500}
            height="48px"
            color="#fff"
            disabled={message.length === 0}
            bg="#6A36FF"
            borderRadius="12px"
            mt="26px"
            onClick={goToCrewList}
          >
            확인
          </styled.button>
        </styled.div>
      )}
    </styled.div>
  );
};

export default Page;
