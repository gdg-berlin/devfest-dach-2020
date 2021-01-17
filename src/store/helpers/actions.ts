import { TempAny } from '../../temp-any';
import { WIPE_PREVIOUS_FEEDBACK } from '../feedback/types';
import { store } from '../';
import { SIGN_IN } from '../user/types';
import { Providers } from './types';

export const storeUser = (user?: TempAny) => {
  let userToStore: TempAny = { signedIn: false };

  if (user) {
    const { uid, displayName, photoURL, refreshToken, actualProvider, pendingCredential } = user;

    const email = user.email || (user.providerData && user.providerData[0].email);
    const initialProviderId =
      (user.providerData && user.providerData[0].providerId) || user.initialProviderId;
    const signedIn = (user.uid && true) || user.signedIn;

    userToStore = {
      signedIn,
      uid,
      email,
      displayName,
      photoURL,
      refreshToken,
      initialProviderId,
      actualProvider,
      pendingCredential,
    };
  }

  store.dispatch({
    type: SIGN_IN,
    user: userToStore,
  });

  if (!userToStore.signedIn) store.dispatch({ type: WIPE_PREVIOUS_FEEDBACK });
};

export const getProviderCompanyName = (provider: Providers) => {
  switch (provider) {
    case 'https://accounts.google.com':
    case 'google.com': {
      return 'Google';
    }
    case 'https://www.facebook.com':
    case 'facebook.com': {
      return 'Facebook';
    }
    case 'https://twitter.com':
    case 'twitter.com':
      return 'Twitter';
  }
};
