'use client';

import { PLATFORM_NAME_MAP } from 'constant';
import { motion } from 'framer-motion';
import { NumericRange, ValueOf } from 'types';

import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

import { SpeechBubble } from './SpeechBubble';

export const StyledMotionDiv = styled(motion.div);

interface MashongRoomProps {
  keyValue: number;
  teamName: ValueOf<typeof PLATFORM_NAME_MAP>;
  mashongLevel: NumericRange<1, 10>;
  isFeeding: boolean;
}

export const MashongRoom = ({ keyValue, teamName, mashongLevel, isFeeding }: MashongRoomProps) => {
  const teamNameSlug = teamName.replace(/\s+/g, '-').toLowerCase();

  return (
    <styled.div position="relative" display="inline-block" minWidth={360} height={381} mb="30">
      <SpeechBubble key={keyValue} isVisible={isFeeding}>
        냠냠 고마워!
      </SpeechBubble>
      <SvgImage path={`main/interior-${teamNameSlug}`} width={360} height={381} />
      <SvgImage
        path={`main/mashong-${isFeeding ? 'feed-' : ''}lv${mashongLevel}`}
        width={182}
        height={140}
        className={css({
          position: 'absolute',
          left: 89,
          top: 215,
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
        bottom={-10}
        left="50%"
        transform="translate(-50%, 0)"
      >
        {teamName}
      </styled.span>
    </styled.div>
  );
};
