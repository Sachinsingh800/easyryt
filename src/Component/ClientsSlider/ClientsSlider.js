import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./ClientsSlider.module.css";
import img from "../../Image/User-Profile-PNG.png";
import img2 from "../../Image/NicePng_cammy-png_1829287.png";
import img3 from "../../Image/PngItem_1284293.png";
import img4 from "../../Image/kindpng_4973038.png";
import img5 from "../../Image/pngfind.com-ambe-maa-png-3177131.png";
import img6 from "../../Image/kindpng_5575215.png";

const imagePaths = [
  {
    logo: img,
    about:"A Remarkable Experience with EasyRyt Solutions.Embracing Distinctive Strengths for Optimal Customer Support As a tech-savvy entrepreneur seeking the right mobile app development company, my quest for excellence led me to EasyRyt Solutions.",
    name:"John Smith",
    Location:"United States"
  },
  {
    logo: img2,
    about:"EasyRyt Solutions' dedication to customer satisfaction is unmatched. Their software development process is streamlined, and their team's expertise ensures a top-notch app. Impressed by their ability to adapt to our needs and deliver on time!",
    name:"Sarah Johnson",
    Location:"Canada"
  },
  {
    logo: img4,
    about:"Working with EasyRyt Solutions was a pleasure. Their comprehensive support and visionary approach instilled confidence in the project's success. The final app's quality and functionality are exceptional, and we couldn't be happier!",
    name:"Michael Brown",
    Location:"Australia"
  },
  {
    logo: img3,
    about:"EasyRyt Solutions stands out as a reliable partner in app development. Their competitive advantage lies in their customer-centric focus and technical prowess. Highly recommended for anyone seeking a top-tier mobile app!",
    name:"Emily Davis",
    Location:"Germany"
  },
  {
    logo: img5,
    about:"EasyRyt Solutions' dedication to customer satisfaction is unmatched. Their software development process is streamlined, and their team's expertise ensures a top-notch app. Impressed by their ability to adapt to our needs and deliver on time!",
    name:"Sachin Singh",
    Location:"Delhi"
  },
  {
    logo: img6,
    about:"EasyRyt Solutions stands out as a reliable partner in app development. Their competitive advantage lies in their customer-centric focus and technical prowess. Highly recommended for anyone seeking a top-tier mobile app!",
    name:"Jhon Davis",
    Location:"Germany"
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
          (activeSlide + 3) % carouselRef.current.state.totalItems;
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
