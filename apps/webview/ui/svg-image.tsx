import { createSvgUrl } from 'constant';
import Image from 'next/image';
import React, { forwardRef } from 'react';

type SvgImageProps = Omit<React.ComponentPropsWithoutRef<typeof Image>, 'src' | 'alt'> & {
  basePath?: string;
  path: string;
};

const SvgImage = forwardRef<HTMLImageElement, SvgImageProps>(
  ({ basePath = 'mashong', path, ...restProps }, ref) => (
    <Image ref={ref} src={createSvgUrl(basePath)(path)} alt="" unoptimized {...restProps} />
  ),
);

SvgImage.displayName = 'SvgImage';

export default SvgImage;
