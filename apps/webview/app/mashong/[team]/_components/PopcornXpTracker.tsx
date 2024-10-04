'use client';

import { levelName } from 'constant';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import { assert, isKeyOfObject } from 'utils';

import { showErrorToast } from '@/app/_components/ErrorToast';
import { css } from '@/styled-system/css';
import SvgImage from '@/ui/svg-image';

import { showPopcornToast } from './PopcornToast';
import {
  handleOptimisticUpdate,
  handleFeedFailure,
  handleFeedSuccess,
} from '../_helpers/feedHandlers';
import { handleLevelUp, handleNoPopcorn } from '../_helpers/levelHandlers';
import { useFeedLongPress } from '../_helpers/useFeedLongPress';
import { useFeedProgress } from '../_helpers/useFeedProgress';
import { useFeedStatusPolling } from '../_helpers/useFeedStatusPolling';
import { postPopcornFeed } from '../_services/postPopcornFeed';

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
  currentXP: initialCurrentXP,
  maxXP: initialMaxXP,
  remainingPopcorn: initialRemainingPopcorn,
  currentLevel: initialCurrentLevel,
  showFeedMotion,
}: PopcornXpTrackerProps) => {
  const router = useRouter();
  assert(isKeyOfObject(initialCurrentLevel, levelName));

  const [popcornConsumed, setPopcornConsumed] = useState(0);
  const [feedProgress, dispatch] = useFeedProgress({
    currentXP: initialCurrentXP,
    maxXP: initialMaxXP,
    remainingPopcorn: initialRemainingPopcorn,
    currentLevel: initialCurrentLevel,
  });

  const isMaxLevel = feedProgress.currentLevel === 10;
  const remainingXP = feedProgress.maxXP - feedProgress.currentXP;
  const levelUpAvailable = !isMaxLevel && remainingXP <= 0;

  const updateFeedFromResponse = useCallback(async (popcornCount: number) => {
    try {
      const response = await postPopcornFeed(popcornCount);
      handleFeedSuccess(dispatch, response, feedProgress, showFeedMotion);
    } catch (error) {
      handleFeedFailure(dispatch, feedProgress);
      showErrorToast('팝콘 주기를 실패했어요..');
    } finally {
      setPopcornConsumed(0);
    }
  }, []);

  const debouncedUpdateFeed = useDebounceCallback(updateFeedFromResponse, 1000);

  const handleFeedButtonAction = () => {
    if (levelUpAvailable) {
      handleLevelUp(router)(feedProgress.currentLevel + 1);
      return false;
    }

    if (feedProgress.remainingPopcorn === 0) {
      handleNoPopcorn(router)();
      return false;
    }

    handleOptimisticUpdate(dispatch);
    setPopcornConsumed((prev) => {
      requestAnimationFrame(() => {
        showPopcornToast(prev + 1);
      });
      return prev + 1;
    });

    return true;
  };

  const handleFeedButtonClick = (): void => {
    if (longPressActive) return;
    const shouldFeedActionProceed = handleFeedButtonAction();
    if (!shouldFeedActionProceed) return;
    const newPopcornConsumed = popcornConsumed + 1;
    debouncedUpdateFeed(newPopcornConsumed);
  };

  const { longPressActive, longPressAttrs } = useFeedLongPress({
    onStart: handleFeedButtonAction,
    onFinish: () => {
      updateFeedFromResponse(popcornConsumed);
      setPopcornConsumed(0);
    },
  });

  useFeedStatusPolling(dispatch, popcornConsumed > 0 ? null : 2000);

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
            Lv.{feedProgress.currentLevel}
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
            {levelName[feedProgress.currentLevel as keyof typeof levelName]}
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
        {...longPressAttrs}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
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
          userSelect: 'none',
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
