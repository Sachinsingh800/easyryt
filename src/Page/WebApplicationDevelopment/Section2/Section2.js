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
    title: "Inclusive Necessities Assessment",
    description:"We commence by comprehending your project objectives and business prerequisites. Our team collaborates closely with you to grasp the crux of your web app's purpose and functionalities. ",
  },
  {
    logo: logo2,
    title: "Tailored Development Blueprint ",
    description:
      "Acknowledging the singularity of each project, our methodology involves crafting a personalized development blueprint that aligns with your specific requirements and goals. ",
  },
  {
    logo: logo3,
    title: "Holistic Full-Stack Development",
    description:
      "Seamlessly integrating frontend and backend expertise, we ensure your web app is crafted as a complete, operational, and cohesive entity.  ",
  },
  {
    logo: logo4,
    title: "User-Focused UI/UX Design",
    description:
      "Prioritizing user experiences, we create intuitive and visually captivating interfaces that captivate users and guarantee effortless navigation through your web applications.  ",
  },
  {
    logo: logo5,
    title: "Efficiency and Performance Enhancement",
    description:
      "We optimize for velocity and responsiveness, ensuring your web app delivers a seamless user experience, even during periods of high traffic.  ",
  },
  {
    logo: logo6,
    title: "Scalability and Future-Proofing",
    description:
      "Our approach is forward-thinking. We engineer web applications that can adapt alongside your business, accommodating heightened user demands and future refinements.",
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
      <h1>Our Approach to Web Application Development Services</h1>
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
