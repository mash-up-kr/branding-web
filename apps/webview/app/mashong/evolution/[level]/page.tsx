'use client';

import { STATIC_ORIGIN } from 'constant';
import { Lottie } from 'ui';

import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

const Page = ({ params }: { params: { level: number } }) => {
  const typingRef = useTypingAnimation();

  return (
    <styled.div display="flex" flexDirection="column" alignItems="center" gap={26} mb={60}>
      <Lottie
        path={`${STATIC_ORIGIN}/lottie/mashong/evolution/lv-${params.level}.json`}
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
        height={48}
      >
        <span ref={typingRef} />
      </styled.div>
    </styled.div>
  );
};

export default Page;
