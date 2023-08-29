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
    title: "Strategic Examination and Strategy",
    description:"We initiate the process with a thorough examination of your business requirements and goals. Our team collaborates with you to comprehend the purpose of the Application Programming Interface (API), its target audience, and the intended results. ",
  },
  {
    logo: logo2,
    title: "Custom API Blueprint ",
    description:
      "We strongly believe in tailored solutions. Our approach to API development involves crafting APIs that are specifically engineered to fulfil your distinct requirements, guaranteeing seamless integration with your existing systems.",
  },
  {
    logo: logo3,
    title: "Efficient Coding Strategies",
    description:
      "Our skilled developers follow top-notch coding strategies to create APIs that are not only functional but also optimized for speed and effectiveness, ensuring smooth data interchange and responsiveness. ",
  },
  {
    logo: logo4,
    title: "Comprehensive Testing and Documentation",
    description:
      "We meticulously examine our APIs to identify and resolve any potential issues before deployment. Furthermore, we provide comprehensive documentation that guarantees effortless integration and usage for both developers and users. ",
  },
  {
    logo: logo5,
    title: "Security and Verification",
    description:
      "Data security is of paramount importance. We employ robust security measures, including verification protocols, encryption, and API keys, to safeguard sensitive information and ensure secure data transfer. ",
  },
  {
    logo: logo6,
    title: "Continuous Support and Maintenance ",
    description:
      "Our dedication extends beyond deployment. We offer ongoing support, troubleshooting, and updates to ensure that your APIs perform optimally and adapt to evolving business requirements.",
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
      <h1>Our Approach for API Development</h1>
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
