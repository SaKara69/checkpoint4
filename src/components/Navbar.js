import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='nav'>
      <ul className='menu'>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
          <Link to='/cour_du_roi'>Cour du Roi</Link>
        </li>
        <li>
          <Link to='/patrimoine'>Patrimoine</Link>
        </li>
        <li>
          <Link to='/reservation'>Réservation</Link>
        </li>
        <li>
          <Link to='/evenements'>Evénements</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
