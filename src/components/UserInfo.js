// ユーザー情報の表示
import { auth } from '../firebase';

export const UserInfo = () => {
  return (
    <div>
      <img
        className="m-auto"
        src={auth.currentUser.photoURL}
        alt="ユーザ情報"
      />
    </div>
  );
}
