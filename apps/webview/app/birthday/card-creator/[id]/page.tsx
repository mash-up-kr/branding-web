/* eslint-disable @next/next/no-img-element */

'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Cropper from 'react-easy-crop';

import { createCard } from '@/app/birthday/_actions/createCard';
import { createPresignedUrl } from '@/app/birthday/_actions/createPresignedUrl';
import useFetch from '@/hooks/useFetch';
import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

import { getCroppedImg } from './canvasUtils';

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
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [cardType, setCardType] = useState<'image' | 'photo'>('image');
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

  const save = async () => {
    if (cardType === 'image') {
      try {
        const data = await createCard({
          recipientMemberId: Number(params.id),
          imageUrl: selectedImageUrl,
          message,
        });
        if (data === 'SUCCESS') {
          setIsSuccess(true);
        }
      } catch (error) {
        console.error(error);
      }
      return;
    }

    const { imageUrl } = await createPresignedUrl();

    alert(`imageUrl:${imageUrl}`);

    if (!imageUrl) {
      console.error('iamge url 없음');
      return;
    }

    if (!croppedImage) {
      return;
    }

    const response = await fetch(croppedImage);
    const blob = await response.blob();

    // pre-signed URL을 사용하여 S3에 파일 업로드
    const uploadResponse = await fetch(imageUrl, {
      method: 'PUT',
      body: blob,
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });

    if (uploadResponse.ok) {
      alert(`uploadResponse.ok`);
      try {
        const data = await createCard({
          recipientMemberId: Number(params.id),
          imageUrl, // selectedImageUrl,
          message,
        });
        if (data === 'SUCCESS') {
          setIsSuccess(true);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('파일 업로드 실패!');
    }
  };

  const goToCrewList = () => {
    router.back();
  };

  // 안드로이드 대응
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerHeight < 500) {
        window.scrollTo(0, document.body.scrollHeight);
      } else {
        window.scrollTo(0, 0);
      }
    });
  }, []);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (!fileInputRef.current) {
      return;
    }
    fileInputRef.current.click();
  };

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [imageSrc, setImageSrc] = useState<any>(null);

  const onCropComplete = (croppedArea: any, croppedAreaPixels2: any) => {
    setCroppedAreaPixels(croppedAreaPixels2);
  };

  const showCroppedImage = async () => {
    try {
      const croppedImage2: any = await getCroppedImg(imageSrc, croppedAreaPixels, rotation);
      setCroppedImage(croppedImage2);
    } catch (e) {
      console.error(e);
    }
  };

  const onClose = () => {
    setCroppedImage(null);
  };

  const onFileChange = async (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };

  const readFile = (file: any) =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });

  return (
    <styled.div display="flex" flexDirection="column" height="100dvh" position="relative">
      <styled.div
        display="flex"
        width="100%"
        height="calc(env(safe-area-inset-top) + 56px)"
        position="sticky"
        top="0px"
        bgColor="gray.50"
        justifyContent="end"
        alignItems="center"
        pt="calc(env(safe-area-inset-top) + 16px)"
        p="16px 20px"
      >
        <SvgImage
          basePath="birthday"
          path="common/close"
          width={24}
          height={24}
          onClick={() => {
            setIsConfirmOpen(true);
          }}
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
        {/* 임시 코드 */}
        <styled.div display="flex" p="0 30px" boxShadow="inset 0px -1px #EBEFF9;">
          <styled.button
            flex="1"
            height="36px"
            fontSize="16px"
            fontWeight={cardType === 'image' ? 700 : 400}
            color={cardType === 'image' ? '#25272E' : '#ABB2C1'}
            borderBottom={cardType === 'image' ? '2px solid #2C3037' : ''}
            onClick={() => setCardType('image')}
          >
            매숑이 카드
          </styled.button>
          <styled.button
            flex="1"
            height="36px"
            fontSize="16px"
            fontWeight={cardType === 'photo' ? 700 : 400}
            color={cardType === 'photo' ? '#25272E' : '#ABB2C1'}
            borderBottom={cardType === 'photo' ? '2px solid #2C3037' : ''}
            onClick={() => setCardType('photo')}
          >
            나만의 생일 카드
          </styled.button>
        </styled.div>
        <styled.div p="16px 20px" borderBottom="1px solid #EBEFF9">
          {cardType === 'image' ? (
            <>
              {images && (
                <styled.div ref={emblaRef} overflow="hidden">
                  <styled.div display="flex" mb="16px" maxW="calc(100%)">
                    {images.defaultImages.map((i, index, items) => (
                      <styled.div
                        key={i.imageUrl}
                        w="72px"
                        flexShrink="0"
                        mr={index === items.length - 1 ? '0px' : '6px'}
                        display="flex"
                        flexDirection="column"
                        gap="24px"
                        onClick={() => {
                          setSelectedImageUrl(i.imageUrl);
                        }}
                        position="relative"
                      >
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
                            selectedImageUrl === i.imageUrl
                              ? '2px solid #6A36FF'
                              : '1px solid #EBEFF9'
                          }
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
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
                  </styled.div>
                </styled.div>
              )}
              <img
                width="100%"
                height="180px"
                alt=""
                src={selectedImageUrl}
                style={{
                  borderRadius: '16px',
                }}
              />
            </>
          ) : (
            <styled.div>
              <styled.input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={onFileChange}
                style={{ display: 'none' }}
              />
              <styled.div
                width="100%"
                height="180px"
                position="relative"
                bg="#fff"
                borderRadius="16px"
                overflow="hidden"
              >
                {croppedImage ? (
                  <>
                    <img width="100%" height="180px" src={croppedImage ?? ''} alt="" />
                    <styled.button
                      type="button"
                      onClick={() => setCroppedImage(null)}
                      position="absolute"
                      width="32px"
                      height="32px"
                      borderRadius="8px"
                      bg="#EBEFF9"
                      bottom="12px"
                      right="12px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <SvgImage basePath="birthday" path="common/trash" width={16} height={16} />
                    </styled.button>
                  </>
                ) : (
                  <styled.button
                    type="button"
                    onClick={handleButtonClick}
                    position="absolute"
                    width="100%"
                    height="180px"
                  >
                    <styled.div
                      color="#959CAC"
                      fontSize="14px"
                      fontWeight={500}
                      lineHeight="16.71px"
                      display="flex"
                      justifyContent="center"
                      flexDirection="column"
                      alignItems="center"
                      gap="8px"
                    >
                      <SvgImage basePath="birthday" path="common/camera" width={32} height={32} />
                      사진을 넣어
                      <br />
                      나만의 생일 카드를 제작해 보세요.
                    </styled.div>
                  </styled.button>
                )}
              </styled.div>
            </styled.div>
          )}
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
          onClick={save}
        >
          다 썼어요.
        </styled.button>
      </styled.div>
      {isSucceess && (
        <styled.div
          position="fixed"
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
          <Image
            unoptimized
            alt=""
            width={130}
            height={60}
            src="https://static.mash-up.kr/images/png/birthday/mashong-with-cake.png"
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
      {/* 파일 선택하면 보이는 화면 */}
      {!!imageSrc && (
        <styled.div
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="#000000"
          // display="flex"
          // flexDirection="column"
          // alignItems="center"
          // justifyContent="center"
          // textAlign="center"
        >
          <styled.div
            display="flex"
            width="100%"
            height="calc(env(safe-area-inset-top) + 56px)"
            minHeight="calc(env(safe-area-inset-top) + 56px)"
            position="sticky"
            top="0px"
            justifyContent="end"
            alignItems="center"
            pt="calc(env(safe-area-inset-top) + 16px)"
            p="16px 20px"
            zIndex={9999}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => {
                setImageSrc('');
                onClose();
              }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.7071 4.2928C20.0976 4.68332 20.0976 5.31649 19.7071 5.70701L5.70711 19.707C5.31658 20.0975 4.68342 20.0975 4.29289 19.707C3.90237 19.3164 3.90237 18.6833 4.29289 18.2928L18.2929 4.2928C18.6834 3.90228 19.3166 3.90228 19.7071 4.2928Z"
                fill="#EBEFF9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.7071 19.7069C19.3166 20.0974 18.6834 20.0974 18.2929 19.7069L4.29286 5.70691C3.90234 5.31638 3.90234 4.68322 4.29286 4.29269C4.68339 3.90217 5.31655 3.90217 5.70708 4.29269L19.7071 18.2927C20.0976 18.6832 20.0976 19.3163 19.7071 19.7069Z"
                fill="#EBEFF9"
              />
            </svg>
          </styled.div>
          <styled.div
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100vh"
            position="absolute"
            top="0"
            width="100%"
          >
            <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={16 / 9}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </styled.div>
          <styled.div
            position="absolute"
            bottom="40px"
            width="calc(100% - 40px)"
            justifyContent="center"
            m="0 20px"
            display="flex"
            gap="8px"
          >
            <styled.button
              // width="120px"
              flex="1"
              fontSize="16px"
              fontWeight={500}
              height="48px"
              color="#6A36FF"
              bg="#EBEFF9"
              borderRadius="12px"
              onClick={handleButtonClick}
            >
              사진변경
            </styled.button>
            <styled.button
              // width="120px"
              flex="1"
              fontSize="16px"
              fontWeight={500}
              height="48px"
              color="#fff"
              bg="#6A36FF"
              borderRadius="12px"
              onClick={() => {
                showCroppedImage();
                setImageSrc('');
              }}
            >
              완료
            </styled.button>
          </styled.div>
        </styled.div>
      )}
      {isConfirmOpen && (
        <styled.div
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="#00000080"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <styled.div p="32px 20px 24px" bg="#fff" borderRadius="20px">
            <styled.div fontSize="20px" fontWeight={700} color="#2C3037" lineHeight="23.87px">
              생일 카드 작성을
              <br />
              종료하시겠어요?
            </styled.div>
            <styled.div mt="24px" display="flex" gap="8px">
              <styled.button
                width="120px"
                fontSize="16px"
                fontWeight={500}
                height="48px"
                color="#686F7E"
                bg="#EBEFF9"
                borderRadius="12px"
                onClick={() => {
                  setIsConfirmOpen(false);
                }}
              >
                취소
              </styled.button>
              <styled.button
                width="120px"
                fontSize="16px"
                fontWeight={500}
                height="48px"
                color="#fff"
                bg="#6A36FF"
                borderRadius="12px"
                onClick={goToCrewList}
              >
                확인
              </styled.button>
            </styled.div>
          </styled.div>
        </styled.div>
      )}
    </styled.div>
  );
};

export default Page;
