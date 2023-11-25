import { SnapParent } from '@/components/common';
import { IntroSection, IntroTypingSection, ParallaxIntroduceSection } from '@/components/main';

const Main = () => (
  <main>
    <SnapParent>
      <IntroSection />
      <IntroTypingSection />
      <ParallaxIntroduceSection />
    </SnapParent>
  </main>
);

export default Main;
