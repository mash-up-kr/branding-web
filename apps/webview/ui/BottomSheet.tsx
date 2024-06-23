/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, PropsWithChildren } from 'react';

import { css } from '@/styled-system/css';

export interface BottomSheetProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  height?: number;
}

const BottomSheet = ({ isOpen, onClose, children, height, ...restProps }: BottomSheetProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState<number | null>(null);
  const [startHeight, setStartHeight] = useState<number>(40);
  const [sheetHeight, setSheetHeight] = useState<number>(40);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || startY === null) return;
      const delta = startY - e.pageY;
      const newHeight = startHeight + (delta / window.innerHeight) * 100;
      setSheetHeight(newHeight);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || startY === null) return;
      const delta = startY - e.touches[0].pageY;
      const newHeight = startHeight + (delta / window.innerHeight) * 100;
      setSheetHeight(newHeight);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      adjustSheetHeight();
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      adjustSheetHeight();
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, startY, startHeight]);

  useEffect(() => {
    if (isOpen) {
      setSheetHeight(40);
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if (e.type === 'mousedown') {
      setStartY((e as React.MouseEvent).pageY);
    } else if (e.type === 'touchstart') {
      setStartY((e as React.TouchEvent).touches[0].pageY);
    }
    setStartHeight(sheetHeight);
  };

  const adjustSheetHeight = () => {
    if (sheetHeight < 70) {
      onClose();
    } else if (sheetHeight > 70) {
      setSheetHeight(100);
    } else {
      setSheetHeight(50);
    }
  };

  return (
    <div
      className={css({
        position: 'fixed',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        top: 0,
        width: 'calc(100% - 40px)',
        left: '20px',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        transition: '0.1s linear',
      })}
      {...restProps}
    >
      <div
        role="dialog"
        aria-hidden
        className={css({
          position: 'fixed',
          top: 0,
          width: '100%',
          left: 0,
          height: '100%',
          opacity: 0.2,
          background: '#111',
          zIndex: -1,
        })}
        onClick={onClose}
      />
      <div
        style={{
          height: `${sheetHeight}vh`,
        }}
        className={css({
          background: '#fff',
          width: '100%',
          minWidth: 320,
          maxHeight: height,
          padding: '24px 20px 24px 20px',
          borderRadius: sheetHeight === 100 ? '0' : '20px',
          position: 'relative',
          transform: isOpen ? 'translateY(0%)' : 'translateY(100%)',
          transition: isDragging ? 'none' : '0.5s ease',
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'center',
          })}
        >
          <button
            type="button"
            aria-hidden
            className={css({
              cursor: 'grab',
              userSelect: 'none',
              padding: '10px 0 11px 0',
              marginTop: '-25px',
            })}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            <span
              className={css({
                height: '3px',
                borderRadius: '6px',
                backgroundColor: '#D9D9D9',
                width: '24px',
                display: 'block',
              })}
            />
          </button>
        </div>
        <div
          className={css({
            overflowY: 'auto',
            height: '100%',
            scrollbarWidth: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
