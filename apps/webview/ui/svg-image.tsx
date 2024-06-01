import { createSvgUrl } from 'constant';
import Image from 'next/image';
import React, { forwardRef } from 'react';

type SvgImageProps = Omit<React.ComponentPropsWithoutRef<typeof Image>, 'src' | 'alt'> & {
  pathname: string;
};

const SvgImage = forwardRef<HTMLImageElement, SvgImageProps>(({ pathname, ...restProps }, ref) => (
  <Image ref={ref} src={createSvgUrl(pathname)} alt="" unoptimized {...restProps} />
));

SvgImage.displayName = 'SvgImage';

export default SvgImage;
