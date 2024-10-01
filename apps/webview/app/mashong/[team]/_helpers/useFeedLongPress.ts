import { useLongPress } from '@uidotdev/usehooks';
import { useRef, useState, useEffect } from 'react';

export const useFeedLongPress = ({
  onStart,
  onFinish,
}: {
  onStart: () => void;
  onFinish: () => void;
}) => {
  const intervalRef = useRef<NodeJS.Timeout>();
  const [longPressActive, setLongPressActive] = useState(false);

  const startLongPress = () => {
    setLongPressActive(true);
    intervalRef.current = setInterval(() => {
      onStart();
    }, 100);
  };

  const finishLongPress = async () => {
    clearInterval(intervalRef.current);
    await onFinish();
    requestAnimationFrame(() => {
      resetLongPress();
    });
  };

  const cancelLongPress = () => {
    clearInterval(intervalRef.current);
    resetLongPress();
  };

  const resetLongPress = () => {
    setLongPressActive(false);
  };

  const longPressAttrs = useLongPress(startLongPress, {
    onFinish: finishLongPress,
    onCancel: cancelLongPress,
  });

  useEffect(
    () => () => {
      clearInterval(intervalRef.current);
    },
    [],
  );

  return {
    longPressActive,
    longPressAttrs,
  };
};

export default useFeedLongPress;
