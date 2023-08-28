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
    title: "Comprehensive Research",
    description:
      "We thoroughly examine your distinct style, goals, and target audience in order to design a portfolio website that perfectly aligns with your creative vision.  ",
  },
  {
    logo: logo2,
    title: "Compelling Visuals ",
    description:
      "Our designers combine their creativity with design principles that enhance your work, guaranteeing that your portfolio leaves a lasting impression on visitors.",
  },
  {
    logo: logo3,
    title: "Seamless Presentation ",
    description:
      "We seamlessly integrate your projects, enabling visitors to effortlessly navigate through your portfolio and fully immerse themselves in your creations. ",
  },
  {
    logo: logo4,
    title: "User-Friendly Interface ",
    description:
      "Ensuring that your portfolio website is easy to navigate is crucial. Our design approach prioritizes the user, providing a seamless and enjoyable experience across all devices. ",
  },
  {
    logo: logo5,
    title: "Dynamic Layout",
    description:
      "Your portfolio deserves to stand out on all devices. Our dynamic layout ensures an engaging presentation on desktops, tablets, and smartphones. ",
  },
  {
    logo: logo6,
    title: " Search Engine Optimization (SEO) ",
    description:
      "To enhance your online visibility, we implement SEO strategies that boost your website's rankings on search engines, expanding your reach to a wider audience.",
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
      <h1>Our Approach to Developing a Portfolio Website in WordPress</h1>
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
