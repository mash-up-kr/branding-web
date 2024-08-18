/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, PropsWithChildren } from 'react';
import { useEventListener } from 'usehooks-ts';

import { css } from '@/styled-system/css';

export interface BottomSheetProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  height?: number;
}

const BottomSheet = ({
  isOpen,
  onClose,
  children,
  height = 40,
  ...restProps
}: BottomSheetProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState<number>(0);
  const [startHeight, setStartHeight] = useState<number>(height);
  const [translateY, setTranslateY] = useState(100);
  const [isAnimating, setIsAnimating] = useState(false);

  const calculateNewTranslateY = (currentY: number) => {
    if (currentY <= startY) return startHeight;
    const dragDistance = currentY - startY;
    const dragDistanceRatio = (dragDistance / window.innerHeight) * 100;
    const newTranslateY = startHeight + dragDistanceRatio;
    return Math.min(100, newTranslateY);
  };

  const handleDragMove = (currentY: number) => {
    if (!isDragging || startY === null) return;
    const newTranslateY = calculateNewTranslateY(currentY);
    if (newTranslateY > 30) {
      animateClose();
    } else {
      setTranslateY(newTranslateY);
    }
  };

  const handleMouseMove = (e: MouseEvent) => handleDragMove(e.pageY);
  const handleTouchMove = (e: TouchEvent) => handleDragMove(e.touches[0].pageY);

  const handleEndDrag = () => {
    setIsDragging(false);
    adjustSheetPosition();
  };

  useEventListener('mousemove', handleMouseMove);
  useEventListener('mouseup', handleEndDrag);
  useEventListener('touchmove', handleTouchMove);
  useEventListener('touchend', handleEndDrag);

  useEffect(() => {
    if (isOpen) {
      setTranslateY(0);
      document.body.style.overflowY = 'hidden';
    } else {
      setTranslateY(100);
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const pageY =
      e.type === 'mousedown'
        ? (e as React.MouseEvent).pageY
        : (e as React.TouchEvent).touches[0].pageY;
    setStartY(pageY);
    setStartHeight(translateY);
  };

  const adjustSheetPosition = () => {
    if (!isAnimating) {
      setTranslateY(0);
    }
  };

  const animateClose = () => {
    setIsAnimating(true);
    setTranslateY(100);
    setTimeout(() => {
      setIsAnimating(false);
      onClose();
    }, 500);
  };

  const containerStyle = css({
    position: 'fixed',
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? 'auto' : 'none',
    top: 0,
    width: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    transition: '0.1s linear',
    zIndex: 2147483647,
    maxWidth: 768,
  });

  const backdropStyle = css({
    position: 'fixed',
    top: 0,
    width: '100%',
    left: 0,
    height: '100%',
    opacity: 0.5,
    background: '#000',
    zIndex: -1,
  });

  const sheetStyle = css({
    background: '#fff',
    width: '100%',
    minWidth: 320,
    minHeight: 287,
    padding: '24px 20px 24px 20px',
    borderRadius: '20px',
    position: 'relative',
    transition: isDragging ? 'none' : 'transform 0.5s ease',
    marginBottom: 36,
    maxWidth: 'calc(100% - 40px)',
  });

  const grabberStyle = css({
    display: 'flex',
    justifyContent: 'center',
  });

  const grabberButtonStyle = css({
    cursor: 'grab',
    userSelect: 'none',
    padding: '10px 0 11px 0',
    marginTop: '-25px',
  });

  const grabberLineStyle = css({
    height: '3px',
    borderRadius: '6px',
    backgroundColor: '#D9D9D9',
    width: '24px',
    display: 'block',
  });

  const contentStyle = css({
    overflowY: 'auto',
    height: '100%',
    scrollbarWidth: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  });

  return (
    <div className={containerStyle} {...restProps}>
      <div role="dialog" aria-hidden className={backdropStyle} onClick={onClose} />
      <div
        style={{
          transform: `translateY(${translateY}%)`,
          transition: isAnimating ? 'transform 0.5s ease' : undefined,
        }}
        className={sheetStyle}
      >
        <div className={grabberStyle}>
          <button
            type="button"
            aria-hidden
            className={grabberButtonStyle}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            <span className={grabberLineStyle} />
          </button>
        </div>
        <div className={contentStyle}>{children}</div>
      </div>
    </div>
  );
};

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
