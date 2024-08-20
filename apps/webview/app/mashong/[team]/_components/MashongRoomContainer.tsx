'use client';

import { levelName, PLATFORM_NAME_MAP } from 'constant';
import { useState } from 'react';
import { PlatformNameKey } from 'types';
import { useDebounceCallback } from 'usehooks-ts';

import { styled } from '@/styled-system/jsx';
import { Toast } from '@/ui/Toast';

import { MashongRoom } from './MashongRoom';
import { PopcornXpTracker } from './PopcornXpTracker';

export const MashongRoomContainer = ({
  availablePopcorn,
  currentLevel,
  currentXP,
  maxXP,
  platformName,
}: {
  availablePopcorn: number;
  currentLevel: keyof typeof levelName;
  currentXP: number;
  maxXP: number;
  platformName: PlatformNameKey;
}) => {
  const [isFeeding, setIsFeeding] = useState(false);

  const debouncedSetIsFeeding = useDebounceCallback(() => {
    setIsFeeding(true);

    setTimeout(() => {
      setIsFeeding(false);
    }, 1000);
  }, 200);

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
        availablePopcorn={availablePopcorn}
        currentLevel={currentLevel}
        onClick={debouncedSetIsFeeding}
      />
      <Toast />
    </div>
  );
};
