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
    title: "Exploration and Preparation",
    description:
      "We initiate by acquiring a profound comprehension of your app's purpose, target audience, and distinctive features. Our team collaborates closely with you to delineate the extent and objectives of your mobile app. We analyse your competitors, industry patterns, and user preferences to develop a comprehensive strategy that serves as the groundwork for development.",
  },
  {
    logo: logo2,
    title: "Tailored Design",
    description:
      "User experience takes centre stage in our mobile app development design methodology. Our design specialists create user-friendly interfaces that prioritize usability, aesthetics, and functionality. We concentrate on creating a consistent user experience across various devices and platforms, guaranteeing seamless navigation and interaction.",
  },
  {
    logo: logo3,
    title: "Technology Choice",
    description:
      "Choosing the appropriate technology stack is vital for the success of your mobile app. We select the most appropriate frameworks and tools based on your app's requirements. This guarantees that your app benefits from the latest advancements in mobile app development.",
  },
  {
    logo: logo4,
    title: "Efficient Creation",
    description:
      "Our mobile app development services, are focused on bringing your app to life utilizing the selected technology stack. We concentrate on writing clean and efficient code that guarantees optimal performance, responsiveness, and user satisfaction. Our development process is iterative, allowing us to adapt and refine as necessary",
  },
  {
    logo: logo5,
    title: " Thorough Testing ",
    description:
      "Extensive testing is an integral component of our mobile app development process. We conduct comprehensive testing across various devices, operating systems, and scenarios to identify and rectify any issues. This ensures flawless functionality of your app for all users.",
  },
  {
    logo: logo6,
    title: "Installation and Continuous Assistance",
    description:
      "We assist you in the installation procedure, guaranteeing that your application is accessible for downloading on appropriate application marketplaces. Our dedication goes beyond installation; we offer support after the launch, addressing any inquiries and implementing upgrades to improve the user encounter.",
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
      <h2>Our Method for  Mobile App Development</h2>
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
