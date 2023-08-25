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
    title: "Ideation and Conceptualization",
    description:
      "We start by collaborating closely with you to comprehend your app idea, target audience, and business objectives. Our React Native Development team of talented designers and developers then brainstorm concepts to ensure that your app's design and functionality align perfectly with your vision. ",
  },
  {
    logo: logo2,
    title: "Seamless User Experience",
    description:
      "React Native's distinct architecture enables us to create apps that offer a native-like experience on both iOS and Android platforms. We prioritize a smooth user experience through intuitive navigation, fluid animations, and a user-focused interface design. ",
  },
  {
    logo: logo3,
    title: "Cross-Platform Efficiency",
    description:
      "One of React Native's greatest advantages is its ability to develop cross-platform apps with a solitary codebase. This approach reduces development time and costs while maintaining consistent performance and design across various devices.",
  },
  {
    logo: logo4,
    title: "Custom React Native Development",
    description:
      "While React Native provides a wide range of pre-built components, we understand that each app is unique. Our experienced developers excel at creating custom components, animations, and interactions that give your app a distinctive and unforgettable touch.",
  },
  {
    logo: logo5,
    title: " Performance Optimization",
    description:
      "App performance directly impacts user satisfaction. Our React Native Development process includes thorough testing and optimization to ensure quick loading times, seamless transitions, and optimal performance across different devices.",
  },
  {
    logo: logo6,
    title: "Integration of Native Features",
    description:
      "React Native seamlessly incorporates native device features such as camera, GPS, sensors, and more. We leverage these capabilities to enhance your app's functionality and deliver a fully immersive experience.",
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
      <h1>Our Method for React Native App Development </h1>
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
