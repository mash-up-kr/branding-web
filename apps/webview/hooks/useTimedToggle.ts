import { useState } from 'react';
import { useDebounceCallback, useTimeout } from 'usehooks-ts';

export const useTimedToggle = ({ debounceDelay = 200, activeDuration = 2000 }) => {
  const [isToggled, setIsToggled] = useState(false);

  const debouncedSetIsToggled = useDebounceCallback((_isToggled) => {
    setIsToggled(_isToggled);
  }, debounceDelay);

  const triggerToggle = () => {
    debouncedSetIsToggled(true);
    setTimeout(() => setIsToggled(false), activeDuration);
  };

  useTimeout(() => {
    triggerToggle();
  }, debounceDelay);

  return { isToggled, triggerToggle };
};
