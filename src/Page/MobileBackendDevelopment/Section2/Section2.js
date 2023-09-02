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
    title: "Thorough App Analysis",
    description:"We commence by comprehending the objectives and functionality of your mobile application. Our team closely collaborates with you to grasp the fundamental requirements and user interactions of your app. ",
  },
  {
    logo: logo2,
    title: "Tailored Backend Approach ",
    description:
      "Acknowledging the distinctiveness of each application, our strategy revolves around crafting a personalized backend approach that aligns with your specific needs and objectives.",
  },
  {
    logo: logo3,
    title: "Seamless API Integration",
    description:
      "Effortlessly connect the frontend and backend components of your app through API integration. We ensure smooth communication, data exchange, and improved functionality.  ",
  },
  {
    logo: logo4,
    title: "Collaborative Implementation ",
    description:
      "Collaboration lies at the core of our methodology. We closely collaborate with your team to implement AWS solutions. Regular meetings, open communication, and immediate feedback ensure that the implementation stays on course and effectively tackles any obstacles. ",
  },
  {
    logo: logo5,
    title: "Optimized Database Management",
    description:
      "Our team guarantees the seamless flow of data between your app and databases, facilitating efficient data storage, retrieval, and administration. ",
  },
  {
    logo: logo6,
    title: "Focus on Scalability and Performance",
    description:
      "We design backend systems that can expand alongside the growing popularity of your app. Our approach involves optimizing for speed, responsiveness, and effective resource utilization. Robust ",
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
      <h2>Why Choose us for Our Services in Mobile Backend Development?  </h2>
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
