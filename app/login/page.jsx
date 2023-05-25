'use client';

import { useState } from 'react';
import LoginForm from '../components/forms/loginForm';
import NewUserForm from '../components/forms/newUserForm';

export default function LoginPage() {
  //retreive session to set boolean ???
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? <NewUserForm /> : <LoginForm />}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}> LoggedIN??</button>
    </div>
  );
}
