// ユーザー情報の表示
import { auth } from '../firebase';

export const UserInfo = () => {
  return (
    <div className="userInfo">
      <img src={auth.currentUser.photoURL} alt="ユーザ情報" />
      <p>{auth.currentUser.displayName}</p>
    </div>
  );
}
