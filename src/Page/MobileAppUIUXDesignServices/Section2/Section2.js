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
    title: "User-Centric Investigation",
    description:
      "We commence by thoroughly examining your target demographic, considering their preferences, behaviours, and pain points. This investigation serves as the cornerstone of our design choices, ensuring that each aspect resonates with your users.  ",
  },
  {
    logo: logo2,
    title: "Strategic Preliminary Design ",
    description:
      "Our designers fabricate preliminary designs that outline the structure and functionality of your application. This step allows us to visualize the user's journey, identify potential obstacles, and refine the flow before moving on to the visual design phase.",
  },
  {
    logo: logo3,
    title: "Visually Striking User Interface Design ",
    description:
      "Armed with an in-depth understanding of your brand and users, we craft visually captivating user interface designs that mirror the purpose of your application and resonate with your audience. Every colour, icon, and elements are meticulously chosen to create a unified and enticing interface. ",
  },
  {
    logo: logo4,
    title: "Intuitive Interaction Design",
    description:
      "Our team prioritizes crafting interactions that effortlessly facilitate the use of your application. By incorporating smooth transitions and natural gestures, we elevate the overall user experience, ensuring seamless navigation and effortless engagement. ",
  },
  {
    logo: logo5,
    title: "Prototype Testing",
    description:
      "We produce interactive models that replicate the functionality of the application. This enables us to conduct early testing and receive valuable feedback, allowing us to gain insights into user preferences and refine the design before embarking on the development phase. ",
  },
  {
    logo: logo6,
    title: "Continuous Refinement ",
    description:
      "We strongly believe in the pursuit of continuous improvement. Throughout the design process, we value and encourage your feedback, using it alongside our expertise to iterate on the design. This collaborative approach guarantees that the final design perfectly aligns with your vision.",
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
      <h1>
      Our Approach to Mobile Application Interface and User Experience (UI/UX) Design 
      </h1>
      <p className={style.para}>
        At EasyRyt, we embrace a comprehensive strategy when it comes to
        designing the user interface and user experience for mobile
        applications. This approach integrates creativity, investigation, and
        user-centricity. Our process guarantees that your app not only has a
        visually pleasing appearance but also provides an exceptional user
        experience that encourages repeated usage. Here's how we accomplish
        this:
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
