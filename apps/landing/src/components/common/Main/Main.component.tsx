import {
  ActivitySection,
  CurrentInformationSection,
  IntroSection,
  IntroTypingSection,
  PlatformIntroduceSection,
  ProjectSection,
} from '@/components/main';

const Main = () => (
  <main>
    <IntroSection />
    <IntroTypingSection />
    <ActivitySection />
    <PlatformIntroduceSection />
    <CurrentInformationSection />
    <ProjectSection />
  </main>
);

export default Main;
