import cn from 'classnames';
import styles from './Carousel.module.css';
import 'swiper/css';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const Carousel = () => (
  <section className={styles.carousel}>
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      modules={[Navigation]}
      direction="horizontal"
      centeredSlides={true}
      className={styles.slider}
      loop={true}
      navigation={{
        nextEl: '.next',
        prevEl: '.prev',
      }}
    >
      <SwiperSlide> <img src="/slide1.jpg" alt="slide" style={{ width: '600px', height: '400px' }} /></SwiperSlide>
      <SwiperSlide> <img src="/slide2.jpg" alt="slide" style={{ width: '600px', height: '400px' }} /></SwiperSlide>
      <SwiperSlide> <img src="/slide3.jpg" alt="slide" style={{ width: '600px', height: '400px' }} /></SwiperSlide>
      <div className={styles.buttons}>
        <button className={cn(styles.prev, 'prev')}>
          <span className="visually-hidden">Prev Slide</span>
          <img src="/arrow.svg" alt="prev arrow " />
        </button>
        <button className={cn(styles.next, 'next')}>
          <span className="visually-hidden">Next Slide</span>
          <img src="/arrow.svg" alt="next arrow " />
        </button>
      </div>
    </Swiper>
  </section>
)


export default Carousel
