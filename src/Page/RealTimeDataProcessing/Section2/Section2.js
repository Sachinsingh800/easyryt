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
    title: "Strategic Examination",
    description:"We initiate by comprehending your business goals and data sources. Our team collaborates closely with you to identify the most pertinent data streams for live processing.  ",
  },
  {
    logo: logo2,
    title: "Personalized Solution Design",
    description:
      "Acknowledging the distinctiveness of each business, our approach encompasses crafting tailor-made data processing solutions that precisely align with your specific requirements. ",
  },
  {
    logo: logo3,
    title: "Streamlined Data Integration",
    description:
      "Seamlessly combine data from diverse sources into a cohesive platform. We guarantee that your data flows seamlessly, empowering quick and precise processing.  ",
  },
  {
    logo: logo4,
    title: "Cutting-Edge Analytics and Algorithms",
    description:
      "We employ state-of-the-art analytics and algorithms to process and scrutinize data in real-time. This empowers us to unearth insights, patterns, and trends as they transpire.  ",
  },
  {
    logo: logo5,
    title: "Automated Event Detection",
    description:
      "Our approach incorporates establishing automated systems that identify occurrences and triggers in real-time. This ensures prompt notifications and facilitates proactive decision-making. ",
  },
  {
    logo: logo6,
    title: "Expandable Architecture ",
    description:
      "We devise data processing frameworks that can expand alongside your data volumes. Our solutions are engineered to handle increased workloads without compromising performance.",
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
      <h1>Our Approach to Efficient Real-Time Data Processing </h1>
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
