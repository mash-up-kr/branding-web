'use client';

import { PLATFORM_NAME_MAP } from '@/../../packages/constant';
import { useState } from 'react';

import { PopcornToast } from '@/app/_components/PopcornToast';
import SvgImage from '@/ui/svg-image';

import CheckInBottomSheet from './_components/CheckInBottomSheet';
import { MashongRoom } from './_components/MashongRoom';

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
      <MashongRoom keyValue={popcornValue} teamName={PLATFORM_NAME_MAP.WEB} mashongLevel={10} />
      <CheckInBottomSheet isOpen={isOpen} onClose={onBottomSheetConfirm} />
      <PopcornToast value={popcornValue} />
    </div>
  );
};

export default Webview;
