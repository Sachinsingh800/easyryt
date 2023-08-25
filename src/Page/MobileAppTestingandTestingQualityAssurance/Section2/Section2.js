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
    title: "Examination Approach Growth",
    description:
      "We commence by producing a customized examination approach for your application. This approach outlines the examination goals, extent, methodologies, and tools to be employed. It serves as a roadmap to direct the examination process and guarantees comprehensive coverage. ",
  },
  {
    logo: logo2,
    title: "Practical Examination",
    description:
      "Our testers carefully evaluate every facet of your application's functionality. We validate that each characteristic, key, connection, and interaction behave as intended, guaranteeing a seamless user experience and preventing any interruptions. ",
  },
  {
    logo: logo3,
    title: "User Interface (UI) Examination",
    description:
      "A visually appealing and user-friendly user interface is essential for user involvement. We conduct UI examination to ensure that your application's design components, layout, fonts, colours, and images align with your brand identity and provide a pleasant visual experience.",
  },
  {
    logo: logo4,
    title: "Performance Examination",
    description:
      "Application performance directly impacts user satisfaction. Our Mobile Application Testing Services asses your application's responsiveness, loading times, and stability under different network conditions and loads. Performance examination helps us identify and address bottlenecks that could affect user experiences.",
  },
  {
    logo: logo5,
    title: "Compatibility Examination",
    description:
      "With a multitude of devices, screen sizes, and operating systems in use, compatibility examination is crucial. We test your application across various devices, platforms, and screen resolutions to ensure consistent functionality and appearance.",
  },
  {
    logo: logo6,
    title: "Security Examination",
    description:
      "In an era of increasing cybersecurity concerns, safeguarding user data is paramount. Our security examination identifies vulnerabilities, potential breaches, and data leaks, ensuring that your application meets stringent security standards.",
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
      <h1>Our Method for Mobile Application Testing </h1>
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
