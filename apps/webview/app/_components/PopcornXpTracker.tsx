'use client';

import { useState } from 'react';

import { feedPopcorn } from '@/app/_actions/feedPopcorn';
import { levelUp } from '@/app/_actions/levelUp';
import { PopcornToast } from '@/app/_components/PopcornToast';
import { css } from '@/styled-system/css';
import SvgImage from '@/ui/svg-image';

import { ErrorToast } from './ErrorToast';

interface PopcornXpTrackerProps {
  isButtonDisabled: boolean;
  currentXP: number;
  maxXP: number;
  availablePopcorn: number;
  currentLevel: number;
  onClick: () => void;
}

export const PopcornXpTracker = ({
  isButtonDisabled,
  currentXP,
  maxXP,
  availablePopcorn,
  currentLevel,
  onClick,
}: PopcornXpTrackerProps) => {
  const [isError, setIsError] = useState(false);
  const [currentFeedingPopcorn, setCurrentFeedingPopcorn] = useState(0);

  const remainingXP = maxXP - currentXP;

  const levelUpAvailable = remainingXP === 0;

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
            매숑알
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
          {remainingXP}점 남음
        </span>
      </div>
      <progress
        value={currentXP}
        max={maxXP}
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
        onClick={async () => {
          if (availablePopcorn === 0) {
            setIsError(true);
          } else if (currentXP < maxXP) {
            onClick();
            setCurrentFeedingPopcorn((prev) => prev + 1);
            const { fed } = await feedPopcorn();

            if (fed && levelUpAvailable) {
              const { levelUp: levelUpComplete } = await levelUp(currentLevel + 1);

              if (levelUpComplete) {
                // 레벨업 화면 전환
              }
            }
          } else if (levelUpAvailable) {
            const { levelUp: levelUpComplete } = await levelUp(currentLevel + 1);

            if (levelUpComplete) {
              // 레벨업 화면 전환
            }
          }
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
              {availablePopcorn}개 보유
            </span>
          </>
        )}
      </button>
      <ErrorToast isOpen={isError} onClose={() => setIsError(false)}>
        팝콘을 모아주세요!
      </ErrorToast>
      <PopcornToast value={currentFeedingPopcorn} />
    </div>
  );
};
