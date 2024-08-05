import { useInView } from 'react-intersection-observer';

import { SnapParent } from '@/components/common';
import {
  ActivitySection,
  IntroSection,
  IntroTypingSection,
  PlatformIntroduceSection,
} from '@/components/main';

const Main = () => {
  const { ref, inView } = useInView();

  return (
    <main>
      <SnapParent disabled={inView}>
        <IntroSection />
        <IntroTypingSection />
        <ActivitySection ref={ref} />
        <PlatformIntroduceSection />
        <PlatformIntroduceSection />
      </SnapParent>
    </main>
  );
};

export default Main;
