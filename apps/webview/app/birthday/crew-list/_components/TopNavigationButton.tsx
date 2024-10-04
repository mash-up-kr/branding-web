'use client';

import { useRouter } from 'next/navigation';

import { useWebviewHandler } from '@/hooks/useWebviewHandler';
import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

interface TopNavigationButtonProps {
  birthDate?: string | null;
}

const TopNavigationButton = ({ birthDate }: TopNavigationButtonProps) => {
  const webviewHandler = useWebviewHandler();
  const router = useRouter();

  const isDateBeforeCurrentMonthDay = (dateString?: string | null) => {
    if (!dateString) {
      return false;
    }
    const inputDate = new Date(dateString);
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();
    const inputMonth = inputDate.getMonth();
    const inputDateDay = inputDate.getDate();

    if (inputMonth < currentMonth || (inputMonth === currentMonth && inputDateDay < currentDate)) {
      return true;
    }

    return false;
  };

  return (
    <styled.div
      position="sticky"
      top="env(safe-area-inset-top)"
      bgColor="gray.50"
      display="flex"
      alignItems="center"
      height="56px"
      minW="100%"
      justifyContent="space-between"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        onClick={() => {
          webviewHandler.step('back');
        }}
      >
        <path
          d="M23 13L16 20L23 27"
          stroke="#383E4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {isDateBeforeCurrentMonthDay(birthDate) && (
        <styled.button
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="40px"
          width="147px"
          color="#4D535E"
          fontWeight={500}
          fontSize="14px"
          mr="8px"
          onClick={() => {
            router.push('/birthday/event');
          }}
          gap="4px"
        >
          <SvgImage basePath="birthday" path="common/card" width={16} height={16} />
          받은 카드 모아보기
        </styled.button>
      )}
    </styled.div>
  );
};

export default TopNavigationButton;
