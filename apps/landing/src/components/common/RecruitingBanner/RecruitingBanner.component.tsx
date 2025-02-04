import * as Styled from './RecruitingBanner.styled';

const RecruitingBanner = () => (
  <a href="https://recruit.mash-up.kr" target="_blank" rel="noopener noreferrer">
    <Styled.RecruitingBanner>
      <Styled.RecruitingBannerInner>
        <Styled.RecruitBannerTextWrapperContainer>
          <Styled.RecruitBannerTextWrapper>
            <Styled.MashUpLogo />
            <Styled.RecruitingBannerEnText>Mash-Up</Styled.RecruitingBannerEnText>
            <Styled.RecruitingBannerKrText>15기</Styled.RecruitingBannerKrText>
          </Styled.RecruitBannerTextWrapper>
          <Styled.RecruitBannerTextWrapper>
            <Styled.RecruitingBannerKrText>리크루팅</Styled.RecruitingBannerKrText>
            <Styled.RecruitingBannerEnText>OPEN</Styled.RecruitingBannerEnText>
          </Styled.RecruitBannerTextWrapper>
        </Styled.RecruitBannerTextWrapperContainer>

        <Styled.MoveToRecruitingPageButton>
          지원하러 가기
          <Styled.RightArrow />
        </Styled.MoveToRecruitingPageButton>

        <Styled.RecruitingBannerLeftVector />
        <Styled.RecruitingBannerRightVector />
      </Styled.RecruitingBannerInner>
    </Styled.RecruitingBanner>
  </a>
);

export default RecruitingBanner;
