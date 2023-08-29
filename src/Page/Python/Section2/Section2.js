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
    title: "Thorough Analysis of Requirements",
    description:"We initiate by deeply understanding your project requirements and goals. Our team conducts in-depth analysis to ensure we comprehend the complexities of your vision.  ",
  },
  {
    logo: logo2,
    title: "Tailored Solution Design",
    description:
      "We acknowledge the distinctiveness of each project. Our solutions are meticulously crafted to seamlessly align with your specific needs, resulting in Python applications that cater to your unique business requirements. ",
  },
  {
    logo: logo3,
    title: "Experienced Python Developers",
    description:
      "Our skilled Python developers showcase their expertise. With a profound understanding of Python's capabilities, we convert your ideas into code that is not only functional but also refined and effective. ",
  },
  {
    logo: logo4,
    title: "Collaborative Development",
    description:
      "We believe in a collaborative approach. Throughout the development process, we maintain open and transparent communication, incorporate your feedback, and ensure that our solutions evolve according to your vision.  ",
  },
  {
    logo: logo5,
    title: "Scalability and Future-Proofing",
    description:
      "Our applications are designed to accommodate growth. Leveraging Python's adaptability, we create solutions that can expand alongside your business, ensuring sustained relevance and achievement.  ",
  },
  {
    logo: logo6,
    title: "Extensive Testing and Maintenance ",
    description:
      "We subject our applications to rigorous testing to identify and resolve any potential issues. Our commitment extends beyond deployment; we provide continuous support to ensure your Python applications continue to perform optimally."
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
      <h1>Our Approach to Python Development</h1>
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
