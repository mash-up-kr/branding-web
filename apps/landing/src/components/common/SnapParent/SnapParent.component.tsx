import { PropsWithChildren } from 'react';

import * as Styled from './SnapParent.styled';

const SnapParent = ({ children }: PropsWithChildren) => (
  <Styled.SnapParent>{children}</Styled.SnapParent>
);

export default SnapParent;
