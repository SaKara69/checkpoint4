import React from 'react';
import '../styles/Admin.css';

export default function Admin() {
  return (
    <div className='adminZone'>
      <button className='logoutBtn'>Déconnecter</button>
      <h5>Bienvenue cher Administrateur</h5>
    </div>
  );
}
