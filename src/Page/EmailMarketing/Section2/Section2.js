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
    title: "Audience Segmentation",
    description:
      "Our Email Marketing Strategy involves dividing your electronic mail list into pertinent segments based on demographics, behaviours, preferences, and more. This ensures that each electronic mail is highly targeted, enhancing the chances of engagement and conversion ",
  },
  {
    logo: logo2,
    title: "Captivating Content",
    description:
      "Our team of skilled writers creates captivating, relevant, and valuable content for your electronic mails. From attention-grabbing subject lines to persuasive body copy, we ensure that every word serves a purpose. ",
  },
  {
    logo: logo3,
    title: "Strategic Design",
    description:
      "Visual appeal matters. Our designers craft electronic mail templates that are not only visually appealing but also optimized for various devices. A coherent and professional design enhances your brand's credibility.  ",
  },
  {
    logo: logo4,
    title: "Automation",
    description:
      "We set up automated electronic mail workflows that deliver the right message at the right time. Whether it's a welcome series for new subscribers or a nurturing sequence for leads, automation streamlines your communication. ",
  },
  {
    logo: logo5,
    title: "Testing and Optimization",
    description:
      "We continuously test different elements of your electronic mails to optimize for better results. This includes A/B testing subject lines, content variations, send times, and more. ",
  },
  {
    logo: logo6,
    title: "Integration of Third-Party Services",
    description:
      "To beautify your app's competencies, we combine 1/3-birthday party services like price gateways, social media systems, and analytics tools. These integrations increase consumer experiences and offer treasured insights in your commercial enterprise growth.",
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
      <h1>Our Approach</h1>
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
