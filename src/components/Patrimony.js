import crown from '../pictures/couronne.jpg';
import '../styles/Patrimony.css';

export default function Patrimony() {
  return (
    <div className='patrominyContainer'>
      <h3>Patrimoine du château</h3>
      <div class='card' style={{ width: '18rem' }}>
        <img src={crown} class='card-img-top' alt='crown' />
        <div class='card-body'>
          <h5 class='card-title titleObject'>La couronne du Roi</h5>
          <p class='card-text textObject'>
            Pièce d'orfèvrerie TRES TRES chère portée par le Roi en de rares
            occasions.
          </p>
        </div>
      </div>
    </div>
  );
}
