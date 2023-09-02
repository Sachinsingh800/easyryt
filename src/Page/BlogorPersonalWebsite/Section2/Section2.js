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
    title: "Tailored Design ",
    description:
      "There is no one-size-fits-all solution. Our WordPress developers craft designs that reflect your distinctive style, ensuring your website flourishes amidst the vast online landscape.  ",
  },
  {
    logo: logo2,
    title: "User-Centric Development  ",
    description:
      "User experience takes precedence. Our designs are user-friendly and adaptable, ensuring seamless navigation across all devices for your visitors.",
  },
  {
    logo: logo3,
    title: "Harnessing the Power of Add-ons",
    description:
      "With WordPress, the possibilities are boundless. We incorporate add-ons to augment functionality, whether it's for social media integration, e-commerce capabilities, contact forms, or even more extensive features. ",
  },
  {
    logo: logo4,
    title: "Simplicity in Managing Content ",
    description:
      "We provide you with the necessary resources to effortlessly handle your content. Whether you are publishing blog articles or refreshing your portfolio, WordPress ensures an uncomplicated process.. ",
  },
  {
    logo: logo5,
    title: "Adaptable Layout",
    description:
      "Your website will display and operate smoothly on various devices - from computers to mobile phones - guaranteeing a consistent encounter for all users. ",
  },
  {
    logo: logo6,
    title: "Enhanced SEO  ",
    description:
      "A well designed website is only effective if it can be found. Our WordPress experts optimize your website for search engines, elevating your visibility and enabling you to connect with your desired audience.",
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
      <h2>Our Method for WordPress Blog and Personal Website Development: </h2>
      <p className={style.para}>
        At EasyRyt, we firmly believe that a WordPress website is more than just
        a compilation of pages – it symbolizes your digital presence. Our
        approach revolves around comprehending your objectives, aesthetics, and
        aspirations. We collaborate closely with you to transform your concepts
        into an immersive online journey that captivates your visitors. Here's
        how we steer you towards WordPress supremacy:
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
