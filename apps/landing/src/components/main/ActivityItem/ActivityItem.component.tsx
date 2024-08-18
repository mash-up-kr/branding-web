import * as Styled from './ActivityItem.styled';

interface ActivityItemProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const ActivityItem = ({ title, description, thumbnailUrl, position = {} }: ActivityItemProps) => (
  <Styled.ActivityItem position={position}>
    <Styled.ActivityTextWrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.ActivityTextWrapper>
    <Styled.Thumbnail src={thumbnailUrl} alt="" />
  </Styled.ActivityItem>
);

export default ActivityItem;
