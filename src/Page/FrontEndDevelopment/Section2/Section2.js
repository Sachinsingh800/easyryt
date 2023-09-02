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
    title: "Design-Centred Development: ",
    description:
      "We commence with design thinking. Our front end experts collaborate closely with our design team to bring wireframes and prototypes to life. This collaboration guarantees seamless harmony between the visual elements and interactive components.  ",
  },
  {
    logo: logo2,
    title: "Responsiveness Across Devices: ",
    description:
      "The forefront must shine on all devices. Our approach is deeply rooted in the principles of responsive design, ensuring that your website or application appears and functions seamlessly across desktops, tablets, and smartphones.",
  },
  {
    logo: logo3,
    title: "User-Focused Interfaces: ",
    description:
      "Users are the core of everything we create. We develop intuitive and user-friendly interfaces that effortlessly guide visitors through your content and offerings. ",
  },
  {
    logo: logo4,
    title: "State-of-the-Art Technologies: ",
    description:
      "The ever-changing digital landscape propels us forward. Our front end experts remain up-to-date with the latest technologies, tools, and frameworks to ensure that your interfaces are contemporary, effective, and future-proof. ",
  },
  {
    logo: logo5,
    title: "Performance Enhancement: ",
    description:
      "Velocity is crucial. Our process for developing the user-facing part of websites involves implementing techniques to enhance performance, resulting in interfaces that load rapidly and provide a smooth browsing experience. ",
  },
  {
    logo: logo6,
    title: "Compatibility Across Multiple Browsers: ",
    description:
      "Whether it's Chrome, Firefox, or any other browser, your front end must function seamlessly. We thoroughly test our creations on various browsers to ensure uniformity and compatibility.",
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
      <h2>Our Method for Front End Development</h2>
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
