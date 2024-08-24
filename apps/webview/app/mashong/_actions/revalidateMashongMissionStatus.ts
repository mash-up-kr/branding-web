'use server';

import { revalidateTag } from 'next/cache';

export const revalidateMashongMissionStatus = async () => {
  try {
    revalidateTag('mashong-mission-status');
  } catch (error) {
    console.error('revalidateMashongMissionStatus', error);
  }
};
