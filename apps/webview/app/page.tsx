'use client';

import { useState } from 'react';

import SvgImage from '@/ui/svg-image';

import CheckInBottomSheet from './_components/CheckInBottomSheet';

const Webview = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <CheckInBottomSheet isOpen={isOpen} onClose={onBottomSheetConfirm} />
    </div>
  );
};

export default Webview;
