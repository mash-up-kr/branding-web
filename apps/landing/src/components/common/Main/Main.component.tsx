import { SnapParent } from '@/components/common';
import { IntroSection, IntroTypingSection, PlatformIntroduceSection } from '@/components/main';

const Main = () => (
  <main>
    <SnapParent>
      <IntroSection />
      <IntroTypingSection />
      <PlatformIntroduceSection />
    </SnapParent>
  </main>
);

export default Main;
