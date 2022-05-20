import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp, getApps } from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { EmailAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const apps = getApps();
const app = apps.length === 0 ? initializeApp(firebaseConfig) : apps[0];

export const db = getFirestore(app);

const actionCodeSettings = {
  url: 'http://localhost:3000/todos',
  handleCodeInApp: true,
};

const emailLinkSignIn = () => {
  return actionCodeSettings;
};

export const uiConfig = {
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      signInMethod: EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      forceSameDevice: false,
      emailLinkSignIn
    }
  ],
  signInSuccessUrl: 'http://localhost:3000/todos',
};

export const auth = getAuth();

export const ui = new firebaseui.auth.AuthUI(auth);
