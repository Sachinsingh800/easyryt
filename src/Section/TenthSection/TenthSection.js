import React, { useState, useEffect } from "react";
import style from "./TenthSection.module.css";
import logo1 from "../../Image/chart.gif";
import logo2 from "../../Image/date.gif";
import logo3 from "../../Image/id.gif";
import logo4 from "../../Image/page.gif";
import logo5 from "../../Image/setting.gif";
import logo6 from "../../Image/message.gif";

const TenthSection = () => {
  const cardsData = [
    {
     no:1,
      image: logo1,
      heading: "Improves Efficiency And Offers High Scalability",
      text: "Since Business Apps Are Custom Built With The Companys Needs In Mind They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
    },
    {
        no:2,
      image: logo1,
      heading: "Improves Efficiency And Offers High Scalability",
      text: "Since Business Apps Are Custom Built With The Companys Needs In Mind They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
    },
    {
        no:3,
      image: logo1,
      heading: "Improves Efficiency And Offers High Scalability",
      text: "Since Business Apps Are Custom Built With The Companys Needs In Mind They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
    },
    {
        no:4,
      image: logo1,
      heading: "Improves Efficiency And Offers High Scalability",
      text: "Since Business Apps Are Custom Built With The Companys Needs In Mind They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
    },
    {
        no:5,
      image: logo1,
      heading: "Improves Efficiency And Offers High Scalability",
      text: "Since Business Apps Are Custom Built With The Companys Needs In Mind They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
    },
    {
        no:6,
      image: logo1,
      heading: "Improves Efficiency And Offers High Scalability",
      text: "Since Business Apps Are Custom Built With The Companys Needs In Mind They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
    },
    {
        no:7,
      image: logo1,
      heading: "Improves Efficiency And Offers High Scalability",
      text: "Since Business Apps Are Custom Built With The Companys Needs In Mind They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
    },
    {
        no:8,
      image: logo1,
      heading: "Improves Efficiency And Offers High Scalability",
      text: "Since Business Apps Are Custom Built With The Companys Needs In Mind They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
    },
    // Add more card data as needed...
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 2000); // 2-second delay

    return () => clearInterval(interval);
  }, [cardsData.length]);

  return (
    <div className={style.main}>
      <h1>Benefits Of Mobile App Development</h1>
      <p>Here Are Some Of The Most Advantage Of Mobile App Growth For Business.</p>
      <div className={style.innerbox}>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`${style.card} ${index === currentCardIndex ? style.active : ""}`}
          >
            <img className={style.img} src={card.image} alt={`img${index + 1}`} />
            <h6>{card.heading}</h6>
            <p >{card.text}</p>
            <span className={style.no}>{card.no}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenthSection;
