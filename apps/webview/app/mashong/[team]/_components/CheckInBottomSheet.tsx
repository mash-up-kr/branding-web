'use client';

import useFetch from '@/hooks/useFetch';
import { css } from '@/styled-system/css';
import BottomSheet, { BottomSheetProps } from '@/ui/BottomSheet';
import SvgImage from '@/ui/svg-image';

const CheckInBottomSheet = ({ isOpen, onClose, ...restProps }: BottomSheetProps) => {
  const { data } = useFetch<{ attendanceCount: number }>('/v1/mashong-mission/attendances');

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} height={278} {...restProps}>
      <div>
        <div
          className={css({
            fontWeight: 700,
            lineHeight: '19px',
            fontSize: '1.6rem',
            letterSpacing: '-1%',
            color: 'gray.900',
            margin: '.8rem auto',
            textAlign: 'center',
          })}
        >
          하루에 4번 매숑이를 만나러 와주세요!
        </div>
        <div
          className={css({
            fontWeight: 400,
            fontSize: '1.4rem',
            lineHeight: '1.67rem',
            letterSpacing: '-1%',
            color: 'gray.600',
            marginBottom: '.8rem',
            textAlign: 'center',
          })}
        >
          30분마다 팝콘 1개를 받을 수 있어요!
        </div>
      </div>

      <div
        className={css({
          display: 'flex',
          gap: '.8rem',
          justifyContent: 'center',
          marginBottom: '1rem',
        })}
      >
        {new Array(4).fill(null).map((_, index) => (
          <AttendanceCheck
            key={`attend-check-${index}`}
            checkIndex={index}
            isChecked={index < (data ? Number(data.attendanceCount) : 1)}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={onClose}
        className={css({
          background: 'brand.500',
          fontWeight: 500,
          color: '#fff',
          fontSize: '1.6rem',
          borderRadius: '1.2rem',
          padding: '1.6rem 2rem',
          outline: 'none',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
        })}
      >
        확인
      </button>
    </BottomSheet>
  );
};

export default CheckInBottomSheet;

interface AttendanceCheckProps {
  isChecked: boolean;
  checkIndex: number;
}

const AttendanceCheck = ({ isChecked, checkIndex }: AttendanceCheckProps) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label
    className={css({
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      userSelect: 'none',
    })}
  >
    <input
      type="checkbox"
      className={css({
        display: 'none',
      })}
      defaultChecked={isChecked}
    />
    <div
      className={css({
        width: '6.2rem',
        height: '7.4rem',
        borderRadius: '1rem',
        background: isChecked ? 'brand.200' : 'gray.100',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.8rem',
      })}
    >
      {isChecked ? (
        <>
          <SvgImage path="main/check-circle" width={24} height={24} />
          <div
            className={css({
              fontWeight: 500,
              fontSize: '1.4rem',
              lineHeight: '1.67rem',
              letterSpacing: '-1%',
              color: 'brand.500',
            })}
          >
            출석
          </div>
        </>
      ) : (
        <>
          <SvgImage path={`main/icon-cloud-${checkIndex + 1}`} width={24} height={24} />
          <div
            className={css({
              fontWeight: 500,
              fontSize: '1.4rem',
              lineHeight: '1.67rem',
              letterSpacing: '-1%',
              color: 'gray.800',
            })}
          >
            1개
          </div>
        </>
      )}
    </div>
  </label>
);
