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
    title: "User-Centric Exploration ",
    description:
      "We commence by comprehending your intended target audience, their inclinations, and actions. This perceptive-guided approach guarantees that our blueprints are custom-tailored to satisfy user expectations. ",
  },
  {
    logo: logo2,
    title: "Strategic Skeleton Creation ",
    description:
      "Our designers fabricate comprehensive diagrams that delineate the structure and progression of your website. This assists us in identifying potential obstacles and optimizing user navigation.",
  },
  {
    logo: logo3,
    title: "Visual Brilliance ",
    description:
      "Our UI designers fashion visually appealing website interfaces that seamlessly merge aesthetics with practicality. We concentrate on colour schemes, typography, and symbols that resonate with your brand. ",
  },
  {
    logo: logo4,
    title: "Instinctive Interaction Design ",
    description:
      "We prioritize interactions that enrich user involvement. From flowing animations to instinctive motions, our blueprints establish a delightful and seamless browsing experience. ",
  },
  {
    logo: logo5,
    title: "Progressive Prototyping",
    description:
      "We build interactive models for preliminary testing. This enables us to acquire user feedback and refine blueprints before the final implementation. ",
  },
  {
    logo: logo6,
    title: "User-Centric Refinement ",
    description:
      "Feedback holds immense importance. We value your contributions and involve you throughout the design process to ensure the ultimate product aligns with your vision and objectives.",
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
      <h2>Our Method for  Website UI/UX Design</h2>
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
