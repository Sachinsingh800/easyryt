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
    title: "Ideation and Conceptualization",
    description:
      "We kick off the iPhone App Development process by way of immersing ourselves to your imagination, desires, and target audience. Our brainstorming periods and collaborative discussions lead to a clear concept that serves as the foundation in your iOS app.",
  },
  {
    logo: logo2,
    title: "Design and User Experience",
    description:
      "A good layout isn't pretty just aesthetics; but also, about creating a pleasing and intuitive user enjoy. Our iOS application development and design crew crafts visually attractive interfaces that resonate with users, improving engagement and retention.",
  },
  {
    logo: logo3,
    title: "Development and Quality Assurance",
    description:
      "Our skilled iOS Application Development team, leverage the modern-day iOS technology and first-rate practices to bring your app to existence. Rigorous trying out and satisfactory assurance tactics make certain that the app functions seamlessly on diverse iOS devices and versions. ",
  },
  {
    logo: logo4,
    title: "Performance Optimization",
    description:
      "Our iPhone App Development team prioritizes app performance to guarantee rapid loading times, clean navigation, and top of the line useful resource utilization. ",
  },
  {
    logo: logo5,
    title: " Launch and App Store Deployment ",
    description:
      "Our iOS Application Development team will guide you via the process of submitting your app to the Apple App Store. Our team guarantees that your app meets all pointers and necessities, positioning it for a successful release.",
  },
  {
    logo: logo6,
    title: "Ongoing Support and Updates",
    description:
      "Our dedication extends beyond the launch. Our iOS Application Development team provides non-stop aid, display app overall performance, and offers timely updates to make sure that your app stays applicable and efficient.",
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
      <h1>Our Method for IOS App Development</h1>
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
