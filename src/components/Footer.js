import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='links'>
        <Link to='/Evenements'>Evénements</Link>
        <Link to='/Contact'>Contactez-nous</Link>
        <a href='https://github.com/SaKara69/checkpoint4'>Dépôt GitHub</a>
        <a href='https://www.wildcodeschool.com/fr-FR/campus/lyon'>
          Recrutement
        </a>
      </div>
      <p className='myName'>Création du site: Sabrina KARAKOG</p>
    </footer>
  );
};

export default Footer;
