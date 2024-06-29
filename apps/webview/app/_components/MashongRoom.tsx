import { PLATFORM_NAME_MAP } from 'constant';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { NumericRange, ValueOf } from 'types';

import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

export const StyledMotionDiv = styled(motion.div);

interface MashongRoomProps {
  keyValue: number;
  teamName: ValueOf<typeof PLATFORM_NAME_MAP>;
  mashongLevel: NumericRange<1, 10>;
}

export const MashongRoom = ({ keyValue, teamName, mashongLevel }: MashongRoomProps) => {
  const teamNameSlug = teamName.replace(/\s+/g, '-').toLowerCase();

  return (
    <styled.div position="relative" display="inline-block">
      <SpeechBubble key={keyValue}>냠냠 고마워!</SpeechBubble>
      <SvgImage path={`main/interior-${teamNameSlug}`} width={360} height={381} />
      <SvgImage
        path={`main/mashong-lv${mashongLevel}`}
        width={182}
        height={140}
        className={css({
          position: 'absolute',
          left: 89,
          top: 212,
        })}
      />
      <styled.span
        background="#EBEFF9"
        padding="3.5px 12px"
        borderRadius={30}
        fontWeight={500}
        fontSize={14}
        lineHeight="16.7px"
        letterSpacing="-1%"
        color="#686F7E"
        position="absolute"
        bottom={30}
        left="50%"
        transform="translate(-50%, 0)"
      >
        {teamName}
      </styled.span>
    </styled.div>
  );
};
const SpeechBubble = ({ children }: PropsWithChildren) => (
  <StyledMotionDiv
    position="relative"
    display="inline-block"
    top="173"
    left="114"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
  >
    <SvgImage path="main/speech-bubble" width={132} height={38} />
    <styled.div
      position="absolute"
      left="50%"
      top="50%"
      fontWeight={400}
      fontSize={14}
      lineHeight="16.7px"
      transform="translate(-50%, -65%)"
      width="100%"
      textAlign="center"
      userSelect="none"
    >
      <p>{children}</p>
    </styled.div>
  </StyledMotionDiv>
);
