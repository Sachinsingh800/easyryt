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
    title: "Thorough Evaluation of Requirements",
    description:"Our first step is to deeply comprehend the needs and goals of your business. Our team works closely together with you to fully understand the scale, workload, and performance expectations of your server setup.",
  },
  {
    logo: logo2,
    title: "Customized Design and Planning",
    description:
      "Recognizing that each business is unique, we take a personalized approach to create server architectures that are tailored precisely to meet your specific requirements. This ensures maximum efficiency in every aspect.",
  },
  {
    logo: logo3,
    title: "Efficient Implementation and Configuration",
    description:
      "Our team of skilled professionals transform designs into reality with meticulous attention to detail. We ensure that your servers are set up efficiently, following industry-leading practices for optimal performance and security.",
  },
  {
    logo: logo4,
    title: "Optimization for Peak Performance",
    description:
      "We fine-tune server configurations to allocate resources effectively, resulting in optimal speed, responsiveness, and efficient data processing. Our solutions are designed to handle heavy workloads seamlessly. ",
  },
  {
    logo: logo5,
    title: "Scalability and Future-Proofing",
    description:
      "Our architecture designs are built to accommodate growth. We plan for scalability, ensuring that your solutions can adapt as your business expands, all while maintaining high levels of performance.",
  },
  {
    logo: logo6,
    title: "Comprehensive Security Measures ",
    description:
      "Data security is of utmost importance to us. We implement robust security protocols, regular updates, and adhere to industry standards to safeguard your server environment and protect your valuable information.",
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
      <h1>Our Approach to Providing Exceptional Services for Server Infrastructure and Configuration</h1>
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
