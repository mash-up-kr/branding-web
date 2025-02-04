import { Heading, Navigation, RecruitingBanner } from '@/components/common';

import * as Styled from './Header.styled';

const Header = () => (
  <Styled.Header>
    <Styled.HeaderInner>
      <Heading />
      <Navigation />
    </Styled.HeaderInner>

    <RecruitingBanner />
  </Styled.Header>
);

export default Header;
