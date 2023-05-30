import * as Styled from './Navigation.styled';

const NAVIGATION_ITEMS = [
  { name: 'about', id: '/#about' },
  { name: 'project', id: '/#project' },
  { name: 'review', id: '/#review' },
  { name: 'brand story', id: '/#brandStory' },
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
