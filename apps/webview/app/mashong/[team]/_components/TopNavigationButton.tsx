import { styled } from '@/styled-system/jsx';

export const TopNavigationButton = () => (
  <styled.button
    type="button"
    cursor="pointer"
    width={40}
    height={40}
    display="flex"
    justifyContent="flex-start"
    pl={4}
    alignItems="center"
  >
    {/** SVG inlining for priority */}
    <svg xmlns="http://www.w3.org/2000/svg" width={9} height={16} fill="none">
      <path
        stroke="#383E4C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 1 1 8l7 7"
      />
    </svg>
  </styled.button>
);
