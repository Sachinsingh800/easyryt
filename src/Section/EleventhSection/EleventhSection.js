import React, { useState, useEffect } from "react";
import style from "./EleventhSection.module.css";

import model2 from "../../Image/zulures (2).png";
import model3 from "../../Image/ssu.png";
import model4 from "../../Image/model4.png";
import model5 from "../../Image/model5.png";
import model6 from "../../Image/model6.png";
import model7 from "../../Image/model7.png";
import bg4 from "../../Image/bg4.png";
import bg5 from "../../Image/bg5.png";
import bg6 from "../../Image/bg6.png";
import bg7 from "../../Image/bg7.png";
import bg8 from "../../Image/bg8.png";
import bg9 from "../../Image/bg9.png";

const EleventhSection = () => {
  const cardsData = [
    {
      bg: bg4,
      image: model2,
      heading: "Zulures Website Development:",
      text: "Restaurant website development involves creating a user-friendly and visually appealing online platform for restaurants to showcase their menus, services, and brand. ",
    },
    {
      bg: bg5,
      image: model3,
      heading: "SSU Website Development",
      text: "The SSU Scholarship Website is an online platform dedicated to providing valuable information and resources for students seeking financial assistance for their higher education",
    },
    {
      bg: bg6,
      image: model4,
      heading: "Blogging Platform",
      text: "Description: Develop a blogging platform that allows users to create, edit, and publish blog posts.",
    },
    {
      bg: bg7,
      image: model5,
      heading: "Fitness Tracker",
      text: "Description: Build a fitness tracker website that enables users to set fitness goals, track their daily workouts, and monitor progress.",
    },
    {
      bg: bg8,
      image: model6,
      heading: "Event Booking Platform",
      text: "Description: Develop an event booking platform that allows users to discover, book, and attend various events and activities.",
    },
    {
      bg: bg9,
      image: model7,
      heading: "E-commerce Website",
      text: "Description: Create an e-commerce website where users can browse through various products, add items to their cart, and proceed to checkout for payment.",
    },

    // Add more card data as needed...
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 4000); // 2-second delay

    return () => clearInterval(interval);
  }, [cardsData.length]);

  return (
    <div className={style.main}>
      <h1>Our Recent Project</h1>
      <p className={style.para}>
        Here Are Some Of The MostPresenting The Wide Range Of Solutions That We
        Have Successfully Delivered Our Client With The High Quality Standard
        Know Advantages Of Mobile App Growth For Business.
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
                className={style.img}
                src={card.image}
                alt={`img${index + 1}`}
              />
              <img className={style.img2} src={card.bg} alt="img2" />
            </div>
           <div className={style.infoBox}>
           <h3>{card.heading}</h3>
           <p >{card.text}</p>
           </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default EleventhSection;
