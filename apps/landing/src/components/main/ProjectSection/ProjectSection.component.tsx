import { createPngUrl, createSvgUrl } from 'constant';
import { useRef, useState } from 'react';

import { TViewPortSize } from '@/constants';
import { useDetectViewport } from '@/hooks';

import * as Styled from './ProjectSection.styled';

const PROJECTS = [
  {
    generation: '14th',
    title: 'Linkit',
    subTitle: '흩어진 링크를 한 곳에서 관리해 줄\nAI 기반 링크 보관 서비스',
    backgroundImageUrl: `${createPngUrl('landing/project')('linkit-3x-min')}`,
  },
  {
    generation: '14th',
    title: 'Korrk',
    subTitle: '우리가 만드는 미슐랭 가이드,\n꼬르륵',
    backgroundImageUrl: `${createPngUrl('landing/project')('korrk-3x-min')}`,
  },
  {
    generation: '14th',
    title: 'PIC',
    subTitle: '우리만의 기억, 네컷에 담아요',
    backgroundImageUrl: `${createPngUrl('landing/project')('pic-3x-min')}`,
  },
  {
    generation: '14th',
    title: 'Maship',
    subTitle: 'Mash-Up 구성원간 투표서비스',
    backgroundImageUrl: `${createPngUrl('landing/project')('maship-3x-min')}`,
  },
  {
    generation: '13th',
    title: 'HUMAN\nDEVELOPMENT\nREPORTS',
    subTitle: 'Education app design',
    backgroundImageUrl: `${createPngUrl('landing/project')('landing-project-dummy-1-3x-min')}`,
  },
  {
    generation: '13th',
    title: 'HUMAN\nDEVELOPMENT\nREPORTS',
    subTitle: 'Education app design',
    backgroundImageUrl: `${createPngUrl('landing/project')('landing-project-dummy-1-3x-min')}`,
  },
  {
    generation: '13th',
    title: 'HUMAN\nDEVELOPMENT\nREPORTS',
    subTitle: 'Education app design',
    backgroundImageUrl: `${createPngUrl('landing/project')('landing-project-dummy-1-3x-min')}`,
  },
  {
    generation: '13th',
    title: 'HUMAN\nDEVELOPMENT\nREPORTS',
    subTitle: 'Education app design',
    backgroundImageUrl: `${createPngUrl('landing/project')('landing-project-dummy-1-3x-min')}`,
  },
  {
    generation: '13th',
    title: 'HUMAN\nDEVELOPMENT\nREPORTS',
    subTitle: 'Education app design',
    backgroundImageUrl: `${createPngUrl('landing/project')('landing-project-dummy-1-3x-min')}`,
  },
  {
    generation: '13th',
    title: 'HUMAN\nDEVELOPMENT\nREPORTS',
    subTitle: 'Education app design',
    backgroundImageUrl: `${createPngUrl('landing/project')('landing-project-dummy-1-3x-min')}`,
  },
  {
    generation: '13th',
    title: 'HUMAN\nDEVELOPMENT\nREPORTS',
    subTitle: 'Education app design',
    backgroundImageUrl: `${createPngUrl('landing/project')('landing-project-dummy-1-3x-min')}`,
  },
];

const NUMBER_OF_PROJECT_PER_PAGE: Record<TViewPortSize, number> = {
  DESKTOP: 3,
  NOTEBOOK: 3,
  TABLET_L: 2,
  TABLET_S: 2,
  MOBILE: 1,
};

const ProjectSection = () => {
  const [currentSlidePage, setCurrentSlidePage] = useState(0);
  const { viewportSize } = useDetectViewport();

  const numberOfProjectPerPage = NUMBER_OF_PROJECT_PER_PAGE[viewportSize];

  const totalPageCount = Math.ceil(PROJECTS.length / numberOfProjectPerPage);
  const slideLayoutRef = useRef<HTMLDivElement>(null);
  const slideLayoutScrollWidth = slideLayoutRef.current?.scrollWidth ?? 0;

  const onePageScrollWidth = -(slideLayoutScrollWidth / totalPageCount);

  const handleIncreaseSlidePage = () => {
    if (currentSlidePage < Math.ceil(PROJECTS.length / numberOfProjectPerPage) - 1) {
      setCurrentSlidePage((prevSlidePage) => prevSlidePage + 1);
    }
  };

  const handleDecreaseSlidePage = () => {
    if (currentSlidePage > 0) {
      setCurrentSlidePage((prevSlidePage) => prevSlidePage - 1);
    }
  };

  return (
    <Styled.ProjectSection>
      <Styled.HeaderLayout>
        <Styled.Heading>
          <Styled.Title>
            <Styled.GradientText>MASH-UP</Styled.GradientText>
            <span>PROJECT</span>
          </Styled.Title>

          <Styled.Description>
            {
              '삶을 더 좋은 방향으로 변화시킬 아이디어들을 서비스로 구현해\n사용자들의 삶에 전달해요.'
            }
          </Styled.Description>
        </Styled.Heading>

        <Styled.SlideController>
          <Styled.SlideControlButton
            onClick={handleDecreaseSlidePage}
            isDisabled={currentSlidePage === 0}
          >
            <Styled.ButtonImageLeft
              src={`${createSvgUrl('landing/project')('slider-control-arrow')}`}
              alt=""
            />
          </Styled.SlideControlButton>

          <Styled.SlideControlButton
            onClick={handleIncreaseSlidePage}
            isDisabled={
              currentSlidePage === Math.ceil(PROJECTS.length / numberOfProjectPerPage) - 1
            }
          >
            <Styled.ButtonImageRight
              src={`${createSvgUrl('landing/project')('slider-control-arrow')}`}
              alt=""
            />
          </Styled.SlideControlButton>
        </Styled.SlideController>
      </Styled.HeaderLayout>

      <Styled.SlideLayout
        transform={`translate3d(${onePageScrollWidth * currentSlidePage}px, 0, 0)`}
        ref={slideLayoutRef}
      >
        {PROJECTS.map(({ generation, title, subTitle, backgroundImageUrl }, index) => (
          <Styled.ProjectCard key={index}>
            <Styled.ProjectInfoWrapper backgroundImageUrl={backgroundImageUrl} />
            <Styled.ProjectInfo>
              <Styled.Generation>{generation}</Styled.Generation>
              <Styled.ProjectTitleArea>
                <Styled.ProjectTitle>{title}</Styled.ProjectTitle>
                <Styled.SubTitle>{subTitle}</Styled.SubTitle>
              </Styled.ProjectTitleArea>
            </Styled.ProjectInfo>
          </Styled.ProjectCard>
        ))}
      </Styled.SlideLayout>
    </Styled.ProjectSection>
  );
};

export default ProjectSection;
