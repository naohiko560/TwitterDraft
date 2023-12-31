// サインアウト
import { auth } from '../firebase';

export const SignOutButton = () => {
  return (
    <button className="ml-5 bg-red-700" onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  );
}
