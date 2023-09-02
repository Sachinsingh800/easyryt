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
    title: "Facebook Ads",
    description:
      "With billions of active users, Facebook continues to be one of the most influential advertising platforms accessible. Our specialists comprehend the intricacies of Facebook Ads ecosystem, ranging from audience segmentation to ad layouts. We create captivating advertising campaigns that resonate with your potential clientele, fostering engagement, clicks, and conversions.  ",
  },
  {
    logo: logo2,
    title: "Audience Segmentation",
    description:
      "We assist you in defining and refining your target audience based on demographics, interests, behaviours, and more..",
  },
  {
    logo: logo3,
    title: "Ad Design",
    description:
      "Our creative team produces visually captivating and persuasive ad visuals that align with your brand's identity and message. ",
  },
  {
    logo: logo4,
    title: "Ad Writing",
    description:
      "Captivating ad copy that narrates your brand's story and stimulates action lies at the core of our approach. ",
  },
  {
    logo: logo5,
    title: "Scalability and Performance Optimization",
    description:
      "We recognize that apps want to scale. Our backend development focuses on scalability and performance optimization, making sure that your app can manage increased visitors and utilization without compromising on its pace or capability. ",
  },
  {
    logo: logo6,
    title: "A/B Testing",
    description:
      "We consistently optimize your ads by testing various elements to ensure optimal performance and deliver the best outcomes.",
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
      <h2>Our Method for Facebook Ads and Instagram Ads</h2>
      <p className={style.para}>
        At EasyRyt, we understand that every business is distinct, and there is
        no universal method for advertising. Our approach commences with a
        comprehensive examination of your business, industry, and target
        audience. We delve into your objectives and goals to craft a customized
        advertising strategy that utilizes the advantages of both Facebook and
        Instagram platforms.
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
