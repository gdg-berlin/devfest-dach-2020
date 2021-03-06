import { configureStore } from '@reduxjs/toolkit';
import { dialogsReducer } from './dialogs/reducers';
import { feedbackReducer } from './feedback/reducers';
import { filtersReducer } from './filters/reducers';
import { galleryReducer } from './gallery/reducers';
import { partnersReducer } from './partners/reducers';
import { potentialPartnersReducer } from './potential-partners/reducers';
import { routingReducer } from './routing/reducers';
import { scheduleReducer } from './schedule/reducers';
import { sessionsReducer } from './sessions/reducers';
import { speakersReducer } from './speakers/reducers';
import { subscribeReducer } from './subscribe/reducers';
import { teamReducer } from './team/reducers';
import { ticketsReducer } from './tickets/reducers';
import { toastReducer } from './toast/reducers';
import { uiReducer } from './ui/reducers';
import { userReducer } from './user/reducers';
import { videosReducer } from './videos/reducers';

const rootReducer = {
  dialogs: dialogsReducer,
  feedback: feedbackReducer,
  filters: filtersReducer,
  gallery: galleryReducer,
  partners: partnersReducer,
  potentialPartners: potentialPartnersReducer,
  routing: routingReducer,
  schedule: scheduleReducer,
  sessions: sessionsReducer,
  speakers: speakersReducer,
  subscribed: subscribeReducer,
  team: teamReducer,
  tickets: ticketsReducer,
  toast: toastReducer,
  ui: uiReducer,
  user: userReducer,
  videos: videosReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
