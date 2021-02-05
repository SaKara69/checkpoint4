import React, { useState } from 'react';
import '../styles/Login.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='container loginPage'>
      <form className='formZone' onSubmit={handleSubmit}>
        <h3 className='subtitleAdmin'>Espace Administrateur</h3>

        <label className='labelLog'>Email</label>
        <input
          className='inputLog'
          placeholder='jean.peuplus@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className='btnLog' type='submit'>
          Connexion
        </button>
      </form>
    </div>
  );
}
