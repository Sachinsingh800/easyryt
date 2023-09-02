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
    title: "Strategic Strategy",
    description:
      "We commence each endeavour with a comprehensive comprehension of your objectives and target market. Our approach involves detailed strategizing to guarantee that the Next.js application aligns flawlessly with your business goals.  ",
  },
  {
    logo: logo2,
    title: "Design Distinction",
    description:
      "Our creative team merges ingenuity with practicality. We create user-friendly interfaces that not only allure users but also enhance the overall user experience, nurturing engagement and contentment.",
  },
  {
    logo: logo3,
    title: "Optimized Efficiency ",
    description:
      "We leverage Nextjs's server-side rendering to ensure rapid loading speed and flawless user interactions. Our emphasis on performance enhancement ensures that your application stands out in terms of swiftness and responsiveness. ",
  },
  {
    logo: logo4,
    title: "SEO Incorporation ",
    description:
      "Acknowledging the significance of search engine visibility, our approach capitalizes on Next.js's server-side rendering to enhance SEO rankings, amplifying organic traffic and guaranteeing that your content reaches a wider audience. ",
  },
  {
    logo: logo5,
    title: "Agile Progress",
    description:
      "Our agile development methodology prioritizes collaboration and adaptability. We operate in iterative cycles, enabling prompt feedback, continuous improvements, and the ability to adapt to evolving requirements. ",
  },
  {
    logo: logo6,
    title: "Comprehensive Support ",
    description:
      "Our dedication extends beyond deployment. We provide continuous maintenance, updates, and assistance to keep your Next.js application running smoothly, ensuring its sustained performance and technological forefront.",
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
      <h2> Our Approach to Next JS Development</h2>
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
