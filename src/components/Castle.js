import '../styles/Castle.css';
import room from '../pictures/room.jpg';
import gardens from '../pictures/gardens.jpg';
import bedroom from '../pictures/bedroom.jpg';

export default function Castle() {
  return (
    <div
      id='carouselExampleCaptions'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <ol className='carousel-indicators'>
        <li
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='0'
          className='active'
        ></li>
        <li data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1'></li>
        <li data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src={room}
            className='d-block w-100 imgSize'
            alt='the great room'
          />
        </div>
        <div className='carousel-item'>
          <img src={gardens} className='d-block w-100' alt='the gardens' />
        </div>
        <div className='carousel-item'>
          <img src={bedroom} className='d-block w-100' alt='bedroom' />
        </div>
      </div>
      <a
        className='carousel-control-prev'
        href='#carouselExampleCaptions'
        role='button'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleCaptions'
        role='button'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </a>
    </div>
  );
}
