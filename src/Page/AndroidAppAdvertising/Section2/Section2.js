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
    title: "Requirement Analysis and Planning",
    description:
      "We begin by getting to know about your app's necessities and goals. Our crew collaborates with you to accumulate insights into the preferred capabilities, user interactions, and statistics drift. This analysis is the muse of our backend development approach.  ",
  },
  {
    logo: logo2,
    title: "Database Design and Management",
    description:
      "Efficient records control is on the centre of a successful app. Our mobile app backend development team designs and enforces database systems that optimize data garage, retrieval, and control. Our knowledge consists of relational databases, NoSQL databases, and statistics caching mechanisms to ensure clean and fast facts transactions.",
  },
  {
    logo: logo3,
    title: "API Development",
    description:
      "Robust APIs (Application Programming Interfaces) are the bridge among the frontend and backend of your app. We develop APIs that enable seamless communication among extraordinary components of your app, making sure easy and efficient information trade takes place. ",
  },
  {
    logo: logo4,
    title: "Security Implementation",
    description:
      "Security is paramount in the virtual landscape. Our mobile app backend development specialists employ the best safety practices to shield consumer statistics, prevent unauthorized admission, guarding the app against potential threats. We implement authentication, authorization, encryption, and other safety features to make certain, that the integrity of your app's backend is strong. ",
  },
  {
    logo: logo5,
    title: "Scalability and Performance Optimization",
    description:
      "We recognize that apps want to scale. Our backend development focuses on scalability and performance optimization, making sure that your app can manage increased visitors and utilization without compromising on its pace or capability. ",
  },
  {
    logo: logo6,
    title: "Integration of Third-Party Services",
    description:
      "To beautify your app's competencies, we combine 1/3-birthday party services like price gateways, social media systems, and analytics tools. These integrations increase consumer experiences and offer treasured insights in your commercial enterprise growth.",
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
      <h2>Our Method for Cross-Platform App Development</h2>
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
