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
    title: "Detailed Analysis",
    description:"We start by thoroughly examining your business requirements and current systems. Our team works closely with you to grasp the breadth and objectives of the integration.  ",
  },
  {
    logo: logo2,
    title: "Customized Integration Strategy",
    description:
      "Recognizing the distinctiveness of each enterprise, our approach involves devising a tailored integration strategy that seamlessly aligns with your specific needs. ",
  },
  {
    logo: logo3,
    title: "Efficient Implementation of Integration",
    description:
      "Our skilled professionals convert strategy into action with careful execution. We ensure the smooth and secure integration of your cloud services.  ",
  },
  {
    logo: logo4,
    title: "Excellence in Data Migration",
    description:
      "Effortlessly transfer your data to the cloud with our expertise. We prioritize data integrity during the migration process, guaranteeing accurate and seamless transfer and transformation of your information.  ",
  },
  {
    logo: logo5,
    title: "Real-time Connectivity",
    description:
      "Our approach facilitates real-time data exchange and connectivity among different cloud services, ensuring effortless collaboration and streamlined workflows.  ",
  },
  {
    logo: logo6,
    title: "Continuous Monitoring and Support ",
    description:
      "Our commitment extends beyond integration. We provide continuous monitoring, troubleshooting, and support to ensure optimal performance of your integrated cloud services.",
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
      <h2>Our Approach to Smooth Integration of Cloud Services </h2>
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
