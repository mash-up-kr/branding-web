import { HTMLAttributes } from 'react';
import MashUpLogoSvg from '../assets/svg/mash-up-logo.svg';

interface MashUpLogoProps extends HTMLAttributes<SVGSVGElement> {
  size?: number;
}

const MashUpLogo = ({ size = 44, ...restProps }: MashUpLogoProps) => (
  <MashUpLogoSvg width={size} height={size} {...restProps} />
);

export default MashUpLogo;
