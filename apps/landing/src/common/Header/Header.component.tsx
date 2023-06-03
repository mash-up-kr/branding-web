import * as Styled from './Header.styled';
import { Heading, Navigation } from '@/common';

const Header = () => (
  <Styled.Header>
    <Styled.HeaderInner>
      <Heading />
      <Navigation />
    </Styled.HeaderInner>
  </Styled.Header>
);

export default Header;
