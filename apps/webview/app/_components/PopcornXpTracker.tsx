'use client';

// import { feedPopcorn } from '@/app/_actions/feedPopcorn';

import { useState } from 'react';

import { PopcornToast } from '@/app/_components/PopcornToast';
import { css } from '@/styled-system/css';
import SvgImage from '@/ui/svg-image';

import { ErrorToast } from './ErrorToast';

interface PopcornXpTrackerProps {
  isButtonDisabled: boolean;
  currentValue: number;
  maxValue: number;
  onClick: () => void;
}

export const PopcornXpTracker = ({
  isButtonDisabled,
  currentValue,
  maxValue,
  onClick,
}: PopcornXpTrackerProps) => {
  const [testValue, setTestValue] = useState(0);
  // const remainingValue = maxValue - currentValue;
  const remainingValue = maxValue - testValue;
  const levelUpAvailable = remainingValue === 0;
  const [isError, setIsError] = useState(false);

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
            Lv.1
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
          {remainingValue}점 남음
        </span>
      </div>
      <progress
        // value={currentValue}
        value={testValue}
        max={maxValue}
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
        onClick={() => {
          console.log('clicked');

          if (testValue < 15) {
            setTestValue((prev) => prev + 1);
            onClick();
          }

          if (currentValue === 0) {
            // setIsError(true);
          } else {
            // feedPopcorn();
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
              {/* {currentValue}개 보유 */}
              {remainingValue}개 보유
            </span>
          </>
        )}
      </button>
      <ErrorToast isOpen={isError} onClose={() => setIsError(false)}>
        팝콘을 모아주세요!
      </ErrorToast>
      <PopcornToast value={testValue} />
    </div>
  );
};
