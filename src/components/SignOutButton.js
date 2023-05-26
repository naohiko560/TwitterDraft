// サインアウト
import { auth } from '../firebase';

export const SignOutButton = () => {
  return (
    <button onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  );
}
