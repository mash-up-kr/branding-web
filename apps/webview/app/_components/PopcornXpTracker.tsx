import { css } from '@/styled-system/css';

interface PopcornXpTrackerProps {
  currentValue: number;
  maxValue: number;
}

export const PopcornXpTracker = ({ currentValue, maxValue }: PopcornXpTrackerProps) => (
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
        {maxValue - currentValue}점 남음
      </span>
    </div>
    <progress
      value={currentValue}
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
        },
      })}
    />
    <button
      type="button"
      className={css({
        background: '#F5F1FF',
        padding: '8px 0px 7px 0',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 12,
        cursor: 'pointer',
      })}
    >
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
        {currentValue}개 보유
      </span>
    </button>
  </div>
);
