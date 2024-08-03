import { useEffect, useState } from 'react';
import Typed, { TypedOptions } from 'typed.js';

export const useTypingAnimation = (options: TypedOptions) => {
  const [typingElement, setTypingElement] = useState<Element | null>(null);

  useEffect(() => {
    if (!typingElement) return undefined;

    const typed = new Typed(typingElement, options);

    return () => {
      typed.destroy();
    };
  }, [typingElement, options]);

  return setTypingElement;
};
