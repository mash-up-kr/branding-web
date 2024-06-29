'use client';

import { useState } from 'react';

import { PopcornToast } from '@/app/_components/PopcornToast';
import SvgImage from '@/ui/svg-image';

import CheckInBottomSheet from './_components/CheckInBottomSheet';

const Webview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popcornValue, setPopcornValue] = useState(0);

  const onBottomSheetConfirm = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Webview</h1>
      <SvgImage path="default-lv1" width={182} height={140} />
      <button
        type="button"
        className="show-bottom"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Show Bottom Sheet
      </button>
      <button
        type="button"
        className="show-bottom"
        onClick={() => {
          setPopcornValue((prev) => prev + 1);
        }}
      >
        먹이 주기
      </button>
      <CheckInBottomSheet isOpen={isOpen} onClose={onBottomSheetConfirm} />
      <PopcornToast value={popcornValue} />
    </div>
  );
};

export default Webview;
