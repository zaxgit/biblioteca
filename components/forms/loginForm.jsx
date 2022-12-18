import { useRef, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const supabase = useSupabaseClient();

  async function signInWithEmail(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }

  return (
    <form className='form' onSubmit={signInWithEmail}>
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
