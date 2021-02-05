import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='titleLinks'>
        <Link to='/Contact' className='links'>
          Contact
        </Link>
        <a
          href='https://github.com/SaKara69/checkpoint4'
          className='links'
          target='blank'
        >
          Dépôt GitHub
        </a>
        <a
          href='https://www.wildcodeschool.com/fr-FR/campus/lyon'
          className='links'
          target='blank'
        >
          Recrutement
        </a>
        <Link to='/login' className='links'>
          Administrateur
        </Link>
      </div>
      <p className='myName'>Création du site: Sabrina KARAKOG</p>
    </footer>
  );
};

export default Footer;
