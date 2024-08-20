'use client';

import { useRouter } from 'next/navigation';
import { PlatformNameKey } from 'types';

import { styled } from '@/styled-system/jsx';

export const GoDiaryButton = ({
  currentLevel,
  platformName,
}: {
  currentLevel: number;
  platformName: PlatformNameKey;
}) => {
  const router = useRouter();

  const onClick = () => {
    if (currentLevel) {
      router.push(
        `/mashong/growth-diary?platform=${platformName.toLowerCase()}&currentLevel=${currentLevel}`,
      );
    }
  };

  return (
    <styled.button
      type="button"
      cursor="pointer"
      width={40}
      height={40}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={onClick}
    >
      {/** SVG inlining for priority */}
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
          fill="#5421E6"
          d="M20.25 2.25H4.5v6c0 8.284 6.716 15 15 15h.75a1.5 1.5 0 0 0 1.5-1.5v-18a1.5 1.5 0 0 0-1.5-1.5Z"
        />
        <path
          fill="#D6DBE8"
          d="M21.75 21.001V4.295c0-.342-.156-.666-.423-.88l-1.016-.811a1.5 1.5 0 0 0-1-.327L3 2.973v16.903a2.25 2.25 0 0 0 2.25 2.25h15.375c.621 0 1.125-.503 1.125-1.125Z"
        />
        <path
          fill="#6A36FF"
          d="M20.25 18.378a1.5 1.5 0 0 0 1.5-1.5V2.25a1.5 1.5 0 0 0-1.5-1.5H4.5A1.5 1.5 0 0 0 3 2.25v18.003c0-.498.517-1.875 1.153-1.875H20.25Z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M9.68 8.941a4.858 4.858 0 0 1-1.455-1.393c-.545-.834-.601-1.768-.13-2.078.473-.31 1.304.104 1.85.95l.103.171a.539.539 0 0 1 .315-.225.728.728 0 0 1 .516.162.72.72 0 0 1 .255.481c.06.3.102.604.13.91a6.242 6.242 0 0 1 2.223 0 8 8 0 0 1 .129-.91.708.708 0 0 1 .255-.478c.144-.12.33-.18.516-.165a.52.52 0 0 1 .315.225l.104-.171c.548-.833 1.373-1.267 1.848-.95.476.316.413 1.244-.132 2.078A4.928 4.928 0 0 1 15.13 8.91c.057.07.11.142.164.215 1.152 1.612 2.11 3.437-.22 3.437H9.68c-1.993-.18-1.13-1.99-.044-3.573l.044-.048Z"
          clipRule="evenodd"
        />
        <path
          fill="#5421E6"
          fillRule="evenodd"
          d="M5.25 17.345c.24-.062.491-.095.75-.095h15.7a1.501 1.501 0 0 1-1.366 1.125H6c-.032 0-.065 0-.096.002H5.9a1.872 1.872 0 0 0-1.776 1.873 1.867 1.867 0 0 0 .428 1.193c.344.416.865.682 1.447.682h15.703a1.5 1.5 0 0 1-1.453 1.125H6a3.005 3.005 0 0 1-1.5-.401A2.999 2.999 0 0 1 3 20.25v-.033a2.999 2.999 0 0 1 2.25-2.872Z"
          clipRule="evenodd"
        />
      </svg>
    </styled.button>
  );
};
