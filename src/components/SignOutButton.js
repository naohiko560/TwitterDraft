// サインアウト
import { auth } from '../firebase';

export const SignOutButton = () => {
  return (
    <button className='ml-10' onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  );
}
