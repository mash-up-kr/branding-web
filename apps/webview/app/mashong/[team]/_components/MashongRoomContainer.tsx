'use client';

import { PLATFORM_NAME_MAP } from '@/../../packages/constant';
import { useState } from 'react';

import { MashongRoom } from '@/app/_components/MashongRoom';
import { PopcornXpTracker } from '@/app/_components/PopcornXpTracker';
import { styled } from '@/styled-system/jsx';

export const MashongRoomContainer = ({
  popcornValue,
  teamName,
}: {
  popcornValue: number;
  teamName: keyof typeof PLATFORM_NAME_MAP;
}) => {
  const [isFeeding, setIsFeeding] = useState(false);

  return (
    <div>
      <styled.div display="flex" justifyContent="center" mt="20px">
        <MashongRoom
          keyValue={popcornValue}
          teamName={PLATFORM_NAME_MAP[teamName]}
          mashongLevel={8}
          isFeeding={isFeeding}
        />
      </styled.div>
      <PopcornXpTracker
        isButtonDisabled={isFeeding}
        currentValue={popcornValue ?? 0}
        maxValue={15}
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
