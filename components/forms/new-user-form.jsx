export default function NewUserForm() {
  const firstNameInputChangeHandler = () => {};
  const lastNameInputChangeHandler = () => {};
  const emailInputChangeHandler = () => {};
  const passwordInputChangeHandler = () => {};

  return (
    <form>
      <div className='form-control'>
        <label class='form-label' htmlFor='firstName'></label>
        <input
          className='form-input'
          type='text'
          id='firstName'
          onChange={firstNameInputChangeHandler}
        />
      </div>
      <div className='form-control'>
        <label class='form-label' htmlFor='lastName'></label>
        <input
          className='form-input'
          type='text'
          id='lastName'
          onChange={lastNameInputChangeHandler}
        />
      </div>
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
        <label class='form-label' htmlFor='password'></label>
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
