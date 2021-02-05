import React, { useState } from 'react';
// import Testimonials from './Testimonials';
import '../styles/Contact.css';

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
    <div className='container contactPage'>
      {/* <Testimonials /> */}
      <form className='form' onSubmit={handleSubmit}>
        <h3>Contactez-nous</h3>

        <label>Prénom NOM</label>
        <input
          placeholder='Jean PEUPLUS'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          placeholder='jean.peuplus@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Message</label>
        <textarea
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type='submit'>Envoyer</button>
      </form>
    </div>
  );
}
