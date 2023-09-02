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
    title: "Strategic Planning",
    description:
      "We initiate by delving deeply into your business objectives, target audience, and the competitive landscape. This profound understanding forms the foundation of our strategy, ensuring that your ecommerce website seamlessly aligns with your brand identity and resonates profoundly with your potential customers.  ",
  },
  {
    logo: logo2,
    title: "Custom Ecommerce Solutions",
    description:
      "We eschew the utilization of templates; instead, we champion uniqueness. Our team of skilled designers and developers meticulously craft bespoke ecommerce solutions that cater perfectly to your distinct requirements. Regardless of whether you are selling products or services, we guarantee that your website will truly shine amidst the crowded digital marketplace.",
  },
  {
    logo: logo3,
    title: "Magento Proficiency",
    description:
      "As experts in ecommerce website development, we possess comprehensive expertise in the potent capabilities offered by Magento - a versatile and feature-rich platform. Our command over Magento empowers us to construct expandable, customizable, and high-functioning online stores that deliver seamless shopping experiences. ",
  },
  {
    logo: logo4,
    title: "Design Focused on User Experience",
    description:
      "The paramount goal is to create a website that is easy to navigate and intuitive for users. Our designers prioritize engaging visuals and responsive design to provide an immersive experience that holds visitors' attention and guides them towards completing purchases. ",
  },
  {
    logo: logo5,
    title: "Reliable Payment Methods",
    description:
      "Building trust is essential for ecommerce success, and it starts with secure transactions. We seamlessly integrate top-notch payment gateways, guaranteeing that your customers can shop with confidence, knowing their personal information is safeguarded. ",
  },
  {
    logo: logo6,
    title: "Optimal Performance on Mobile Devices",
    description:
      "Considering the significant volume of online traffic from mobile devices, optimization for smartphones and tablets is indispensable. Our meticulous approach ensures that our ecommerce websites are fully optimized for seamless shopping experiences across different devices.",
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
      <h2>Our Method for Developing Ecommerce Websites </h2>
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
