import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./ClientsSlider.module.css";
import img from "../../Image/User-Profile-PNG.png";

const imagePaths = [
  {
    logo: img,
    about:"Mobile Application Development Organization Serving Customers With End To End Support Our Idealization Feasibility Assessment Of The Entire Software Development Being Unique Is Our Quality Sapphire Solutions Believe In The Things That Give Us On Edge Over Our Competitors We Are Renowned Software And",
    name:"Sachin Singh",
    Location:"Delhi"
  },
  {
    logo: img,
    about:"Mobile Application Development Organization Serving Customers With End To End Support Our Idealization Feasibility Assessment Of The Entire Software Development Being Unique Is Our Quality Sapphire Solutions Believe In The Things That Give Us On Edge Over Our Competitors We Are Renowned Software And",
    name:"Sachin Singh",
    Location:"Delhi"
  },
  {
    logo: img,
    about:"Mobile Application Development Organization Serving Customers With End To End Support Our Idealization Feasibility Assessment Of The Entire Software Development Being Unique Is Our Quality Sapphire Solutions Believe In The Things That Give Us On Edge Over Our Competitors We Are Renowned Software And",
    name:"Sachin Singh",
    Location:"Delhi"
  },
  {
    logo: img,
    about:"Mobile Application Development Organization Serving Customers With End To End Support Our Idealization Feasibility Assessment Of The Entire Software Development Being Unique Is Our Quality Sapphire Solutions Believe In The Things That Give Us On Edge Over Our Competitors We Are Renowned Software And",
    name:"Sachin Singh",
    Location:"Delhi"
  },
  {
    logo: img,
    about:"Mobile Application Development Organization Serving Customers With End To End Support Our Idealization Feasibility Assessment Of The Entire Software Development Being Unique Is Our Quality Sapphire Solutions Believe In The Things That Give Us On Edge Over Our Competitors We Are Renowned Software And",
    name:"Sachin Singh",
    Location:"Delhi"
  },
];

export default function ClientsSlider() {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
        const nextSlide =
          (activeSlide + 1) % carouselRef.current.state.totalItems;
        carouselRef.current.goToSlide(nextSlide, false);
        setActiveSlide(nextSlide);
      }
    }, 9000);

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide]);

  return (
    <div className={style.main}>
      <Carousel
        className={style.innerbox}
        ref={carouselRef}
        responsive={responsive}
      >
        {imagePaths.map((path, index) => (
          <div className={style.card} key={index}>
            <img className={style.item} src={path.logo} alt={`img ${index + 1}`} />
            <p>{path.about}</p>
            <h6>{path.name}</h6>
            <p className={style.Location}>{path.Location}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
