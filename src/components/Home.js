import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {SignInButton} from './SignInButton'
import { UserInfo } from './UserInfo';
import { SignOutButton } from './SignOutButton';
import { Form } from './Form';

export const Home = () => {
  const [user] = useAuthState(auth); // ログイン中かどうかを判断

  return (
    <div>
      {user ? (
        // ログイン中の画面
        <>
          <UserInfo />
          <Form />
          <SignOutButton />
        </>
      ) : (
          // ログアウト中の画面
        <SignInButton />
      )}
    </div>
  );
};