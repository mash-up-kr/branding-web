import { PropsWithChildren } from 'react';
import * as Styled from './DefaultLayout.styled';

const DefaultLayout = ({ children }: PropsWithChildren) => (
  <Styled.Layout>{children}</Styled.Layout>
);

export default DefaultLayout;
