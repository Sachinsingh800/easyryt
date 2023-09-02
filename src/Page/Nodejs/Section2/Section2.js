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
    title: "Thorough Examination",
    description:"Our process commences with a deep understanding of your project prerequisites and objectives. Our team conducts a thorough analysis to recognize the most suitable strategies and approaches to cater to your specific requirements. ",
  },
  {
    logo: logo2,
    title: "Personalized Solution Design",
    description:
      "Each project is exceptional and distinctive. We create customized Node.js solutions that perfectly align with your aspirations. Whether it involves a web application, API, or real-time application, our designs are specifically tailored to meet your needs. ",
  },
  {
    logo: logo3,
    title: "Skilled Development",
    description:
      "Our proficient Node.js developers possess extensive knowledge in harnessing the potential of this technology. We guarantee immaculate, effective, and optimized code that translates into high-performance applications. ",
  },
  {
    logo: logo4,
    title: "Uninterrupted Communication",
    description:
      "Collaboration is the foundation of our method. We constantly keep you informed at every stage of development, ensuring transparency, addressing queries, and incorporating your feedback to refine our solutions. ",
  },
  {
    logo: logo5,
    title: "Priority as Focus ",
    description:
      "Node.js is well-known for its emphasis on scalability, and we fully leverage this ability. Our solutions are crafted to accommodate expansion, empowering your applications to effortlessly handle growing user requirements",
  },
  {
    logo: logo6,
    title: "Comprehensive Testing",
    description:
      "We thoroughly examine our applications to detect and address possible concerns. This method ensures that your Node.js applications are not solely swift and responsive, but also unwaveringly robust and dependable.",
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
      <h2>Our Approach to Node.js Development Services</h2>
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
