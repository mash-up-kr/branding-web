import { PropsWithChildren } from 'react';
import * as Styled from './Layout.styled';

const Layout = ({ children }: PropsWithChildren) => <Styled.Layout>{children}</Styled.Layout>;

export default Layout;
