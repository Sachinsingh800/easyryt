import React, { useState, useEffect } from "react";
import style from "./ThirteenthSection.module.css";
import { Link } from "react-router-dom";
import { cardsData } from "../../Const/Const";



const ThirteenthSection = () => {



  localStorage.setItem("blog2",JSON.stringify(cardsData))

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 4000); // 2-second delay

    return () => clearInterval(interval);
  }, [cardsData.length]);


  const BlogContent = ({ htmlContent }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };


  return (
    <div className={style.main}>
      <h1>Our Recent Blogs</h1>
      <p className={style.para}>
        Having Exclusive To Work With Startups To Corporate, We Have In-Depth
        Insighs About The Versatile Needs Of Diversified Industry Domains.
      </p>
      <div className={style.innerbox}>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`${style.card} ${
              index === currentCardIndex ? style.active : ""
            }`}
          >
            <div className={style.imgbox}>
              <img
                className={style.img2}
                src={card.image}
                alt={`img${index + 1}`}
              />
            </div>
            <div className={style.infoBox}>
              <h6>{card.heading}</h6>
              <h6>{card.title}</h6>
            <Link to={"/FullBlog2"}><p style={{ color: "blue" }}>View</p></Link>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirteenthSection;
