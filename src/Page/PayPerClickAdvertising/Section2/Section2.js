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
    title: "Strategic Planning and Investigation",
    description:
      "Our journey commences by comprehending your business objectives, target audience, and industry landscape. Through comprehensive investigation, we identify the most pertinent keywords and trends that will shape the foundation of your PPC management campaign. We also scrutinize your competitors to reveal opportunities and strategies for surpassing them.  ",
  },
  {
    logo: logo2,
    title: "Personalized Campaign Creation",
    description:
      "Every business is distinct, and so should be your PPC Management campaign. We design personalized campaigns tailored to your goals, whether it's propelling sales, augmenting website traffic, or enhancing brand awareness. Our innovative team crafts captivating ad copy and selects impactful visuals to seize your audience's attention and stimulate engagement. ",
  },
  {
    logo: logo3,
    title: "Precise Audience Targeting",
    description:
      "Reaching the appropriate audience is crucial to PPC marketing. Our professionals utilize advanced targeting options, such as demographics, location, interests, and browsing behaviour, to guarantee your ads are displayed to users who are most inclined to convert. By minimizing wasted clicks, we optimize your budget and maximize your ROI.",
  },
  {
    logo: logo4,
    title: "Data-Driven Optimization ",
    description:
      "We meticulously monitor your PPC Management campaigns, scrutinizing real-time data to identify areas for improvement. From adjusting bidding strategies to refining ad placements, we optimize your campaigns to amplify click-through rates and conversions. Our data-driven approach ensures that your budget is allocated where it matters most. ",
  },
  {
    logo: logo5,
    title: "A/B Testing and Performance Enhancement",
    description:
      "Continuous enhancement is at the core of our PPC services. We conduct A/B tests to compare different ad variations, landing pages, and call-to-action components. By identifying the best-performing components, we refine your campaigns for even greater results over time.",
  },
  {
    logo: logo6,
    title: "Thorough Reporting",
    description:
      "Transparency is critical in evaluating campaign success. We offer regular reports that highlight main metrics such as clicks, impressions, conversions, and cost-per-acquisition. These reports provide you with insights into the effectiveness of your campaigns and assist us in making informed decisions to optimize performance.",
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
      <h2>Our Method for to PPC Services</h2>
      <p className={style.para}>
        At EasyRyt, we comprehend that a victorious PPC campaign is not simply
        about situating advertisements; it's about creating a unified strategy
        that reaches the appropriate audience, delivers compelling messages, and
        optimizes conversions. Our group of PPC management professionals follows
        a careful process to guarantee your campaigns generate significant
        results.
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
