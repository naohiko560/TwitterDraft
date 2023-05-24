import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.TWITTERDRAFT_FIREBASE_apiKey,
  authDomain: TWITTERDRAFT_FIREBASE_authDomain,
  projectId: TWITTERDRAFT_FIREBASE_projectId,
  storageBucket: TWITTERDRAFT_FIREBASE_storageBucket,
  messagingSenderId: TWITTERDRAFT_FIREBASE_messagingSenderId,
  appId: TWITTERDRAFT_FIREBASE_appId,
  measurementId: TWITTERDRAFT_FIREBASE_measurementId,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
