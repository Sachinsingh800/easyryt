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
    title: "Strategy Development",
    description:
      "We initiate our process by conducting a thorough analysis of your business, current industry patterns, and the specific audience you aim to target. This extensive research lays the groundwork for a personalized social media marketing strategy that outlines the ideal platforms to focus on, thematic content creation, optimal posting schedules, and more.  ",
  },
  {
    logo: logo2,
    title: "Content Creation",
    description:
      "The key to a triumphant social media marketing campaign lies in creating compelling and captivating content. Our skilled team of content creators develop visually captivating materials, persuasive written copy, and interactive multimedia content that deeply resonates with your audience, ultimately reinforcing your brand's unique identity.",
  },
  {
    logo: logo3,
    title: "Community Engagement",
    description:
      "Cultivating a devoted online community necessitates consistent and meaningful interaction. We expertly manage all comments, messages, and interactions across platforms to ensure that your audience feels acknowledged and esteemed. This active engagement fosters a positive and favourable perception of your brand, while also prompting increased audience involvement.  ",
  },
  {
    logo: logo4,
    title: "Paid Social Media Advertising",
    description:
      "Amplify your reach and successfully target specific demographics with our well-crafted paid advertising campaigns. Through careful optimization of ad placements, audience targeting, and ad formats, we are able to maximize your return on investment (ROI) and effectively channel traffic to your desired destinations. ",
  },
  {
    logo: logo5,
    title: "Analytics and Insights",
    description:
      "At our core, we believe in harnessing the power of data to drive our strategies forward. Our dedicated team diligently monitors and analyses key performance metrics, consistently providing comprehensive reports that shed light on the efficacy of our efforts. This invaluable insight empowers us to continually refine our strategies for continuous improvement. ",
  },
  {
    logo: logo6,
    title: "Our Services Platform Management",
    description:
      "We offer an extensive range of social media platforms, encompassing, but not limited to, Facebook, Instagram, Twitter, LinkedIn, and TikTok. Each platform necessitates a tailored approach, and we possess the expertise to effectively handle multiple accounts.",
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
      <h2>Our Method for Social Media Marketing Services</h2>
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
