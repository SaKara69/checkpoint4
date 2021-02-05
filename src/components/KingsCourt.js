import king from '../pictures/LeRoi.png';
import captain from '../pictures/capitaine.png';
import saint from '../pictures/saint.png';
import warriors from '../pictures/membres.png';
import '../styles/KingsCourt.css';

export default function KingsCourt() {
  return (
    <div className='pageKc'>
      <h3 className='courtTitle'>La cour</h3>
      <div className='kingCourt'>
        <div className='card mb-3 identity' style={{ width: '30rem' }}>
          <img src={king} className='card-img-top photo' alt='the king' />
          <div className='card-body'>
            <h5 className='card-title role'>Le roi</h5>
            <p className='card-text pDescription'>
              Son Altesse Royale Sérénissime, exigent avec son peuple? Il désire
              seulement les amener vers les plus hauts sommets!
            </p>
          </div>
        </div>
        <div className='card mb-3 identity' style={{ width: '24rem' }}>
          <img src={captain} className='card-img-top photo' alt='the captain' />
          <div className='card-body'>
            <h5 className='card-title role'>Le capitaine</h5>
            <p className='card-text pDescription'>
              Le Capitaine ne pert jamais de vue ses subordonnés, il reste
              toujours présent pour les guider!
            </p>
          </div>
        </div>
        <div className='card mb-3 identity' style={{ width: '24rem' }}>
          <img src={saint} className='card-img-top photo' alt='the Saint' />
          <div className='card-body'>
            <h5 className='card-title role'>Sa Sainteté</h5>
            <p className='card-text pDescription'>
              Toujours là pour aider ses semblables, il vous apporte paix et
              sérénité.
            </p>
          </div>
        </div>
        <div className='card mb-3 identity' style={{ width: '65rem' }}>
          <img src={warriors} className='card-img-top photo' alt='warriors' />
          <div className='card-body'>
            <h5 className='card-title role'>Quelques membres</h5>
            <p className='card-text pDescription'>
              Une armée de redoutables guerriers, en voici quelques membres.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
