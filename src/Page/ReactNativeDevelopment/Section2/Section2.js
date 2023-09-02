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
    title: "Strategic Planning  ",
    description:
      "Our approach to developing React Native apps starts with a comprehensive understanding of the objectives and target audience of your project. Through strategic planning, we guarantee that every aspect of the application aligns seamlessly with your business goals.  ",
  },
  {
    logo: logo2,
    title: "User-Centric Design  ",
    description:
      "Our priority is to create interfaces centred around the user, which not only have an appealing visual aesthetic, but also enhance user engagement and satisfaction. Our design strategies focus on providing smooth and intuitive user experiences.",
  },
  {
    logo: logo3,
    title: "Cross-Platform Excellence  ",
    description:
      "By leveraging the cross-platform capabilities of React Native, we ensure that your app functions flawlessly on both iOS and Android devices. This approach saves time and reduces costs while expanding your reach to a wider audience. ",
  },
  {
    logo: logo4,
    title: "Component Reusability  ",
    description:
      "The component-based structure of React Native allows us to reuse code components across multiple platforms, improving development efficiency and maintaining design consistency and functionality. ",
  },
  {
    logo: logo5,
    title: "Performance Optimization ",
    description:
      "We take advantage of React Native's native components to guarantee quick loading times and responsive interactions, providing users with a smooth and captivating experience. ",
  },
  {
    logo: logo6,
    title: "Ongoing Support ",
    description:
      "Our commitment extends beyond development. We offer continuous maintenance, updates, and support to keep your React Native app running flawlessly and adapting to evolving user expectations.",
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
      <h2>Our Approach to React Native Development</h2>
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
