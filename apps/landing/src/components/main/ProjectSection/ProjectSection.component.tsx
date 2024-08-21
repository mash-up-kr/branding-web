import { createPngUrl, createSvgUrl } from 'constant';

import * as Styled from './ProjectSection.styled';

const PROJECTS = [
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

const ProjectSection = () => (
  <Styled.ProjectSection>
    <Styled.HeaderLayout>
      <Styled.Heading>
        <Styled.Title>
          <Styled.GradientText>MASH-UP</Styled.GradientText>
          <span>PROJECT</span>
        </Styled.Title>

        <Styled.Description>
          {
            '삶을 더 좋은 방향으로 변화시킬 아이디어들을 앱 서비스로 구현해\n사용자들의 삶에 전달해요.'
          }
        </Styled.Description>
      </Styled.Heading>

      <Styled.SlideController>
        <Styled.SlideControlButton>
          <Styled.ButtonImageLeft
            src={`${createSvgUrl('landing/project')('slider-control-arrow')}`}
            alt=""
          />
        </Styled.SlideControlButton>

        <Styled.SlideControlButton>
          <Styled.ButtonImageRight
            src={`${createSvgUrl('landing/project')('slider-control-arrow')}`}
            alt=""
          />
        </Styled.SlideControlButton>
      </Styled.SlideController>
    </Styled.HeaderLayout>

    <Styled.SlideLayout>
      {PROJECTS.map(({ generation, title, subTitle, backgroundImageUrl }, index) => (
        <Styled.ProjectCard backgroundImageUrl={backgroundImageUrl} key={index}>
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

export default ProjectSection;
