import { ReactNode } from 'react';

import * as Styled from './SnapParent.styled';

interface SnapParentProps extends Styled.SnapParentProps {
  children: ReactNode;
}

const SnapParent = ({ axis, strictness, children }: SnapParentProps) => (
  <Styled.SnapParent axis={axis} strictness={strictness}>
    {children}
  </Styled.SnapParent>
);

export default SnapParent;
