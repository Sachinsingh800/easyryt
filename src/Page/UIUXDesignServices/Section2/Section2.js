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
    title: "User-Focused Investigation",
    description:
      "We commence by comprehending the requirements, actions, and inclinations of your intended audience. This approach driven by insightful understanding becomes the basis for our design choices, guaranteeing that every component caters to your users.  ",
  },
  {
    logo: logo2,
    title: "Strategic Blueprinting  ",
    description:
      "Our designers construct detailed diagrams outlining the structure and progression of your digital offering. This plan aids us in envisioning the user's path and identifying potential areas for enhancement. ",
  },
  {
    logo: logo3,
    title: "Enthralling Appearance ",
    description:
      "Our UI designers foreground their artistic expertise, crafting visually captivating interfaces that embody your brand's identity. We maintain uniformity in design elements, ensuring a harmonious and captivating user encounter. ",
  },
  {
    logo: logo4,
    title: "Intuitive Interaction Design ",
    description:
      "We concentrate on creating interactions that make utilizing your digital creation effortless and enjoyable. From seamless transitions to instinctive gestures, we enhance the overall user experience. ",
  },
  {
    logo: logo5,
    title: "Progressive Prototyping",
    description:
      "We devise interactive prototypes to simulate the user's encounter. This enables us to gather valuable feedback early on and refine the design based on genuine user insights. ",
  },
  {
    logo: logo6,
    title: "User-Focused Enhancement ",
    description:
      "Feedback plays an integral role in our procedure. We highly value your input and integrate it into the design journey, guaranteeing the final product perfectly aligns with your vision and objectives.",
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
      <h2>Our Method for  Developing  UI/UX Designs</h2>
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
