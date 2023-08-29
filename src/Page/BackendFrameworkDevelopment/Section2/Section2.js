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
    title: "Holistic Evaluation ",
    description:"We embark on the journey of your AWS by gaining a profound comprehension of your commercial necessities and objectives. Our crew conducts an extensive evaluation of your present foundation and procedures to devise personalized AWS resolutions that harmonize flawlessly with your goals. ",
  },
  {
    logo: logo2,
    title: "Strategic Plan ",
    description:
      "Equipped with discernments from the evaluation, we manufacture a strategic plan that delineates the migration, implementation, and optimization stages. This roadmap serves as a compass, guaranteeing an organized and seamless AWS metamorphosis that minimizes disruptions and maximizes advantages.",
  },
  {
    logo: logo3,
    title: "Tailored Resolutions",
    description:
      "Recognizing that each enterprise is distinct, we specialize in fashioning customized AWS solutions. Whether it involves selecting the appropriate AWS services, designing an adaptable infrastructure, or enriching application performance, our resolutions are tailored to suit your precise requirements. ",
  },
  {
    logo: logo4,
    title: "Collaborative Implementation ",
    description:
      "Collaboration lies at the core of our methodology. We closely collaborate with your team to implement AWS solutions. Regular meetings, open communication, and immediate feedback ensure that the implementation stays on course and effectively tackles any obstacles. ",
  },
  {
    logo: logo5,
    title: "Continual Improvement",
    description:
      "Our dedication exceeds the primary deployment. We offer continuous supervision and improvement facilities to ensure that your AWS ecosystem functions at its highest effectiveness. Routine evaluations and refinement ensure that you are extracting the maximum benefits from your AWS venture. ",
  },
  {
    logo: logo6,
    title: "Empowering through Knowledge Exchange ",
    description:
      "In addition to technical resolutions, we advocate for empowering your workforce with the abilities and understanding to proficiently oversee and optimize AWS utilities. By means of training, interactive sessions, and comprehensive documentation, we equip your team to confidently navigate the AWS realm.",
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
      <h1>Our Approach to Amazon Web Services</h1>
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
