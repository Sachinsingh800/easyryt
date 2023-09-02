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
    title: "Generation and Conception",
    description:
      "We commence by collaborating with you to comprehend your app’s concept, target audience, and business goals. Our team of experienced designers and developers then brainstorm concepts to guarantee that your app's design and functionality harmonize perfectly with your vision. ",
  },
  {
    logo: logo2,
    title: "User-Centric Design",
    description:
      "Flutter's extensive selection of pre-designed widgets and customizable components enables us to create stunning user interfaces that engage and delight users. We prioritize user-centric designs to ensure instinctive navigation, seamless interactions and a visually appealing arrangement.  ",
  },
  {
    logo: logo3,
    title: "Multi-Platform Development",
    description:
      "Flutter's distinctive framework allows us to develop cross-platform apps using a singular codebase. This significantly reduces development time and expenses while guaranteeing consistent performance and design on both iOS and Android platforms.",
  },
  {
    logo: logo4,
    title: "Personalized Development",
    description:
      "While Flutter offers a wide range of pre-installed widgets, we recognize that each app has distinct requirements. Our Flutter Application Development team is skilled at crafting personalized widgets, animations, and interactions to give your app a unique and unforgettable touch.",
  },
  {
    logo: logo5,
    title: " Efficiency Enhancement ",
    description:
      "We understand that app performance directly affects user contentment. Our development procedure encompasses thorough performance testing and enhancement to guarantee swift loading times, seamless animations, and minimal delays.",
  },
  {
    logo: logo6,
    title: "Incorporation of Device Functions",
    description:
      "Flutter seamlessly integrates with device-specific functions such as the camera, location services, sensors, and more. We leverage these capabilities to amplify your app's functionality and create captivating experiences that users will adore.",
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
      <h2>Our Method for Flutter App Development </h2>
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
