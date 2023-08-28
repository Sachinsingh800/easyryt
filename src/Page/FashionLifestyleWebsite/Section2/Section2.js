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
    title: "Aesthetic Analysis",
    description:
      "We closely examine the aesthetic and values of your brand, comprehending your distinct style in order to design a website that authentically reflects your fashion identity.  ",
  },
  {
    logo: logo2,
    title: "Visual Allure",
    description:
      "Our team of designers injects boundless creativity into every element, crafting visually captivating designs that effectively convey the essence of your fashion lifestyle.",
  },
  {
    logo: logo3,
    title: "Showcasing Collections",
    description:
      "We seamlessly integrate your collections, enabling visitors to effortlessly explore and engage with your fashion creations through an intuitive browsing experience. ",
  },
  {
    logo: logo4,
    title: "User-Friendly Navigation",
    description:
      "Just as a fashionista navigates trends effortlessly, we ensure that visitors can seamlessly navigate your website. Our user-centric design guarantees a smooth and enjoyable browsing journey. ",
  },
  {
    logo: logo5,
    title: "Mobile-Friendly Design",
    description:
      "Presentation is paramount in the fashion world. That's why our design is responsive, ensuring that your website looks stunning on desktops, tablets, and smartphones a like. ",
  },
  {
    logo: logo6,
    title: "Search Engine Optimization (SEO) ",
    description:
      "To amplify the digital reach of your fashion brand, we implement SEO strategies that enhance your website's visibility on search engines, driving organic traffic and boosting online presence.",
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
      <h1>Our Approach for Developing a Unique Fashion Lifestyle Website</h1>
      <p className={style.para}>
        To create a fashion lifestyle website that connects with style-conscious
        audiences, we adopt a strategic and innovative approach. Our process
        focuses on collaboration, originality, and an unwavering commitment to
        delivering exceptional online experiences.
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
