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
    title: "Thoroughly Assessing Your Requirements ",
    description:"We kick off the process by comprehending your project goals and needs. Our team works closely with you to understand the extent, features, and aims of your backend framework. ",
  },
  {
    logo: logo2,
    title: "Customized Solution Design ",
    description:
      "Recognizing the distinctiveness of each project, we adopt an approach that involves crafting backend frameworks specifically tailored to meet your individual demands, thus ensuring optimal effectiveness. ",
  },
  {
    logo: logo3,
    title: "Efficient Development and Integration",
    description:
      "Our skilled developers transform designs into reality through meticulous coding and seamless integration. We ensure that your backend framework is developed with efficiency and seamlessly integrates with other components.",
  },
  {
    logo: logo4,
    title: "Scalability and Performance Optimization",
    description:
      "We proactively design for growth. Our approach encompasses optimizing backend frameworks to handle increased loads while maintaining excellent performance.  ",
  },
  {
    logo: logo5,
    title: "Implementation of Security Measures",
    description:
      "We implement robust security measures, including encryption, authentication, and secure data handling, to protect your backend framework.  ",
  },
  {
    logo: logo6,
    title: "Ongoing Maintenance and Enhancement",
    description:
      "Our commitment extends beyond development. We provide continuous monitoring, troubleshooting, and updates to maintain the reliability and currency of your backend framework.",
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
      <h1>Our Approach for Backend Framework Development Services</h1>
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
