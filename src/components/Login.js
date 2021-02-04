import React, { useState } from 'react';
import '../styles/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    setEmail('');
    setPassword('');
  };

  return (
    <div className='loginForm container'>
      <form onSubmit={handleSubmit} className='formConnexion'>
        <label htmlFor='email' className='labels'>
          Email
        </label>
        <input
          type='email'
          placeholder='jean.doe@email.com'
          className='inputs'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='password' className='labels'>
          Mot de passe
        </label>
        <input
          type='password'
          className='inputs'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit' className='btnConnect'>
          Connection
        </button>
      </form>
    </div>
  );
}
