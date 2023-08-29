import React, { useState, useEffect } from "react";
import style from "./Section2.module.css";
import logo1 from "../../../Image/chart.gif";
import logo2 from "../../../Image/date.gif";
import logo3 from "../../../Image/id.gif";
import logo4 from "../../../Image/page.gif";
import logo5 from "../../../Image/setting.gif";
import logo6 from "../../../Image/message.gif";

const cardData = [
  {
    logo: logo1,
    title: "Thorough Requirements Evaluation",
    description:"We commence by deeply comprehending your data needs and business objectives. Our team collaborates closely with you to grasp the extent and complexities of your data ecosystem. ",
  },
  {
    logo: logo2,
    title: "Tailored Data Modelling ",
    description:
      "Acknowledging the distinctiveness of each enterprise, our strategy involves developing customized data models that enhance data arrangement, storage, and retrieval, guaranteeing optimal efficiency. ",
  },
  {
    logo: logo3,
    title: "Streamlined Implementation",
    description:
      "Our skilled professionals transform concepts into reality through meticulous execution. We guarantee streamlined database establishment, adhering to best practices for data integrity and security. ",
  },
  {
    logo: logo4,
    title: "Data Migration Proficiency",
    description:
      "Smoothly transfer your data from existing systems to modern databases with our expertise. We ensure minimal disruption and maintain data accuracy throughout the transition. ",
  },
  {
    logo: logo5,
    title: "Continuous Performance Enhancement",
    description:
      "Our approach does not conclude with implementation. We consistently observe and fine-tune your databases, optimizing queries and configurations for peak performance. ",
  },
  {
    logo: logo6,
    title: "Comprehensive Maintenance and Assistance ",
    description:
      "We provide continuous support to ensure your databases remain operational, secure, and up-to-date. Our team is prepared to troubleshoot, update, and address any concerns.",
  },
];

const lightColors = [
  "#CAF1DE",
  "#E1DBFF",
  "#F0FFC9",
  "#FFF3CB",
  "#FFC6C6",
  "#E0FF9F",
]; // You can add more light colors here

function Section2() {
  const [randomColors, setRandomColors] = useState(lightColors);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomColors(getRandomColorsArray(cardData.length));
    }, 10000); // 2-second delay

    return () => clearInterval(interval);
  }, []);

  const getRandomColorsArray = (length) => {
    const colors = [];
    for (let i = 0; i < length; i++) {
      colors.push(getRandomColor());
    }
    return colors;
  };

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * lightColors.length);
    return lightColors[randomIndex];
  };

  return (
    <div className={style.main}>
      <h1>Our Approach to Database Design and Management Services</h1>
      <p className={style.para}>
      Welcome to EasyRyt’s exclusive page for Professional Database Creation and Administration Services. On this dedicated platform, we merge cutting-edge techniques with streamlined data structure to provide you with unmatched database solutions. Are you ready to enhance the way you store, retrieve, and handle your valuable information? Your search ends here. Our team of skilled database professionals is ready to revolutionize your data needs, offering you state-of-the-art, flexible, and well-arranged database solutions that redefine productivity and enhance your decision-making process.
      </p>
      <div className={style.innerbox}>
        {cardData.map((data, index) => (
          <div
            className={style.card}
            key={index}
            style={{ background: randomColors[index] }}
          >
            <img className={style.img} src={data.logo} alt={`img${index}`} />
            <h6>{data.title}</h6>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2;
