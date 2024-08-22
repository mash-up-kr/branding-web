'use client';

import { speechBubbleTexts } from 'constant';
import { NumericRange, PlatformNameValue } from 'types';

import { useRandomArrayElement } from '@/hooks/useRandomArrayElement';
import { useTimedToggle } from '@/hooks/useTimedToggle';
import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

import { SpeechBubble } from './SpeechBubble';

interface MashongRoomProps {
  platformName: PlatformNameValue;
  mashongLevel: number | NumericRange<1, 10>;
  isFeeding: boolean;
}

export const MashongRoom = ({ platformName, mashongLevel, isFeeding }: MashongRoomProps) => {
  const teamNameSlug = platformName.replace(/\s+/g, '-').toLowerCase();

  const { isToggled, triggerToggle } = useTimedToggle({
    debounceDelay: 200,
    activeDuration: 2000,
  });

  const speechBubbleText = useRandomArrayElement({
    isActive: isToggled,
    array: speechBubbleTexts,
  });

  return (
    <styled.div position="relative" display="inline-block" minWidth={360} height={380} mb="30">
      <SpeechBubble isVisible={isFeeding || isToggled}>
        {isFeeding ? '냠냠 고마워!' : speechBubbleText}
      </SpeechBubble>
      <div onClick={triggerToggle} aria-hidden="true">
        <SvgImage
          path={`main/interior-${teamNameSlug}`}
          width={360}
          height={381}
          className={css({ position: 'absolute', bottom: -45, zIndex: 0 })}
        />
        <SvgImage
          path={`main/mashong-${isFeeding ? 'feed-' : ''}lv${mashongLevel}`}
          width={182}
          height={140}
          className={css({
            position: 'absolute',
            left: 89,
            top: 215,
            cursor: 'pointer',
          })}
        />
      </div>
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
        {platformName}
      </styled.span>
    </styled.div>
  );
};
