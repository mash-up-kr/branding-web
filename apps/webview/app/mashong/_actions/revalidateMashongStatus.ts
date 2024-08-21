'use server';

import { revalidateTag } from 'next/cache';

export const revalidateMashongStatus = async () => {
  try {
    revalidateTag('mashong-status');
  } catch (error) {
    console.error('revalidateMashongStatus', error);
  }
};
