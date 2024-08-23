import { useRef, useState } from 'react';
import { useDebounceCallback, useTimeout } from 'usehooks-ts';

export const useTimedToggle = ({ debounceDelay = 200, activeDuration = 2000 }) => {
  const [isToggled, setIsToggled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedTriggerToggle = useDebounceCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    triggerToggle();
  }, debounceDelay);

  const triggerToggle = () => {
    setIsToggled(true);
    timeoutRef.current = setTimeout(() => setIsToggled(false), activeDuration);
  };

  useTimeout(() => {
    triggerToggle();
  }, 200);

  return { isToggled, triggerToggle: debouncedTriggerToggle };
};
