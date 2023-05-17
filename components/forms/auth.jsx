'use client';
import { useState } from 'react';
import LoginForm from './loginForm';
import RegisterUserForm from './registerUserForm';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const btnTxt = isLogin
    ? "Don't have an account?"
    : 'Already have an account?';

  const clickHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? <LoginForm /> : <RegisterUserForm />}
      <button onClick={clickHandler}>{btnTxt}</button>
    </>
  );
}
