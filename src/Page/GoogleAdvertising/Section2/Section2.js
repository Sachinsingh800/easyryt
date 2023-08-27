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
    title: "Tailored Approach for Optimum Outcomes",
    description:
      "Here at EasyRyt, we recognize the individuality of every business, encompassing its distinct aspirations, target demographics, and competitive milieu. As a result, we steer clear of generic solutions, firmly believing in customized methodologies. Our Google Advertising Services commence with a meticulous examination of your enterprise, industry, and competition.  ",
  },
  {
    logo: logo2,
    title: "Keyword Analysis and Optimization",
    description:
      "Keywords play a vital role in the success of Google Ads campaigns. Our team of professionals conducts thorough research on Adwords to discover the specific terms and phrases potential customers use to search for businesses similar to yours. We then strategically incorporate these keywords into your ad content and landing pages, ensuring that your ads are visible to the right audience at the ideal moment.",
  },
  {
    logo: logo3,
    title: "Compelling Ad Content and Creative Development",
    description:
      "Developing captivating ad content is essential in grabbing the attention of your target demographic. Our talented writers produce engaging, pertinent, and concise ad material that deeply connects with your potential customers. Whether it involves textual, visual, or video-based ads, we concentrate on delivering a message that motivates action. ",
  },
  {
    logo: logo4,
    title: "Strategic Bidding and Budget Management",
    description:
      "Effectively managing your budget and placing bids on keywords necessitates a thorough understanding of the Google Ads platform. Our experienced team utilizes data-driven strategies to optimize your bids, guaranteeing that you achieve the maximum value from your budget. We continually monitor campaign performance and make real-time adjustments to amplify their impact. ",
  },
  {
    logo: logo5,
    title: "A/B Testing and Performance Enhancement",
    description:
      "Continuous improvement lies at the heart of our approach. We conduct A/B testing on various aspects of your Adwords, such as headlines, descriptions, and landing pages, to determine which elements resonate most effectively with your audience. By refining these components based on data-backed insights, we consistently enhance the performance of your campaigns over time. ",
  },
  {
    logo: logo6,
    title: "Target Audience",
    description:
      "Targeting the appropriate audience is crucial in Adwords for driving conversions. With the sophisticated targeting options offered by Google Ads, we have the ability to narrow down your audience based on various factors such as demographics, interests, and online behaviour.",
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
      <h1>Our Method for  Google Ads</h1>
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
