import * as admin from 'firebase-admin';
import { scheduleWrite, sessionsWrite, speakersWrite } from './generate-sessions-speakers-schedule';
import { optimizeImages } from './optimize-images';
import { prerender } from './prerender';

// TODO: Update `tsconfig.json`
// - "noImplicitReturns": true,
// - "strict": true,

admin.initializeApp();

export {
  optimizeImages,
  prerender,
  scheduleWrite,
  sessionsWrite,
  speakersWrite,
};
