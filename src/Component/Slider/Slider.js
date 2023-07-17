import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './Slider.module.css';
import logo from '../../Image/Dominos.png';
import logo1 from '../../Image/800px-Kentucky_Fried_Chicken_201x_logo.svg.png';
import logo2 from '../../Image/Mars.png';
import logo3 from '../../Image/pngwing.com (2).png';

export default function Slider() {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextSlide = (activeSlide + 1) % carouselRef.current.state.totalItems;
        carouselRef.current.goToSlide(nextSlide, false);
        setActiveSlide(nextSlide);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide]);

  return (
    <div className={style.main}>
      <Carousel ref={carouselRef} responsive={responsive}>
        <div>
          <img className={style.item} src={logo} alt="img 1" />
        </div>
        <div>
          <img className={style.item} src={logo1} alt="img 1" />
        </div>
        <div>
          <img className={style.item} src={logo2} alt="img 1" />
        </div>
        <div>
          <img className={style.item} src={logo3} alt="img 1" />
        </div>
        <div>
          <img className={style.item} src={logo} alt="img 1" />
        </div>
        <div>
          <img className={style.item} src={logo1} alt="img 1" />
        </div>
        <div>
          <img className={style.item} src={logo2} alt="img 1" />
        </div>
        <div>
          <img className={style.item} src={logo3} alt="img 1" />
        </div>
      </Carousel>
    </div>
  );
}
