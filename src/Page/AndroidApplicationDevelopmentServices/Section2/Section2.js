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
    title: "Idea Generation and Conceptualization",
    description:
      "We start by means of expertise your business objectives, target audience, and precise cost proposition. Our specialists collaborate with you to brainstorm thoughts and create a concept that aligns together with your imagination and prescient.  ",
  },
  {
    logo: logo2,
    title: "Design and User Experience",
    description:
      "User-centric design is on the middle of our Android app development manner. We create intuitive and visually appealing interfaces that enhance user engagement and force nice stories. ",
  },
  {
    logo: logo3,
    title: "Development and Testing",
    description:
      "Our skilled developers use the latest gear and technologies to carry your app concept to existence. Rigorous trying out and first-rate guarantee make sure that the app functions perfectly throughout specific Android devices and variations. ",
  },
  {
    logo: logo4,
    title: "Performance Optimization",
    description:
      "We optimize app performance to make sure short loading times, clean navigation, and green use of tool resources. This results in an app that customers like to engage with, enhancing retention and conversion rates.",
  },
  {
    logo: logo5,
    title: "  Launch and Deployment ",
    description:
      "We assist you in launching your app at the Google Play Store, making sure that it meets all necessary guidelines and necessities. Our crew manages the deployment procedure to make your app available for your audience seamlessly.",
  },
  {
    logo: logo6,
    title: "Post-release Support and Updates",
    description:
      "Our dedication does not stop with the app's release. We offer ongoing assist, screen performance, and provide timely updates to preserve your app applicable and green.",
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
      <h1>Our Method for Android app development</h1>
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
