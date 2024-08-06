import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import * as Styled from './Lottie.styled';

interface LottieProps {
  animationData?: any;
  width?: number;
  height?: number;
  isAutoplay?: boolean;
  path?: string;
  className?: string;
}

const Lottie = ({
  animationData,
  width,
  height,
  isAutoplay = true,
  path,
  className,
  ...restProps
}: LottieProps) => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      lottie.loadAnimation({
        animationData,
        container: element.current,
        autoplay: isAutoplay,
        path,
      });
    }

    return () => {
      lottie.destroy();
    };
  }, [animationData, path, isAutoplay]);

  return (
    <Styled.Lottie
      width={width}
      height={height}
      ref={element}
      className={className}
      {...restProps}
    />
  );
};

export default Lottie;
