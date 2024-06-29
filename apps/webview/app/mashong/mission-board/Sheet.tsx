'use client';

import { motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion';
import { ElementRef, useEffect, useRef, useState } from 'react';
import { useScrollLock } from 'usehooks-ts';

import { MissionStatus } from '@/app/mashong/mission-board/page';
import Popup from '@/app/mashong/mission-board/Popup';
import { Square, styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

const EXPANDABLE_LIMIT = 150;

// eslint-disable-next-line no-unused-vars
function groupBy<T, K extends keyof any>(array: T[], getKey: (item: T) => K): Record<K, T[]> {
  return array.reduce((acc, curr) => {
    const key = getKey(curr);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
  }, {} as Record<K, T[]>);
}

const StyledMotionDiv = styled(motion.div);

// const compensatePopcornUsingPOST = async ({
//   missionLevelId,
//   authorization,
// }: {
//   missionLevelId: number;
//   authorization: string;
// }) => {
//   const params = new URLSearchParams({
//     missionLevelId: String(missionLevelId),
//   });
//   const compensatePopcornUsingPOSTResponse = await fetch(
//     `https://api.dev-member.mash-up.kr/api/v1/mashong/popcorn?${params.toString()}`,
//     {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${authorization}`,
//       },
//     },
//   );

//   if (!compensatePopcornUsingPOSTResponse.ok) return undefined;
//   return compensatePopcornUsingPOSTResponse.json();
// };

const DailyMissions = ({ missions }: { missions: MissionStatus[] }) => (
  <styled.ul display="flex" flexDirection="column" gap="10px">
    {missions.map((missionStatus) => {
      const progressPercentage = (missionStatus.currentStatus / missionStatus.goal) * 100;
      const isCompensable = progressPercentage >= 100;
      const isMissionInProgress = !missionStatus.isCompensated && missionStatus.goal !== 0;

      return (
        <styled.li key={missionStatus.missionLevelId}>
          <styled.div
            opacity={missionStatus.isCompensated ? 0.5 : 1}
            bg="white"
            rounded="16px"
            border={isCompensable ? '1px solid transparent' : '1px solid #EBEFF9'}
            {...(isCompensable && {
              backgroundImage:
                'linear-gradient(#fff, #fff),linear-gradient(95.14deg, #6A36FF 1.15%, #31C1FF 102.67%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
            })}
          >
            <styled.div p="16px" display="flex" alignItems="center" gap="16px">
              {/매숑이 \d+번 출석하기/.test(missionStatus.title) && (
                <Square size="60px" bg="brand.200" rounded="16px">
                  <SvgImage
                    path={
                      isCompensable
                        ? 'mission-board/check'
                        : 'mission-board/daily-personal-attendance'
                    }
                    width={32}
                    height={32}
                    fill={false}
                  />
                </Square>
              )}
              {/내 플랫폼 전부 출석하기/.test(missionStatus.title) && (
                <Square size="60px" bg="red.100" rounded="16px">
                  <SvgImage
                    path={
                      isCompensable ? 'mission-board/check' : 'mission-board/daily-team-attendance'
                    }
                    width={32}
                    height={32}
                    fill={false}
                  />
                </Square>
              )}
              <styled.div display="flex" flexDirection="column" gap="10px" flexGrow="1">
                <styled.div display="flex" flexDirection="column" gap="4px" w="100%">
                  <styled.span lineHeight="1.2" color="#25272E" fontSize="16px" fontWeight="700">
                    {missionStatus.title}
                  </styled.span>
                  <styled.span lineHeight="1.2" fontSize="13px" fontWeight="400" color="#686F7E">
                    팝콘 {missionStatus.compensation}알
                  </styled.span>
                  {missionStatus.isCompensated && (
                    <styled.span
                      lineHeight="1.2"
                      fontSize="13px"
                      fontWeight="400"
                      color="brand.500"
                    >
                      완료
                    </styled.span>
                  )}
                </styled.div>
                {isMissionInProgress && (
                  <styled.div w="100%" h="4px" bg="brand.200" rounded="10px">
                    <styled.div
                      style={{
                        width: `${Math.min(100, progressPercentage)}%`,
                      }}
                      bg="linear-gradient(90deg, #E7DEFF 0%, #6A36FF 100%)"
                      rounded="4px"
                      h="4px"
                    />
                  </styled.div>
                )}
              </styled.div>
            </styled.div>
          </styled.div>
        </styled.li>
      );
    })}
  </styled.ul>
);

const TeamMissions = ({ missions }: { missions: MissionStatus[] }) => (
  <styled.ul display="flex" flexDirection="column" gap="10px">
    {missions.map((missionStatus) => {
      const progressPercentage = (missionStatus.currentStatus / missionStatus.goal) * 100;
      const isCompensable = progressPercentage >= 100;
      const isMissionInProgress = !missionStatus.isCompensated && missionStatus.goal !== 0;

      return (
        <styled.li key={missionStatus.missionLevelId}>
          <styled.div
            bg="white"
            rounded="16px"
            border={isCompensable ? '1px solid transparent' : '1px solid #EBEFF9'}
            {...(isCompensable && {
              backgroundImage:
                'linear-gradient(#fff, #fff),linear-gradient(95.14deg, #6A36FF 1.15%, #31C1FF 102.67%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
            })}
          >
            <styled.div p="16px" display="flex" alignItems="center" gap="16px">
              {/내 플랫폼 당근 \d+번 흔들기/.test(missionStatus.title) && (
                <Square size="60px" bg="red.100" rounded="16px">
                  <SvgImage
                    path={isCompensable ? 'mission-board/check' : 'mission-board/carrot'}
                    width={32}
                    height={32}
                    fill={false}
                  />
                </Square>
              )}
              {/매숑이 레벨 \d+ 달성하기/.test(missionStatus.title) && (
                <Square size="60px" bg="gray.50" rounded="16px">
                  <SvgImage
                    path={isCompensable ? 'mission-board/check' : 'mission-board/goal'}
                    width={32}
                    height={32}
                    fill={false}
                  />
                </Square>
              )}
              <styled.div display="flex" flexDirection="column" gap="10px" flexGrow="1">
                <styled.div display="flex" flexDirection="column" gap="4px" w="100%">
                  <styled.span lineHeight="1.2" color="#25272E" fontSize="16px" fontWeight="700">
                    {missionStatus.title}
                  </styled.span>
                  <styled.span lineHeight="1.2" fontSize="13px" fontWeight="400" color="#686F7E">
                    팝콘 {missionStatus.compensation}알
                  </styled.span>
                </styled.div>
                {isMissionInProgress && (
                  <styled.div w="100%" h="4px" bg="brand.200" rounded="10px">
                    <styled.div
                      style={{
                        width: `${Math.min(100, progressPercentage)}%`,
                      }}
                      bg="linear-gradient(90deg, #E7DEFF 0%, #6A36FF 100%)"
                      rounded="4px"
                      h="4px"
                    />
                  </styled.div>
                )}
              </styled.div>
            </styled.div>
          </styled.div>
        </styled.li>
      );
    })}
  </styled.ul>
);

const IndividualMissions = ({ missions }: { missions: MissionStatus[] }) => (
  <styled.ul display="flex" flexDirection="column" gap="10px">
    {missions.map((missionStatus) => {
      const progressPercentage = (missionStatus.currentStatus / missionStatus.goal) * 100;
      const isCompensable = progressPercentage >= 100;
      const isMissionInProgress = !missionStatus.isCompensated && missionStatus.goal !== 0;

      return (
        <styled.li key={missionStatus.missionLevelId}>
          <styled.div
            bg="white"
            rounded="16px"
            border={isCompensable ? '1px solid transparent' : '1px solid #EBEFF9'}
            {...(isCompensable && {
              backgroundImage:
                'linear-gradient(#fff, #fff),linear-gradient(95.14deg, #6A36FF 1.15%, #31C1FF 102.67%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
            })}
          >
            <styled.div p="16px" display="flex" alignItems="center" gap="16px">
              {/매숑이 팝콘 \d+알 주기/.test(missionStatus.title) && (
                <Square size="60px" bg="brand.200" rounded="16px">
                  <SvgImage
                    path={isCompensable ? 'mission-board/check' : 'mission-board/popcorn'}
                    width={32}
                    height={32}
                    fill={false}
                  />
                </Square>
              )}
              {/내 당근 \d+번 흔들기/.test(missionStatus.title) && (
                <Square size="60px" bg="red.100" rounded="16px">
                  <SvgImage
                    path={isCompensable ? 'mission-board/check' : 'mission-board/carrot'}
                    width={32}
                    height={32}
                    fill={false}
                  />
                </Square>
              )}
              <styled.div display="flex" flexDirection="column" gap="10px" flexGrow="1">
                <styled.div display="flex" flexDirection="column" gap="4px" w="100%">
                  <styled.span lineHeight="1.2" color="#25272E" fontSize="16px" fontWeight="700">
                    {missionStatus.title}
                  </styled.span>
                  <styled.span lineHeight="1.2" fontSize="13px" fontWeight="400" color="#686F7E">
                    팝콘 {missionStatus.compensation}알
                  </styled.span>
                </styled.div>
                {isMissionInProgress && (
                  <styled.div w="100%" h="4px" bg="brand.200" rounded="10px">
                    <styled.div
                      style={{
                        width: `${Math.min(100, progressPercentage)}%`,
                      }}
                      bg="linear-gradient(90deg, #E7DEFF 0%, #6A36FF 100%)"
                      rounded="4px"
                      h="4px"
                    />
                  </styled.div>
                )}
              </styled.div>
            </styled.div>
          </styled.div>
        </styled.li>
      );
    })}
  </styled.ul>
);

const Sheet = ({ missions }: { missions: MissionStatus[] }) => {
  useScrollLock();
  const [isOpen, setIsOpen] = useState(false);
  const y = useMotionValue(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShrinkable, setIsShrinkable] = useState(false);

  const scrollableAreaRef = useRef<ElementRef<'div'>>(null);
  const { scrollYProgress } = useScroll({ container: scrollableAreaRef });

  const { DAILY, NONE } = groupBy(missions, (mission) => mission.missionRepeatType);

  const { INDIVIDUAL, TEAM } = groupBy(NONE, (mission) => mission.missionType);

  useMotionValueEvent(y, 'change', (latest) => {
    if (latest === -EXPANDABLE_LIMIT) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest === 0) {
      setIsShrinkable(true);
    } else {
      setIsShrinkable(false);
    }
  });

  useEffect(() => {
    if (!isExpanded) {
      setIsShrinkable(false);
    }
  }, [isExpanded]);

  return (
    <>
      <StyledMotionDiv
        drag="y"
        style={{ y }}
        dragConstraints={{ top: -EXPANDABLE_LIMIT, bottom: 0 }}
        bg="#F8F7FC"
        rounded="24px 24px 0 0"
        minH="calc(100dvh - 56px)"
        w="100%"
        maxW="[768px]"
        position="fixed"
        top="205"
        dragElastic={0}
        dragMomentum={false}
      >
        <styled.div
          touchAction={isShrinkable ? 'none' : 'auto'}
          overflow={isExpanded && !isShrinkable ? 'scroll' : 'hidden'}
          ref={scrollableAreaRef}
          overscrollBehaviorY="none"
          h="calc(100dvh - 56px)"
          pb="130px"
          onPointerDownCapture={(event) => {
            if (isExpanded && !isShrinkable) {
              event.stopPropagation();
            }
          }}
        >
          <styled.div
            bg="linear-gradient(180deg, #F8F7FC 0%, rgba(248, 247, 252, 0) 100%)"
            rounded="24px 24px 0 0"
            h="24px"
            w="100%"
            position="absolute"
            top="0"
          />
          <styled.div display="flex" flexDirection="column" gap="32px" px="20px" pt="24px">
            <styled.div display="flex" flexDirection="column" gap="10px">
              <styled.div display="flex" flexDirection="column" gap="4px">
                <styled.h2
                  letterSpacing="-0.01em"
                  lineHeight="1.2"
                  fontSize="16px"
                  fontWeight="700"
                >
                  매일 미션
                </styled.h2>
                <styled.span color="gray.500" fontWeight={400} fontSize="13px" lineHeight="1.2">
                  매일 미션은 매일 밤 12시에 다시 시작돼요
                </styled.span>
              </styled.div>
              <DailyMissions missions={DAILY} />
            </styled.div>
            <styled.div display="flex" flexDirection="column" gap="10px">
              <styled.h2 letterSpacing="-0.01em" lineHeight="1.2" fontSize="16px" fontWeight="700">
                개인 미션
              </styled.h2>
              <IndividualMissions missions={INDIVIDUAL} />
            </styled.div>
            <styled.div display="flex" flexDirection="column" gap="10px">
              <styled.h2 letterSpacing="-0.01em" lineHeight="1.2" fontSize="16px" fontWeight="700">
                팀 미션
              </styled.h2>
              <TeamMissions missions={TEAM} />
            </styled.div>
          </styled.div>
        </styled.div>
      </StyledMotionDiv>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Sheet;
