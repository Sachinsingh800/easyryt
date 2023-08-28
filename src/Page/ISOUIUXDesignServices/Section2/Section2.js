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
      "We commence by comprehending your intended audience, their inclinations, and conducts. This investigation directs our design choices, guaranteeing that each component resonates with your users .  ",
  },
  {
    logo: logo2,
    title: "Strategic Blueprinting ",
    description:
      "Our designers generate comprehensive blueprints that outline your app's structure and progression. This phase enables us to envision user journeys, pinpoint potential challenges, and optimize the user understanding.",
  },
  {
    logo: logo3,
    title: "Captivating Visual Styling",
    description:
      "Our UI designers craft visually captivating iOS interfaces that harmonize with your brand identity. We emphasize colour schemes, typography, symbols, and visuals that produce a coherent and captivating understanding. ",
  },
  {
    logo: logo4,
    title: "Intuitive Interaction Blueprint ",
    description:
      "We prioritize establishing interactions, gestures, and animations that enhance the ease of use and engagement. Our goal is to guarantee that users navigate your app effortlessly and enjoyably. ",
  },
  {
    logo: logo5,
    title: "Evolutionary Prototyping",
    description:
      "We develop interactive prototypes to simulate the app understanding. This permits us to gather valuable feedback at an early stage, facilitating design enhancements and minimizing revisions after development. ",
  },
  {
    logo: logo6,
    title: "iOS Design Principles",
    description:
      "Our designers are well-versed in iOS design principles, making certain that your app not only complies with Apple's criteria but also offers a familiar and intuitive understanding to iOS users.",
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
      <h1>Our Method for Developing Our Approach to iOS UI/UX Design</h1>
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
