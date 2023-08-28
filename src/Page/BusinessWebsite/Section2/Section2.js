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
    title: "Exploration and Tactics",
    description:
      "We thoroughly immerse ourselves in comprehending your brand, goals, and intended readership. This understanding establishes the groundwork of our approach, enabling us to develop a tailored roadmap for your triumph.  ",
  },
  {
    logo: logo2,
    title: "Conceptualization and Implementation ",
    description:
      "Equipped with a well-thought-out plan, we embark on a voyage of creativity. Our designers meticulously formulate visually striking ideas, while our developers breathe life into these designs using their expertise in coding and mastery of the WordPress platform.",
  },
  {
    logo: logo3,
    title: "Personalization and Functionality ",
    description:
      "Your website isn't merely a digital pamphlet – it's a vibrant encounter. We leverage the capabilities of WordPress plugins to customize functionality, encompassing everything from e-commerce solutions to interactive forms, ensuring that each element seamlessly aligns with your objectives. ",
  },
  {
    logo: logo4,
    title: " Enhancement and Search Engine Optimization",
    description:
      "A captivating website is only effective if it can be easily discovered. We enhance every aspect of your website, including its speed and responsiveness, and infuse it with SEO strategies that amplify your online presence. ",
  },
  {
    logo: logo5,
    title: " Safety and Dependability",
    description:
      "We comprehend the significance of protecting your digital investment. Our intricate security measures guarantee that your website remains fortified against potential threats, providing you with a sense of serenity. ",
  },
  {
    logo: logo6,
    title: "Launch and Continuation  ",
    description:
      "The introduction of your website is merely the commencement. Our dedication extends through ongoing assistance and upkeep, ensuring that your website remains current, secure, and entirely functional.",
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
      <h1>Our Approach: Creating Excellence with Every Pixel</h1>
      <p className={style.para}>
        Crafting a WordPress platform that connects with your target audience
        and achieves your business goals necessitates a thorough method. Our
        process revolves around collaboration, innovation, and unwavering
        commitment to delivering exceptional outcomes:
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
