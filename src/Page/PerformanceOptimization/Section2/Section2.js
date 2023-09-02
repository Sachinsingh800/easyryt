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
    title: "Comprehensive Evaluation",
    description:"We commence by conducting a comprehensive analysis of the performance of your digital platform. Our team collaboratively works with you to comprehend any existing obstacles and areas that can be improved. ",
  },
  {
    logo: logo2,
    title: "Customized Enhancement Strategy ",
    description:
      "Acknowledging the distinctiveness of each platform, our approach involves devising a tailor-made enhancement strategy that addresses specific challenges and aligns with your objectives. ",
  },
  {
    logo: logo3,
    title: "Efficient Code Assessment",
    description:
      "We meticulously assess the codebase of your platform, identifying opportunities for optimization. Our experts refine the code to augment efficiency and decrease loading times. ",
  },
  {
    logo: logo4,
    title: "Streamlined Resource Management",
    description:
      "We optimize the utilization of resources, including server configurations and database queries, to minimize response times and resource consumption.  ",
  },
  {
    logo: logo5,
    title: "Integration of Content Delivery Networks",
    description:
      "Our strategy incorporates the seamless integration of Content Delivery Networks (CDNs) to disseminate content globally, reducing latency and enhancing overall loading times. ",
  },
  {
    logo: logo6,
    title: "User-Focused Testing",
    description:
      "We conduct thorough testing from the perspective of end-users, ensuring that optimizations do not compromise functionality and that the end-user experience is improved.",
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
      <h2>Our Approach for Effective Performance Enhancement </h2>
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
