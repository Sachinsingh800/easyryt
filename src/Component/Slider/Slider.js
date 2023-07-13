import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from  "./Slider.module.css"
import img from "../../Image/SAP_(6).png"
 
export default function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };
  return (
    <div   className={style.main}>
      <Carousel responsive={responsive}>
        <div>
          <img
            className={style.item}
            src={img}
            alt="img 1"
          />
        </div>
        <div>
          <img
            className={style.item}
            src={img}
            alt="img 1"
          />
        </div>
        <div>
          <img
            className={style.item}
            src={img}
            alt="img 1"
          />
        </div>
        <div>
          <img
            className={style.item}
            src={img}
            alt="img 1"
          />
        </div>
     
      </Carousel>
    </div>
  );
}
