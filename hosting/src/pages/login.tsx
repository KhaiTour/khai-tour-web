import React from 'react';

export default function Login() {
  //simple login function
  const login = async (e) => {
    console.log('login', e.target.username.value, e.target.password.value);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
