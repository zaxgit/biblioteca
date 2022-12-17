export default function LoginForm() {
  const emailInputChangeHandler = () => {};
  const passwordInputChangeHandler = () => {};

  return (
    <form className='form'>
      <div className='form-control'>
        <label class='form-label' htmlFor='email'></label>
        <input
          className='form-input'
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
        />
      </div>
      <div className='form-control'>
        <label class='form-label' htmlFor='email'></label>
        <input
          className='form-input'
          type='password'
          id='password'
          onChange={passwordInputChangeHandler}
        />
      </div>
    </form>
  );
}
