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
    title: "Conception and Brainstorming",
    description:
      "We initiate by comprehending your business objectives, target audience, and distinct vision for your application. Through thorough conversations, we determine the fundamental characteristics and functionalities that will distinguish your application in the competitive market.",
  },
  {
    logo: logo2,
    title: "User-Focused Design",
    description:
      "A captivating user experience is crucial to the triumph of any Native Mobile App. Our UI/UX designers produce visually impressive interfaces that are user-friendly and instinctive. We concentrate on generating smooth navigation, captivating interactions, and a consistent design language that aligns with your brand image. ",
  },
  {
    logo: logo3,
    title: "Platform-Specific Creation",
    description:
      "Our skilled programmers specialize in designing applications for both iOS and Android platforms. We create applications that are optimized for each platform's specific prerequisites, guaranteeing an experience similar to native applications that resonates with users. ",
  },
  {
    logo: logo4,
    title: "Performance and Speed Enhancement",
    description:
      "We prioritize application performance to offer users a seamless and prompt experience. From optimizing code to compressing images, we take every measure to boost application speed and decrease loading times, ensuring users remain engaged and content.",
  },
  {
    logo: logo5,
    title: " Integration and Functionality ",
    description:
      "A thriving application flawlessly integrates with other services and technologies. Our team ensures that your application seamlessly integrates with APIs, third-party services, and other functionalities, enriching the user experience and adding value.",
  },
  {
    logo: logo6,
    title: "Thorough Testing and Quality Assurance ",
    description:
      "Before release, we subject your application to comprehensive testing on various devices and scenarios to detect and resolve any glitches or complications. Our quality assurance process guarantees that your application functions flawlessly, delivering a consistent experience to users.",
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
      <h2>Our Method for Hybrid App Development</h2>
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
