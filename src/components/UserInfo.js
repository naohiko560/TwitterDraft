// ユーザー情報の表示
import { auth } from '../firebase';

export const UserInfo = () => {
  return (
    <div className='mt-5'>
      <img
        className="m-auto"
        src={auth.currentUser.photoURL}
        alt="ユーザ情報"
      />
    </div>
  );
}
