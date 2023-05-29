// Googleボタンでサインイン
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

export const SignInButton = () => {
  const signInWithGoogle = () => {
    // firebaseを使ってGoogleでサインイン
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>Googleでサインイン</p>
    </button>
  );
};
