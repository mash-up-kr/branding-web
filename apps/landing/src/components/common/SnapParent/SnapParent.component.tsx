import { ReactNode } from 'react';

import * as Styled from './SnapParent.styled';

interface SnapParentProps extends Styled.SnapParentProps {
  children: ReactNode;
}

const SnapParent = ({ axis, strictness, disabled, children }: SnapParentProps) => (
  <Styled.SnapParent axis={axis} strictness={strictness} disabled={disabled}>
    {children}
  </Styled.SnapParent>
);

export default SnapParent;
