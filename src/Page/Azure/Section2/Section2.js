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
    title: "Thorough Evaluation ",
    description:
      "We commence by fully comprehending the distinctive demands and objectives of your enterprise. Our team conducts an extensive evaluation of your current framework, applications, and procedures to customize Azure solutions that perfectly align with your aims.  ",
  },
  {
    logo: logo2,
    title: "Strategic Plan",
    description:
      "Equipped with insights from the evaluation, we formulate a strategic plan outlining the migration, establishment, and enhancement phases. This plan serves as a blueprint for a smooth and organized Azure journey that minimizes disruptions and maximizes advantages.",
  },
  {
    logo: logo3,
    title: "Personalized Solutions",
    description:
      "There is no universal approach when it comes to Azure services. We take pride in tailoring solutions that are precisely customized to your requirements. Whether it's selecting the appropriate Azure services, designing an infrastructure, or developing cloud-native applications, our solutions are as exceptional as your enterprise. ",
  },
  {
    logo: logo4,
    title: "Collaborative Implementation ",
    description:
      "Collaboration lies at the core of our approach. We work closely with your team to carry out Azure solutions. Regular milestones, transparent communication, and real-time feedback ensure that the implementation stays on track, tackles any obstacles, and fulfils your evolving demands. ",
  },
  {
    logo: logo5,
    title: "Continuous Observation and Enhancement",
    description:
      "Our dedication doesn't stop with execution. We deliver continuous observation and enhancement solutions to guarantee that your azure surroundings are functioning at their best capacity. Consistent evaluations and fine-tuning assure that you are maximizing the benefits of your azure investments. ",
  },
  {
    logo: logo6,
    title: "Enabling Your Team  ",
    description:
      "As we collaborate, we firmly believe in empowering your team with the abilities and understanding to efficiently handle and utilize azure services. By means of training, interactive sessions, and comprehensive documents, we equip your team with the necessary resources to navigate and take advantage of the potential of azure.",
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
      <h2>Our Approach to Azure Services</h2>
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
