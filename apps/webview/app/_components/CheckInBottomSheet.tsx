import { css } from '@/styled-system/css';
import BottomSheet, { BottomSheetProps } from '@/ui/BottomSheet';
import SvgImage from '@/ui/svg-image';

const CheckInBottomSheet = ({ isOpen, onClose, ...restProps }: BottomSheetProps) => (
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
      {/** @todo API */}
      {new Array(4).fill(null).map((_, index) => (
        <AttendanceCheck key={index} checkIndex={index} setChecked={() => {}} />
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

export default CheckInBottomSheet;

interface AttendanceCheckProps {
  setChecked: () => void;
  checkIndex: number;
}

const AttendanceCheck = ({ setChecked, checkIndex }: AttendanceCheckProps) => (
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
      onChange={() => {
        setChecked();
      }}
    />
    <div
      className={css({
        width: '6.2rem',
        height: '7.4rem',
        borderRadius: '1rem',
        background: 'gray.100',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.8rem',
      })}
    >
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
    </div>
  </label>
);
