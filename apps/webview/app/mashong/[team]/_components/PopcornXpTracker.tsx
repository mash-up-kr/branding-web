'use client';

import { levelName } from 'constant';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useInterval } from 'usehooks-ts';
import { assert, isKeyOfObject } from 'utils';

import { feedPopcorn } from '@/app/mashong/_actions/feedPopcorn';
import { css } from '@/styled-system/css';
import SvgImage from '@/ui/svg-image';

import {
  handleOptimisticUpdate,
  handleFeedFailure,
  handleFeedSuccess,
  handleFeedUpdate,
} from '../_helpers/feedHandlers';
import { handleLevelUp, handleNoPopcorn } from '../_helpers/levelHandlers';
import { useFeedProgress } from '../_helpers/useFeedProgress';

interface PopcornXpTrackerProps {
  isButtonDisabled: boolean;
  currentXP: number;
  maxXP: number;
  remainingPopcorn: number;
  currentLevel: keyof typeof levelName;
  showFeedMotion: () => void;
}

export const PopcornXpTracker = ({
  isButtonDisabled,
  currentXP,
  maxXP,
  remainingPopcorn,
  currentLevel,
  showFeedMotion,
}: PopcornXpTrackerProps) => {
  const router = useRouter();
  assert(isKeyOfObject(currentLevel, levelName));
  const [feedProgress, dispatch] = useFeedProgress({
    currentXP,
    maxXP,
    remainingPopcorn,
    currentLevel,
    popcornConsumed: 0,
  });
  const isMaxLevel = feedProgress.currentLevel === 10;
  const remainingXP = feedProgress.maxXP - feedProgress.currentXP;

  const levelUpAvailable = !isMaxLevel && remainingXP <= 0;

  useInterval(async () => {
    const response = await getMashongStatus();
    if (response) {
      // @ts-expect-error; response type
      handleFeedUpdate(dispatch, response);
    }
  }, 2000);

  const handleFeedButtonClick = async () => {
    if (levelUpAvailable) {
      handleLevelUp(router)(currentLevel + 1);
      return;
    }

    if (feedProgress.remainingPopcorn === 0) {
      handleNoPopcorn(router)();
      return;
    }

    const prevState = { ...feedProgress } as const;

    handleOptimisticUpdate(dispatch);

    try {
      const response = await feedPopcorn();
      // @ts-expect-error; response type
      handleFeedSuccess(dispatch, response, prevState, showFeedMotion);
    } catch (error) {
      handleFeedFailure(dispatch, prevState);
    }
  };

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: 20,
        border: '1px solid #EBEFF9',
        borderRadius: 20,
        background: '#fff',
      })}
    >
      <div
        className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}
      >
        <div className={css({ display: 'flex', gap: 8, alignItems: 'center' })}>
          <span
            className={css({
              background: 'brand.500',
              fontWeight: 600,
              fontSize: 13,
              lineHeight: '15.5px',
              letterSpacing: '-1%',
              color: '#fff',
              padding: '2px 8px 2px 8px',
              borderRadius: 4,
            })}
          >
            Lv.{currentLevel}
          </span>
          <span
            className={css({
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '16.7px',
              letterSpacing: '-1%',
              color: 'gray.800',
            })}
          >
            {levelName[currentLevel]}
          </span>
        </div>
        <span
          className={css({
            fontWeight: 400,
            fontSize: 13,
            lineHeight: '15.5px',
            letterSpacing: '-1%',
            color: 'gray.500',
          })}
        >
          {isMaxLevel ? '최고 레벨에 도달!' : `${Math.max(remainingXP, 0)}점 남음`}
        </span>
      </div>
      <progress
        value={isMaxLevel ? feedProgress.maxXP : feedProgress.currentXP}
        max={feedProgress.maxXP}
        className={css({
          width: '100%',
          height: 12,
          appearance: 'none',
          '&::-webkit-progress-bar': {
            background: 'linear-gradient(90deg, #E7DEFF 0%, #F8F7FC 100%)',
            borderRadius: 4,
          },
          '&::-webkit-progress-value': {
            background: 'linear-gradient(90deg, #E7DEFF 0%, #6A36FF 100%)',
            borderRadius: 4,
            transition: 'width 0.5s ease',
          },
        })}
      />
      <button
        type="button"
        disabled={isButtonDisabled}
        onClick={handleFeedButtonClick}
        className={css({
          background: levelUpAvailable ? '#6A36FF' : '#F5F1FF',
          padding: levelUpAvailable ? '16px 0 15px 0' : '8px 0px 7px 0',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 12,
          cursor: 'pointer',
          height: 48,
          position: 'relative',
          overflow: 'hidden',
        })}
      >
        {levelUpAvailable ? (
          <>
            <SvgImage
              path="main/button-highlight"
              width={88}
              height={48}
              className={css({
                position: 'absolute',
                top: 0,
                animation: `move 2s linear infinite`,
              })}
            />
            <span
              className={css({
                color: '#fff',
                fontSize: 14,
                fontWeight: 700,
                lineHeight: '16.7px',
                letterSpacing: '-1%',
              })}
            >
              레벨업 하기
            </span>
          </>
        ) : (
          <>
            <span
              className={css({
                color: '#6A36FF',
                fontSize: 14,
                fontWeight: 700,
                lineHeight: '16.7px',
                letterSpacing: '-1%',
              })}
            >
              팝콘 먹이기
            </span>
            <span
              className={css({
                color: 'gray.500',
                fontWeight: 400,
                fontSize: 13,
                lineHeight: '15.5px',
                letterSpacing: '-1%',
              })}
            >
              {feedProgress.remainingPopcorn}개 보유
            </span>
          </>
        )}
      </button>
    </div>
  );
};

// TODO: Temp
async function getMashongStatus() {
  try {
    const authToken = Cookies.get('token');

    if (!authToken) {
      throw new Error(`유효한 인증 토큰이 필요합니다.`);
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/v1/mashong/status`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const { data } = await res.json();

    return {
      remainingPopcorn: data.lastPopcornValue,
      currentLevel: data.currentLevel,
      currentXP: data.accumulatedPopcornValue,
      maxXP: data.goalPopcornValue,
      platformName: data.platformName,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
