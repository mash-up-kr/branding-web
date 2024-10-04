import Cookies from 'js-cookie';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const handleLevelUp = (router: AppRouterInstance) => (nextLevel: number) => {
  router.push(`/mashong/evolution/${nextLevel}`);
};

export const handleNoPopcorn = (router: AppRouterInstance) => async () => {
  router.push('/mashong/mission-board');
  Cookies.set('popcornAlertSeen', '1');
};
