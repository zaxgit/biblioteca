'use client';
import { useRef } from 'react';
import { useSupabase } from '../../supabase-provider';

export default function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { supabase } = useSupabase();

  const signIn = (e) => {
    e.preventDefault();
    supabase.auth.signInWithPassword({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    console.log('signed in!');
  };

  return (
    <form className='form' onSubmit={signIn}>
      <div className='form-control'>
        <label className='form-label' htmlFor='email'></label>
        <input className='form-input' type='email' id='email' ref={emailRef} />
      </div>
      <div className='form-control'>
        <label className='form-label' htmlFor='email'></label>
        <input
          className='form-input'
          type='password'
          id='password'
          ref={passwordRef}
        />
      </div>
      <div className='form-control'>
        <button type='submit'>Login</button>
      </div>
    </form>
  );
}
