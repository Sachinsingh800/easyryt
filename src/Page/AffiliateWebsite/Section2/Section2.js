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
    title: "Strategic Blueprint ",
    description:
      "We thoroughly analyse your affiliate marketing objectives, comprehending your target audience and the merchandise you endorse. This understanding lays the groundwork for our strategy, assuring that your website is in line with your affiliate goals.  ",
  },
  {
    logo: logo2,
    title: "Design with a Focus on Conversion  ",
    description:
      "Our designers combine inventiveness with conversion-centred design principles to construct layouts that drive action. We optimize your website's arrangement to maximize clicks and engagement.",
  },
  {
    logo: logo3,
    title: "Effortless Integration of Products ",
    description:
      "We seamlessly incorporate affiliate products, presenting them in an orderly and aesthetically appealing manner. Your visitors will effortlessly explore and purchase the endorsed merchandise. ",
  },
  {
    logo: logo4,
    title: "User-Friendly Experience ",
    description:
      "Easily navigating your affiliate marketing site should be a breeze. Our design centred around the user ensures that visitors effortlessly discover what they desire, elevating their overall experience and motivating them to engage. ",
  },
  {
    logo: logo5,
    title: "Adaptive Design",
    description:
      "It is paramount that your affiliate marketing website seamlessly functions on various devices. Our approach to design ensures an optimal encounter whether users access your site through computers, tablets, or smartphones. ",
  },
  {
    logo: logo6,
    title: "Optimization for Search Engines  ",
    description:
      "To amplify the reach of your affiliate marketing, we implement effective SEO strategies that heighten visibility on search engines, expanding the audience that can access your affiliate content.",
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
      <h1>Our Method for  Developing a WordPress Website for Affiliate Marketing</h1>
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
