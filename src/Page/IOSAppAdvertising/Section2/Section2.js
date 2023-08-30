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
    title: "Thorough Market Analysis",
    description:
      "Our journey commences with an extensive analysis of the iOS application market. We thoroughly examine trends, user preferences, and competitor strategies to pinpoint the untapped areas and opportunities your application can capitalize on. ",
  },
  {
    logo: logo2,
    title: "Customized iPhone Application Promotion Strategies",
    description:
      "One approach does not fit all within the iOS application realm. Our team crafts strategies tailored to your application's distinct value proposition. Whether it involves optimizing your application's storefront (ASO), fostering engagement on social media platforms, or forging strategic partnerships, our tactics are laser-focused on propelling your application's growth.",
  },
  {
    logo: logo3,
    title: "Storefront Optimization (ASO)",
    description:
      "As industry pioneers in iOS application promotion, we possess unparalleled expertise in the intricacies of ASO. We optimize your application's title, description, keywords, and visuals to ensure prominent placement in search results and capture the discerning attention of potential users.",
  },
  {
    logo: logo4,
    title: "Compelling Visual Content",
    description:
      "iPhones and iPads are recognized for their breathtaking screens. We take advantage of this by producing captivating visual content that connects with your intended audience. Our innovative team designs persuasive images, videos, and interactive elements that leave a memorable impact. ",
  },
  {
    logo: logo5,
    title: "Strategic User Engagement",
    description:
      "Engaging with users goes beyond a mere strategy – it is an art form. We create approaches that motivate users not only to download your app but also to keep returning. Push notifications, in-app rewards, and personalized experiences are all part of our repertoire.",
  },
  {
    logo: logo6,
    title: "Data-Driven Decision Making",
    description:
      "Our team is driven by data. We continuously monitor and analyse user actions, app performance, and market trends. This enables us to refine our approaches for maximum effectiveness, guaranteeing that your app remains relevant and competitive.",
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
      <h1>Our Approach to iPhone App Marketing</h1>
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
