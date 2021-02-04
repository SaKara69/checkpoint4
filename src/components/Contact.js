import React, { useState } from 'react';
import Testimonials from './Testimonials';
import '../styles/Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='container contactPage'>
      <Testimonials />
      <form className='form' onSubmit={handleSubmit}>
        <h1>Contactez-nous</h1>

        <label>Prénom NOM</label>
        <input
          placeholder='Jean DOE'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder='jean.doe@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
