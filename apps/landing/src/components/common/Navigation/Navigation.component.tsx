import { SECTION_IDS } from '@/constants';

import * as Styled from './Navigation.styled';

const NAVIGATION_ITEMS = [
  { name: 'about', id: SECTION_IDS.ABOUT },
  { name: 'project', id: SECTION_IDS.PROJECT },
  { name: 'review', id: SECTION_IDS.REVIEW },
  { name: 'brand story', id: SECTION_IDS.BRAND_STORY },
];

const Navigation = () => (
  <Styled.Navigation>
    <Styled.NavigationList>
      {NAVIGATION_ITEMS.map(({ name, id }) => (
        <li key={id}>
          <Styled.LinkToById href={id}>{name}</Styled.LinkToById>
        </li>
      ))}
    </Styled.NavigationList>
    <Styled.JoinUsAnchor href="https://recruit.mash-up.kr">Join Us!</Styled.JoinUsAnchor>
  </Styled.Navigation>
);

export default Navigation;
