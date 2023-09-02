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
    title: "Comprehensive Mastery",
    description:
      "Our Full Stack Web Developers possess profound expertise in both the front-end and back-end technologies. This extensive skillset empowers us to seamlessly take your project from conception to completion, without missing a single detail.  ",
  },
  {
    logo: logo2,
    title: "Strategic Framework",
    description:
      "We begin by thoroughly understanding the objectives and requirements of your project. Our Full Stack Developers meticulously craft a strategic framework that ensures your application not only captivates visually but also stands robustly in terms of its structure.",
  },
  {
    logo: logo3,
    title: "Dynamic Interfaces",
    description:
      "User engagement starts with the front end. With our Full Stack Web Development Services, we create interfaces that are not only visually captivating but also responsive across various devices, guaranteeing a consistent and delightful experience. ",
  },
  {
    logo: logo4,
    title: "Efficient Data Management",
    description:
      "The back end is the driving force behind the functionality. We proficiently develop and optimize databases, ensuring efficient management and retrieval of data. This seamless interaction between the front end and the data layer enhances the overall performance of your application. ",
  },
  {
    logo: logo5,
    title: "Server-Side Scripting",
    description:
      "Our Full Stack Developers possess a high level of proficiency in server-side scripting languages such as Node.js, Python, and PHP. This expertise enables the facilitation of dynamic interactions, processing, and data administration. ",
  },
  {
    logo: logo6,
    title: "API Integration",
    description:
      "In the interconnected digital realm, APIs function as bridges between various systems. Our Full Stack Developers seamlessly integrate APIs, facilitating communication between your application and external services.",
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
      <h2>Our Method for Full Stack Development</h2>
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
