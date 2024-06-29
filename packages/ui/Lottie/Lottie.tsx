import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import * as Styled from './Lottie.styled';

interface LottieProps {
  animationData: any;
  width?: number;
  height?: number;
  isAutoplay?: boolean;
}

const Lottie = ({ animationData, width, height, isAutoplay = true, ...restProps }: LottieProps) => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      lottie.loadAnimation({
        animationData,
        container: element.current,
        autoplay: isAutoplay,
      });
    }
  }, [animationData, isAutoplay]);

  return <Styled.Lottie width={width} height={height} ref={element} {...restProps} />;
};

export default Lottie;
