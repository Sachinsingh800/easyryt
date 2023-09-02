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
    title: "Thorough Requirements Analysis",
    description:"We embark on our journey by conducting a comprehensive assessment of your project prerequisites and objectives. Our team performs a detailed examination to ensure we fully comprehend the complexities of your vision. ",
  },
  {
    logo: logo2,
    title: "Tailored Solution Design",
    description:
      "Every project is distinct, and we acknowledge that fact. Our solutions are intricately crafted to seamlessly align with your distinctive business requirements, guaranteeing that your Laravel applications are an ideal fit.",
  },
  {
    logo: logo3,
    title: "Seasoned Laravel Experts",
    description:
      "Our proficient Laravel developers bring their wealth of experience to the forefront. With a profound understanding of Laravel's capabilities, we translate your concepts into code that is not only efficient and scalable but also prepared for the future.  ",
  },
  {
    logo: logo4,
    title: "Collaborative Development ",
    description:
      "We strongly believe in a collaborative approach. Throughout the development process, we maintain transparent communication, integrate your feedback, and ensure that our solutions remain synchronized with your vision. ",
  },
  {
    logo: logo5,
    title: "Priority on Scalability",
    description:
      "We strongly believe in a collaborative approach. Throughout the development process, we maintain transparent communication, integrate your feedback, and ensure that our solutions remain synchronized with your vision.",
  },
  {
    logo: logo6,
    title: "Priority on Scalability ",
    description:
      "The topmost concern of our approach is the ability to scale Laravel. We construct applications that can smoothly handle higher user requirements, guaranteeing that your solutions stay strong as your business expands. ",
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
      <h2>Our Approach to Laravel Development</h2>
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
