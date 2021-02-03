import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='/Evenements'>Evénements</Link>
      <Link to='/Contact'>Contactez-nous</Link>
      <a href='https://github.com/SaKara69/checkpoint4'>Dépôt GitHub</a>
      <a href='https://www.wildcodeschool.com/fr-FR/campus/lyon'>Recrutement</a>
      <h5>Création du site: Sabrina KARAKOG</h5>
    </footer>
  );
};

export default Footer;
