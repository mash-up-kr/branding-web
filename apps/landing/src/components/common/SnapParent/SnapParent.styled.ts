import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface SnapParentProps {
  axis?: 'x' | 'y';
  strictness?: 'proximity' | 'mandatory';
}

export const SnapParent = styled.div<SnapParentProps>`
  ${({ axis = 'y', strictness = 'mandatory' }) => css`
    scroll-snap-type: ${axis} ${strictness};
    height: 100vh;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `}
`;
