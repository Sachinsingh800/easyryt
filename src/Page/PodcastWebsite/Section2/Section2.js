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
      "We initiate by comprehending the unique niche, target audience, and goals of your podcast. This understanding forms the basis of our plan, guaranteeing that your website is in line with your vision.  ",
  },
  {
    logo: logo2,
    title: "Captivating Design",
    description:
      " Our designers craft visually mesmerizing layouts that represent the personality of your podcast. We prioritize user experience, ensuring that navigation is instinctive and content is easily accessible.",
  },
  {
    logo: logo3,
    title: " Streamlined Episode Presentation: ",
    description:
      "Through a user-friendly interface, we showcase your episodes in a well-organized manner, making it effortless for listeners to explore and engage with your content. ",
  },
  {
    logo: logo4,
    title: "Integration of Podcast Player ",
    description:
      "We effortlessly incorporate podcast players that provide an immersive listening experience. Whether on a computer or a handheld device, your audience can enjoy your episodes effortlessly. ",
  },
  {
    logo: logo5,
    title: "Adaptable Design",
    description:
      "Your podcast should be easily accessible to listeners using any gadget. Our adaptable design guarantees a smooth experience on computers, tablets, and smartphones. ",
  },
  {
    logo: logo6,
    title: "Enhancement of SEO ",
    description:
      "To expand the reach of your podcast, we implement SEO techniques that improve the visibility of your website in search engine outcomes.",
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
      <h1>Our Approach to Developing a WordPress Podcast Website</h1>
      <p className={style.para}>
        Creating a podcast website that connects with your listeners requires a
        strategic and imaginative method. Our approach centres around
        collaboration, novelty, and a dedication to delivering extraordinary
        outcomes.
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
