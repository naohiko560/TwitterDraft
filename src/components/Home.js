import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignInButton } from './SignInButton';
import { UserInfo } from './UserInfo';
import { Form } from './Form';
import { FormLogout } from './FormLogout';
import { SignOutButton } from './SignOutButton';

export const Home = () => {
  const [user] = useAuthState(auth); // ログイン中かどうかを判断

  return (
    <div className="mt-10">
      {user ? (
        // ログイン中の画面
        <>
          <SignOutButton />
          <UserInfo />
          <Form />
        </>
      ) : (
        // ログアウト中の画面
        <>
          <SignInButton />
          <p className="mt-2">※サインインで個別に保存可能</p>
          <FormLogout />
        </>
      )}
    </div>
  );
};
