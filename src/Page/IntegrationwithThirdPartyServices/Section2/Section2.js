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
    title: "Analysis ",
    description:"We initiate the process by comprehending your business aims and the third-party services you desire to incorporate. Our team closely collaborates with you to identify the most appropriate opportunities for collaboration.  ",
  },
  {
    logo: logo2,
    title: "Customized Collaboration Planning",
    description:
      "Acknowledging the distinctiveness of each collaboration, our approach involves devising a tailor-made strategy that caters to specific requirements and aligns with your objectives. ",
  },
  {
    logo: logo3,
    title: "Streamlined API Collaboration",
    description:
      "Effortlessly link your systems with external APIs. We guarantee seamless communication, data exchange, and functionality improvement. ",
  },
  {
    logo: logo4,
    title: "Data Protection and Compliance",
    description:
      "We prioritize the security of your data and adhere to regulatory standards. Our professionals implement secure collaboration protocols to safeguard confidential information. ",
  },
  {
    logo: logo5,
    title: "Thorough Testing and Quality Assurance",
    description:
      "Meticulous testing forms the foundation of our approach. We extensively test collaborations to ensure seamless operation without any disruptions to existing systems.",
  },
  {
    logo: logo6,
    title: "Continuous Support ",
    description:
      "Our approach encompasses ongoing assistance after integration. We are readily available to address any concerns, provide updates, and ensure the smooth operation of your integrated systems.",
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
      <h1>Our Approach for a Smooth Third-Party Collaboration </h1>
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
