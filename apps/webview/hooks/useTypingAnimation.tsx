import { useEffect, useState } from 'react';
import Typed from 'typed.js';

export const useTypingAnimation = () => {
  const [typingElement, setTypingElement] = useState<Element | null>(null);

  useEffect(() => {
    if (!typingElement) return undefined;

    const typed = new Typed(typingElement, {
      strings: ['<span>어랏...!</span><br/><span>심상치 않은 성장의 기운이...?!</span>'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, [typingElement]);

  return setTypingElement;
};
