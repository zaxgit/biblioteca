'use client';
import { useRef } from 'react';
import { useSupabase } from '../../supabase-provider';

export default function NewUserForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { supabase } = useSupabase();

  const registerUser = (e) => {
    e.preventDefault();
    supabase.auth.signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    // clear inputs
  };

  return (
    <form className='form' onSubmit={registerUser}>
      <div className='form-control'>
        <label className='form-label' htmlFor='email'>
          Email
        </label>
        <input
          autoFocus
          className='form-input'
          placeholder='Email'
          type='email'
          name='email'
          ref={emailRef}
        />
      </div>
      <div className='form-control'>
        <label className='form-label' htmlFor='password'>
          Password
        </label>
        <input
          className='form-input'
          placeholder='Password'
          type='password'
          name='password'
          ref={passwordRef}
        />
      </div>
      <div className='form-control'>
        <button type='submit' className='btn btn-primary'>
          Register
        </button>
      </div>
    </form>
  );
}
