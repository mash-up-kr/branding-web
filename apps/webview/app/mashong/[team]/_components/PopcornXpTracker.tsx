'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast/headless';

import { feedPopcorn } from '@/app/_actions/feedPopcorn';
import { showErrorToast } from '@/app/_components/ErrorToast';
import { css } from '@/styled-system/css';
import SvgImage from '@/ui/svg-image';

import { showPopcornToast } from './PopcornToast';

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
  availablePopcorn: initialAvailablePopcorn,
  currentLevel,
  onClick,
}: PopcornXpTrackerProps) => {
  const router = useRouter();

  const [localXP, setLocalXP] = useState(currentXP);
  const [availablePopcorn, setAvailablePopcorn] = useState(initialAvailablePopcorn);
  const [currentFeedingPopcorn, setCurrentFeedingPopcorn] = useState(0);

  const remainingXP = maxXP - localXP;

  const levelUpAvailable = Boolean(remainingXP <= 0 && Cookies.get('token'));

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
          {remainingXP >= 0 ? remainingXP : 0}점 남음
        </span>
      </div>
      <progress
        value={localXP}
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
          if (levelUpAvailable) {
            router.push(`/mashong/evolution/${currentLevel + 1}`);
            return;
          }

          if (availablePopcorn === 0) {
            router.push('/mashong/mission-board');
            Cookies.set('popcornAlertSeen', '1');
          } else if (localXP < maxXP) {
            try {
              await feedPopcorn();

              toast.remove();
              showPopcornToast(currentFeedingPopcorn + 1);

              // 애니메이션을 유지하기 위해 클라이언트 상태 관리
              setCurrentFeedingPopcorn((prev) => prev + 1);
              setLocalXP((prevXP) => Math.min(prevXP + 1, maxXP));
              setAvailablePopcorn((prev) => prev - 1);
              onClick();
            } catch (error) {
              showErrorToast('팝콘 주기를 실패했어요..');
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
    </div>
  );
};
