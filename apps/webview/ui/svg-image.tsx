import { createSvgUrl } from 'constant';
import Image from 'next/image';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type SvgImageProps = Omit<ComponentPropsWithoutRef<typeof Image>, 'src' | 'alt'> & {
  basePath?: string;
  path: string;
  alt?: string;
};

const SvgImage = forwardRef<HTMLImageElement, SvgImageProps>(
  ({ basePath = 'mashong', path, alt = '', ...restProps }, ref) => (
    <Image ref={ref} src={createSvgUrl(basePath)(path)} alt={alt} unoptimized {...restProps} />
  ),
);

SvgImage.displayName = 'SvgImage';

export default SvgImage;
