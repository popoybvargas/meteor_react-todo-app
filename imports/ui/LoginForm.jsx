import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const LoginForm = () =>
{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = e =>
  {
    e.preventDefault();
    Meteor.loginWithPassword(username, password);
  };

  return (
    <form onSubmit={ onFormSubmit } className="login-form">
      <div>
        <label htmlFor="username">username</label>
        <input type="text" placeholder="Username" name="username" required
          onChange={ e => setUsername(e.target.value) } />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name="password" required
          onChange={ e => setPassword(e.target.value) } />
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};