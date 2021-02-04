import Castle from './Castle';
import CastleDescription from './CastleDescription';
import '../styles/Home.css';
import { useSpring, animated } from 'react-spring';

export default function Home() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const props1 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 700 });
  const props2 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 900 });
  const props3 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1100 });
  return (
    <div className='homePage'>
      <header className='titleLine'>
        <animated.div style={props} className='title'>
          Château
        </animated.div>
        <animated.div style={props1} className='title'>
          de
        </animated.div>
        <animated.div style={props2} className='title'>
          la
        </animated.div>
        <animated.div style={props3} className='title'>
          Wilderie
        </animated.div>
      </header>
      <hr className='styledBar' />
      <Castle />
      <CastleDescription />
    </div>
  );
}
