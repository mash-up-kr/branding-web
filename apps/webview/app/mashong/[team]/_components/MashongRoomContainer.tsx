'use client';

import { levelName, PLATFORM_NAME_MAP } from 'constant';
import { useState, useRef, useEffect } from 'react';
import { PlatformNameKey } from 'types';
import { useDebounceCallback } from 'usehooks-ts';

import { styled } from '@/styled-system/jsx';
import { Toast } from '@/ui/Toast';

import { MashongRoom } from './MashongRoom';
import { PopcornXpTracker } from './PopcornXpTracker';

export const MashongRoomContainer = ({
  remainingPopcorn,
  currentLevel,
  currentXP,
  maxXP,
  platformName,
}: {
  remainingPopcorn: number;
  currentLevel: keyof typeof levelName;
  currentXP: number;
  maxXP: number;
  platformName: PlatformNameKey;
}) => {
  const [isFeeding, setIsFeeding] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedSetFeeding = useDebounceCallback((feedingStatus) => {
    setIsFeeding(feedingStatus);
  }, 200);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const showFeedMotion = () => {
    debouncedSetFeeding(true);

    timeoutRef.current = setTimeout(() => {
      debouncedSetFeeding(false);
    }, 1500);
  };

  return (
    <div>
      <styled.div display="flex" justifyContent="center" mt="20px">
        <MashongRoom
          platformName={PLATFORM_NAME_MAP[platformName]}
          mashongLevel={currentLevel}
          isFeeding={isFeeding}
        />
      </styled.div>
      <PopcornXpTracker
        isButtonDisabled={isFeeding}
        currentXP={currentXP}
        maxXP={maxXP}
        remainingPopcorn={remainingPopcorn}
        currentLevel={currentLevel}
        showFeedMotion={showFeedMotion}
      />
      <Toast />
    </div>
  );
};
