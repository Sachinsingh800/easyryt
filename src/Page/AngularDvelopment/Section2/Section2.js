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
    title: "Strategic Planning ",
    description:
      "Our approach to developing with AngularJS starts with a comprehensive examination of your project's goals and needs. The strategic planning process ensures that every aspect of the application aligns perfectly with your company's objectives.  ",
  },
  {
    logo: logo2,
    title: "User-Centric Design",
    description:
      "Our priority is to create interfaces that are centred around the needs of the user. These interfaces not only have a visually appealing design but also improve user engagement and satisfaction. Our design strategies aim to deliver flawless and user-friendly experiences.",
  },
  {
    logo: logo3,
    title: "Experienced Framework Proficiency ",
    description:
      "Leveraging the expertise of our team of skilled AngularJS developers, we utilize the capabilities of this well-established framework to construct robust and scalable applications. Our proficiency guarantees that your application adheres to industry best practices and meets the required standards. ",
  },
  {
    logo: logo4,
    title: "Modular Architecture",
    description:
      "With AngularJS' modular architecture, we promote greater code reusability and maintainability. We focus on developing modular components that not only enhance development efficiency but also facilitate future scalability. ",
  },
  {
    logo: logo5,
    title: "Agile Development",
    description:
      "Following an agile development methodology, we prioritize collaboration, adaptability, and regular feedback. This approach ensures that your project evolves based on your input and changing requirements. ",
  },
  {
    logo: logo6,
    title: "Continuous Support",
    description:
      "We provide ongoing maintenance, updates, and support to ensure the smooth and efficient operation of your AngularJS application over the long term.",
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
      <h1>Our Approach to Angular JS Development</h1>
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
