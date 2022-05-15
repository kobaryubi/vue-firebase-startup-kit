import { getAuth } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};


if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();

export const ui = new firebaseui.auth.AuthUI(auth);
