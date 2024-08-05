import { forwardRef } from 'react';

import * as Styled from './ActivitySection.styled';

const ActivitySection = forwardRef<HTMLElement>((_, ref) => (
  <Styled.ActivitySection ref={ref}>aa</Styled.ActivitySection>
));

ActivitySection.displayName = 'ActivitySection';

export default ActivitySection;
