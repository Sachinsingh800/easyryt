import React, { useState, useEffect } from "react";
import style from "./EleventhSection.module.css";

import model2 from "../../Image/model2.png";
import model3 from "../../Image/model3.png";
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
      heading: "Restaurant Website Development:",
      text: "Restaurant website development involves creating a user-friendly and visually appealing online platform for restaurants to showcase their menus, services, and brand. ",
    },
    {
      bg: bg5,
      image: model3,
      heading: "Designs,Wireframes & Mockups",
      text: "Designs, wireframes, and mockups are essential elements in the development process, ensuring cohesive visual representation and user experience for web and app projects.",
    },
    {
      bg: bg6,
      image: model4,
      heading: "Prototype Demo",
      text: "A prototype demo is a visual representation of a product or software's functionalities and interactions, allowing stakeholders to preview its features before development completion.",
    },
    {
      bg: bg7,
      image: model5,
      heading: "Change And Confirmation",
      text: "Change and confirmation refer to the process of verifying modifications made to a product or system before implementing them, ensuring the accuracy and approval of the updates.",
    },
    {
      bg: bg8,
      image: model6,
      heading: "SEO",
      text: "SEO (Search Engine Optimization) is the process of improving a website's visibility on search engine results pages, increasing organic traffic and enhancing online presence for better business performance.",
    },
    {
      bg: bg9,
      image: model7,
      heading: "Support And Maintenance",
      text: "Support and maintenance encompass ongoing activities to ensure the smooth operation, updates, and resolution of issues for software, websites, or systems to keep them functional, secure, and up-to-date.",
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
           <h6>{card.heading}</h6>
            <p>{card.text}</p>
            <p style={{ color: "blue" }}>View</p>
           </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default EleventhSection;
