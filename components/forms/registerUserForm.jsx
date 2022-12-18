import { useRef } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function NewUserForm() {
  const supabase = useSupabaseClient();

  const emailRef = useRef();
  const passwordRef = useRef();

  const registerUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form onSubmit={registerUser}>
      <div className='form-control'>
        <label className='form-label' htmlFor='email'>
          Email
        </label>
        <input
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
