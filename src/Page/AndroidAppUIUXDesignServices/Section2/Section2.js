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
    title: "User-Oriented Research ",
    description:
      "We commence by thoroughly understanding your target audience including their preferences, behaviour patterns, and pain points. This insightful research heavily influences our design choices to ensure that every component caters to your users' requirements.  ",
  },
  {
    logo: logo2,
    title: "Strategic Blueprint Creation",
    description:
      "Our skilled designers create a blueprint that outlines the structural framework and user flow of the app. This step allows us to identify potential obstacles early on and refine the user journey, resulting in optimal usability.",
  },
  {
    logo: logo3,
    title: "Engaging UI Design",
    description:
      "Utilizing our knowledge of your brand and user base, we carefully develop visually captivating UI designs that strongly resonate with your target audience. Each colour, icon, and element is thoughtfully selected to create a cohesive and visually pleasing interface. ",
  },
  {
    logo: logo4,
    title: "Intuitive Interaction Design",
    description:
      "Our team concentrates on crafting interactions that create a user-friendly and pleasurable experience when utilizing your application. We integrate gestures, animations, and transitions that elevate the overall encounter, guaranteeing smooth navigation for users. ",
  },
  {
    logo: logo5,
    title: "Prototype Testing",
    description:
      "We construct interactive prototypes that imitate the functionality of your application. This permits us to obtain early user input, enabling us to enhance the design before proceeding with development. ",
  },
  {
    logo: logo6,
    title: "Continuous Enhancement  ",
    description:
      "We believe in ongoing improvement. Throughout the design procedure, we value your feedback and iterate on the design based on user insights and our proficiency. This iterative approach guarantees that the ultimate design perfectly aligns with your vision.",
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
      <h2>Our Method for  Developing a Android App UI/UX Design  </h2>
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
