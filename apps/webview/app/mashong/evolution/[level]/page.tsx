'use client';

import { STATIC_ORIGIN, levelName } from 'constant';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Lottie } from 'ui';

import { levelUp } from '@/app/_actions/levelUp';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

type LevelKeys = keyof typeof levelName;

const Page = ({ params }: { params: { level: number } }) => {
  const router = useRouter();
  const [levelUpComplete, setLevelUpComplete] = useState(true);

  const pendingLevel = params.level as LevelKeys;
  const typingRef = useTypingAnimation({
    strings: [
      levelUpComplete && pendingLevel in levelName
        ? `<span>축하해요!<br/>‘Lv.${pendingLevel} ${levelName[pendingLevel]}’으로<br/>성장했어요!`
        : '<span>어랏...!</span><br/><span>심상치 않은 성장의 기운이...?!</span>',
    ],
    typeSpeed: 40,
  });

  useEffect(() => {
    // 축하 화면을 최소 4초 동안 노출
    const minWait = new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });

    const levelUpPromise = levelUp(pendingLevel);

    Promise.all([minWait, levelUpPromise])
      .then(() => {
        setLevelUpComplete(true);
      })
      .catch(() => {
        // TODO: 에러 토스트
      });
  }, [pendingLevel]);

  return (
    <styled.div display="flex" flexDirection="column" alignItems="center" gap={26} mb={60}>
      <Lottie
        path={`${STATIC_ORIGIN}/lottie/mashong/evolution/lv-${pendingLevel}.json`}
        width={182}
        height={140}
        className={css({
          animation: 'fadeIn 2s ease-in, expand 2s linear infinite alternate',
        })}
      />
      <styled.div
        fontWeight={600}
        fontSize={20}
        lineHeight="23.87px"
        letterSpacing="-1%"
        color="gray.950"
        textAlign="center"
        whiteSpace="nowrap"
        margin="0 auto"
        overflow="hidden"
        position="relative"
        height={levelUpComplete ? 73 : 48}
      >
        <span ref={typingRef} />
      </styled.div>
      {levelUpComplete && (
        <styled.button
          type="button"
          bgColor="#6A36FF"
          color="#fff"
          fontSize={16}
          padding="14px 46px"
          fontWeight={500}
          borderRadius={12}
          opacity={0}
          animation=".4s fadeIn 2s ease-in forwards"
          onClick={() => {
            router.back();
          }}
        >
          확인
        </styled.button>
      )}
    </styled.div>
  );
};

export default Page;
