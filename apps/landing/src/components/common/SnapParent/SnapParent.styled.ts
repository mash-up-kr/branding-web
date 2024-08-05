import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface SnapParentProps {
  axis?: 'x' | 'y';
  strictness?: 'proximity' | 'mandatory';
  disabled?: boolean;
}

export const SnapParent = styled.div<SnapParentProps>`
  ${({ axis = 'y', strictness = 'mandatory', disabled = false }) => css`
    scroll-snap-type: ${disabled ? 'none' : `${axis} ${strictness}`};
    height: 100vh;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `}
`;
