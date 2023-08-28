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
    title: "Strategic Preparation",
    description:
      "We begin by comprehending your business, merchandise, and target audience. This lays the foundation for our approach, guaranteeing that your ECommerce website aligns with your objectives.  ",
  },
  {
    logo: logo2,
    title: " Tailoring and Personalization ",
    description:
      "Each business possesses its distinct identity. Our ECommerce solutions are custom-built to mirror your brand, ensuring that your online store stands out and resonates with your customers.",
  },
  {
    logo: logo3,
    title: "Captivating Design",
    description:
      "Our designers skilfully merge aesthetics and functionality to craft engaging ECommerce websites. We prioritize user-friendly navigation, visually appealing elements, and seamless experiences that drive conversions. ",
  },
  {
    logo: logo4,
    title: "Smooth Integration with WooCommerce",
    description:
      "We leverage the capabilities of WooCommerce to create enriching ECommerce experiences. From managing inventory to establishing secure payment gateways, we ensure that your store operates flawlessly. ",
  },
  {
    logo: logo5,
    title: "Prioritizing Mobile Users",
    description:
      "As the number of mobile users continues to increase, we give utmost importance to optimizing your website for mobile devices. This ensures that your ECommerce site delivers a seamless and intuitive experience on all types of devices. ",
  },
  {
    logo: logo6,
    title: "Uninterrupted Assistance  ",
    description:
      "Our dedication extends beyond the development stage. We offer ongoing support and maintenance services to ensure that your website remains updated, secure, and ready to adapt to future growth.",
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
      <h1>Our Approach to Developing a WordPress ECommerce Website</h1>
      <p className={style.para}>
        When it comes to building a successful WordPress ECommerce website, our
        strategy is rooted in careful planning, ingenuity, and dedication to
        achieving great outcomes. Here's how we go above and beyond to make your
        ECommerce journey outstanding.
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
