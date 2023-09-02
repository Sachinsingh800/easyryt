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
    title: "Strategic Framework ",
    description:
      "We start by comprehending the distinct requirements of your project. Our developers collaborate to devise a framework that is not only scalable but also tailored to your existing and future needs.  ",
  },
  {
    logo: logo2,
    title: "Personalized Solutions  ",
    description:
      "Each project is unique. We craft bespoke backend solutions that align with your objectives, whether it's an online retail platform, web application, or content management system.",
  },
  {
    logo: logo3,
    title: "Data Handling ",
    description:
      "Your data holds immense value. We design and manage databases that efficiently store, organize, and retrieve information, ensuring seamless user experiences and precise analytics. ",
  },
  {
    logo: logo4,
    title: "Server Setup ",
    description:
      "Performance is crucial. Our developers optimize server configurations to handle sudden increases in traffic, minimize loading times, and deliver a smooth browsing experience. ",
  },
  {
    logo: logo5,
    title: "API Integration",
    description:
      "In the interconnected digital realm, Application Programming Interfaces act as connectors between different systems. We seamlessly incorporate APIs, enabling your application to effectively communicate with external services and platforms. ",
  },
  {
    logo: logo6,
    title: "Strengthening Security Measures:  ",
    description:
      "Cybersecurity is an absolute necessity. We implement robust measures to fortify the protection of user data, prevent breaches, and ensure a secure digital environment.",
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
      <h2>Our Method for Backend Development</h2>
      <p className={style.para}>
        At EasyRyt, we acknowledge that constructing a prosperous application is
        a dynamic fusion of inventiveness, strategic preparation, and careful
        implementation. Our diverse group of creators, programmers, and planners
        work cooperatively to bring your application idea to fruition.
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
