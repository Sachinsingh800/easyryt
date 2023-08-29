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
    title: "Thorough Evaluation",
    description:
      "We commence by acquiring an in-depth comprehension of your organization's exclusive requirements and goals. Our team carries out a comprehensive evaluation of your present framework, applications, and workflows to tailor solutions from Google Cloud that seamlessly align with your objectives.  ",
  },
  {
    logo: logo2,
    title: "Strategic Development  ",
    description:
      "Equipped with insights from the evaluation, we formulate a strategic blueprint that delineates the migration, implementation, and optimization phases. This blueprint acts as a roadmap for a streamlined and structured voyage with Google Cloud that minimizes disruptions and maximizes advantages.",
  },
  {
    logo: logo3,
    title: "Customized Approaches",
    description:
      "Acknowledging the individuality of each business, we specialize in creating personalized Google Cloud approaches. Whether it involves selecting the fitting Google Cloud services, designing an adaptable infrastructure, or enhancing application effectiveness, our approaches are crafted to suit your exact specifications. ",
  },
  {
    logo: logo4,
    title: "Collaborative Execution ",
    description:
      "Collaboration lies at the core of our methodology. We closely collaborate with your team to execute Google Cloud solutions. Regular communication, transparent feedback loops, and real-time adjustments ensure that the execution remains on course and effectively tackles challenges. ",
  },
  {
    logo: logo5,
    title: "Continuous Enhancement",
    description:
      "Our dedication expands further than execution. We offer persistent surveillance and enhancement amenities to guarantee that your Google Cloud setting operates at its highest efficiency. Consistent evaluations and refining ensure that you're obtaining utmost worth from your Google Cloud investment. ",
  },
  {
    logo: logo6,
    title: "Empowering Your Staff ",
    description:
      "Above and beyond technological resolutions, we have faith in empowering your staff with the understanding and abilities to proficiently handle and utilize Google Cloud amenities. Via training, workshops, and documentation, we equip your team to confidently traverse the Google Cloud terrain.",
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
      <h1>Our Approach to Google Cloud Services</h1>
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
