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
    title: "Strategic Preparation ",
    description:
      "We commence each Vue.js project with a comprehensive analysis of your goals and needs. Our strategy revolves around careful planning to ensure that your application perfectly aligns with your business aspirations.  ",
  },
  {
    logo: logo2,
    title: "User-Focused Creation ",
    description:
      "Our design philosophy centres on building interfaces that are not only visually appealing but also enhance user involvement and contentment. We prioritize seamless user experiences that promote interaction",
  },
  {
    logo: logo3,
    title: "Effectiveness and Efficiency",
    description:
      "We harness Vue.js's lightweight nature to guarantee optimal loading speeds and exceptional performance. Our emphasis on efficiency ensures the development of swift and responsive applications. ",
  },
  {
    logo: logo4,
    title: "Gradual Integration",
    description:
      "Our approach embraces Vue.js's progressive framework, enabling effortless integration into both current and upcoming projects. This adaptable approach ensures a smooth development process and minimal disruptions. ",
  },
  {
    logo: logo5,
    title: "Agile Development",
    description:
      "We adhere to an agile development methodology that encourages collaboration and adaptability. This approach allows for fast feedback loops, continuous enhancements, and the ability to adapt to evolving project requirements. ",
  },
  {
    logo: logo6,
    title: "Continuous Support ",
    description:
      "Our commitment extends beyond development. We provide ongoing support, updates, and maintenance to ensure the smooth operation and long-lasting performance of your Vue.js application.",
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
      <h1>Our Approach for Vue JS Development </h1>
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
