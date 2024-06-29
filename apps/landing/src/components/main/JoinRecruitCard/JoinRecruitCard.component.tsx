import hiLottieData from '@/assets/lottie/common/hi.json';

import * as Styled from './JoinRecruitCard.styled';

const JoinRecruitCard = () => (
  <Styled.JoinRecruitCard>
    <Styled.GoToRecruitLink
      href="https://recruit.mash-up.kr/"
      target="_blank"
      rel="noreferrer noopener"
    >
      {'지금 바로\n매쉬업 지원하러\n가기'}
      <Styled.RightArrowIcon
        src="https://static.mash-up.kr/images/svg/landing/platform-introduce/right-arrow.svg"
        alt=""
      />
    </Styled.GoToRecruitLink>

    <Styled.HiLottie animationData={hiLottieData} />
    <Styled.MashUpLogo
      src="https://static.mash-up.kr/images/svg/landing/common/mash-up-logo-white.svg"
      alt=""
    />
  </Styled.JoinRecruitCard>
);

export default JoinRecruitCard;
