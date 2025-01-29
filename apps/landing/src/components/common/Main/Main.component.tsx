import {
  ActivitySection,
  CurrentInformationSection,
  IntroSection,
  IntroTypingSection,
  MashongSection,
  PlatformIntroduceSection,
} from '@/components/main';

const Main = () => (
  <main>
    <IntroSection />
    <IntroTypingSection />
    <ActivitySection />
    <PlatformIntroduceSection />
    <CurrentInformationSection />
    {/* <ProjectSection /> */}
    <MashongSection />
  </main>
);

export default Main;
