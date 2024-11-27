// import { Link } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carousal1 from '../../assets/common-images/carousal1.jpg'
import carousal2 from '../../assets/common-images/carousal2.jpg'
import carousal3 from '../../assets/common-images/carousal3.jpg'
import styles from '../../styles/Username.module.css'

export const Carousal = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img className='d-block' src={carousal1} alt="" style={{ height: '600px', objectFit: 'cover' }}/>
        <Carousel.Caption>
          <h2 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Savor Every Bite: Order Our Delectable Delights Now!</h2>
          <a className={styles.btn3} href="/orderMenuHome">Order now</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block width-100' src={carousal2} alt="" style={{ maxHeight: '600px', objectFit: 'cover' }}/>
        <Carousel.Caption>
          <h2 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Secure Your Spot: Reserve Your Table for an Unforgettable Dining Experience!</h2>
          <a className={styles.btn3} href="/reservation">Reserve a table</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block width-100' src={carousal3} alt="" style={{ maxHeight: '600px', objectFit: 'cover' }}/>
        <Carousel.Caption>
        <h2 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Indulge Your Guests: Book Our Catering Service for Culinary Excellence!</h2>
          <a className={styles.btn3} href="/catMain">Catering service</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
