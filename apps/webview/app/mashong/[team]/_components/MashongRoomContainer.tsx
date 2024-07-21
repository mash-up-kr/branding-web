'use client';

import { PLATFORM_NAME_MAP } from 'constant';
import { useState } from 'react';

import { styled } from '@/styled-system/jsx';

import { MashongRoom } from './MashongRoom';
import { PopcornXpTracker } from './PopcornXpTracker';

export const MashongRoomContainer = ({
  availablePopcorn,
  currentLevel,
  currentXP,
  maxXP,
  teamName,
}: {
  availablePopcorn: number;
  currentLevel: number;
  currentXP: number;
  maxXP: number;
  teamName: keyof typeof PLATFORM_NAME_MAP;
}) => {
  const [isFeeding, setIsFeeding] = useState(false);

  return (
    <div>
      <styled.div display="flex" justifyContent="center" mt="20px">
        <MashongRoom
          teamName={PLATFORM_NAME_MAP[teamName]}
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
        onClick={() => {
          setIsFeeding(true);

          setTimeout(() => {
            setIsFeeding(false);
          }, 3_000);
        }}
      />
    </div>
  );
};
