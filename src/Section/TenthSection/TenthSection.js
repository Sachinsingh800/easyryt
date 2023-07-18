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
      text: "Improves efficiency and provides high scalability, boosting productivity, cost-efficiency, and adaptability to changing market demands for businesses' success. ",
    },
    {
        no:2,
      image: logo2,
      heading: "Designs,Wireframes & Mockups",
      text: "Designs, wireframes, and mockups are essential elements in the development process, ensuring cohesive visual representation and user experience for web and app projects.",
    },
    {
        no:3,
      image: logo3,
      heading: "Prototype Demo",
      text: "A prototype demo is a visual representation of a product or software's functionalities and interactions, allowing stakeholders to preview its features before development completion.",
    },
    {
        no:4,
      image: logo4,
      heading: "Change And Confirmation",
      text: "Change and confirmation refer to the process of verifying modifications made to a product or system before implementing them, ensuring the accuracy and approval of the updates.",
    },
    {
        no:5,
      image: logo5,
      heading: "SEO",
      text: "SEO (Search Engine Optimization) is the process of improving a website's visibility on search engine results pages, increasing organic traffic and enhancing online presence for better business performance.",
    },
    {
        no:6,
      image: logo6,
      heading: "Support And Maintenance",
      text: "Support and maintenance encompass ongoing activities to ensure the smooth operation, updates, and resolution of issues for software, websites, or systems to keep them functional, secure, and up-to-date.",
    },
    {
        no:7,
      image: logo6,
      heading: "Deployment",
      text: "Deployment refers to the process of releasing and making software applications, websites, or systems available for public use or internal implementation after development and testing phases are complete.",
    },
    {
        no:8,
      image: logo6,
      heading: "Development",
      text: "Development is the process of creating and building software applications, websites, or systems by writing code, designing interfaces, and implementing functionalities to meet specific requirements and objectives..",
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
      <h1>Process We Follow</h1>
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
