import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <div className='navbar-brand' href='#'>
          <Link to='/' className='navLinkTitle'>
            Château de la Wilderie
          </Link>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse links' id='navbarNavAltMarkup'>
          <ul className='navbar-nav'>
            <li className='nav-link active' aria-current='page'>
              <Link to='/cour_du_roi' className='navLink'>
                Cour du Roi
              </Link>
            </li>
            <li className='nav-link'>
              <Link to='/patrimoine' className='navLink'>
                Patrimoine
              </Link>
            </li>
            <li className='nav-link'>
              <Link to='/reservation' className='navLink'>
                Réservation
              </Link>
            </li>
            <li className='nav-link'>
              <Link to='/contact' className='navLink'>
                Contact
              </Link>
            </li>
            <li className='nav-link'>
              <Link to='/login' className='navLink'>
                Se connecter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
