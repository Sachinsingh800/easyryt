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
    title: "User-Focused Design: ",
    description:
      "Our approach revolves around creating interfaces that prioritize the needs of the user. We carefully design and prototype applications to ensure a seamless and captivating user experience that aligns with the preferences of your target audience.  ",
  },
  {
    logo: logo2,
    title: "Component Versatility: ",
    description:
      "We harness the capabilities of Reacts component-based architecture to develop elements that are reusable and easily adaptable. This not only speeds up development time but also reduces unnecessary repetition and maintains a cohesive design throughout your application.",
  },
  {
    logo: logo3,
    title: "Agile Software Development: ",
    description:
      "We embrace an agile software development methodology, breaking projects into manageable iterations. This agile approach allows for flexibility, quick feedback loops, and continuous improvement, ensuring that your vision is effectively brought to life. ",
  },
  {
    logo: logo4,
    title: "Performance Enhancement: ",
    description:
      "Performance is a fundamental aspect of our development process. By leveraging Reacts virtual DOM, we guarantee smooth performance for your application, facilitating rapid updates and seamless interactions that keep users engaged. ",
  },
  {
    logo: logo5,
    title: "Continuous Growth: ",
    description:
      "Our commitment doesn't end at deployment. We provide ongoing maintenance, updates, and support to ensure the flawless operation of your application. We stay up-to-date with the latest advancements in React to continually enhance your application's performance and features. ",
  },
  {
    logo: logo6,
    title: "Collaborative Partnership:  ",
    description:
      "Our team works closely with yours, fostering open communication, shared objectives, and a deep understanding of your project's requirements.",
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
      <h2>Our Approach to React JS Development</h2>
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
