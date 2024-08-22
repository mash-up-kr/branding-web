import { useEffect, useState } from 'react';

interface RandomArrayElementOptions {
  isActive: boolean;
  array: any[];
}

export const useRandomArrayElement = ({ isActive, array }: RandomArrayElementOptions) => {
  const [randomIndex, setRandomIndex] = useState(() => getRandomIndex(array.length));

  useEffect(() => {
    if (isActive && array.length > 0) {
      setRandomIndex(getRandomIndex(array.length));
    }
  }, [isActive, array]);

  return array.length > 0 ? array[randomIndex] : undefined;
};

const getRandomIndex = (max: number) => Math.floor(Math.random() * max);
