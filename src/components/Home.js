import Castle from './Castle';
import CastleDescription from './CastleDescription';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className='homePage'>
      <header>
        <h1 className='title'>Château de la Wilderie</h1>
      </header>
      <hr />
      <Castle />
      <CastleDescription />
    </div>
  );
}
