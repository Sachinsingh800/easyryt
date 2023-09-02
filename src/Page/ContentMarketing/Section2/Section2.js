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
    title: "Creating Your Content Marketing Plan",
    description:
      "A successful content marketing plan is a guide that steers your brand towards its objectives. Our team of content marketing professionals collaborates closely with you to create a customized plan that encompasses all aspects of your brand's identity and objectives.  ",
  },
  {
    logo: logo2,
    title: "Content Conceptualization and Generation",
    description:
      "Our innovative team brainstorms and enhances concepts for content that matches your brand's tone and connects with your audience. Whether it's informative blog articles, captivating videos, or engaging content for social media, we craft pieces that educate, entertain, and motivate action.",
  },
  {
    logo: logo3,
    title: "Content Enhancement",
    description:
      "Producing excellent content is only part of the tale; optimizing it for search engines and enhancing the user experience is equally crucial. We apply the best practices of search engine optimization to ensure that your content attains the visibility it deserves, driving organic traffic and enhancing your brand's online presence. ",
  },
  {
    logo: logo4,
    title: "Distribution Approach",
    description:
      "Generating content is merely the starting point. Our distribution approach guarantees that your content reaches the appropriate platforms and audiences, maximizing its influence. ",
  },
  {
    logo: logo5,
    title: "Content Promotion",
    description:
      "Even the exceptional substance necessitates a boost to reach its intended target group. Our services focusing on the promotion of valuable materials involve strategic outreach across multiple platforms, ranging from social networking sites to email marketing campaigns. We firmly believe in delivering your content to the online spaces frequented by your audience. ",
  },
  {
    logo: logo6,
    title: "Evaluation and Enhancement",
    description:
      "Data serves as the guiding force behind our endeavours. We scrupulously monitor essential indicators to gauge the impact of our content marketing approach. Our team consistently scrutinizes the findings and makes necessary adjustments to keep the strategy harmonious with your objectives.",
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
      <h2>Our Method for Content Marketing</h2>
      <p className={style.para}>
        It goes without saying that our approach to content marketing and
        promotion goes beyond ordinary blog posts or updates on social media
        platforms. We believe in producing strategic content that aligns with
        your business goals, resonates with your target demographic, and
        generates concrete outcomes.
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
