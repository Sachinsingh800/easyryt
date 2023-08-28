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
    title: "Thorough Exploration",
    description:
      "We delve deeply into the travel niche you are targeting, thoroughly understanding the unique adventures and information that travellers are in search of.  ",
  },
  {
    logo: logo2,
    title: " Visual Storytelling: ",
    description:
      "Our talented designers seamlessly incorporate captivating imagery and design elements into your website, weaving together compelling travel narratives.",
  },
  {
    logo: logo3,
    title: "Showcasing Destinations",
    description:
      "We flawlessly integrate destination details, maps, itineraries, and more, allowing visitors to effortlessly explore your featured locations. ",
  },
  {
    logo: logo4,
    title: "Intuitive Navigation",
    description:
      "Navigating your travel website should be as easy as planning a journey. Our user-centric design ensures that visitors can find information effortlessly. ",
  },
  {
    logo: logo5,
    title: "Responsive Design",
    description:
      "Travelers access websites from a variety of devices. Our responsive design guarantees optimal presentation on desktops, tablets, and smartphones. ",
  },
  {
    logo: logo6,
    title: "SEO Optimization ",
    description:
      "To expand the reach of your travel website, we implement effective SEO strategies that enhance its visibility across search engines.",
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
      <h1>Our WordPress Travel Website Development Approach</h1>
      <p className={style.para}>
        Developing a travel website that transports visitors to new frontiers
        requires a strategic and innovative approach that boosts its visibility
        on search engines, attracting a broader audience. We prioritize
        collaboration, creativity, and a commitment to delivering extraordinary
        travel experiences:
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
