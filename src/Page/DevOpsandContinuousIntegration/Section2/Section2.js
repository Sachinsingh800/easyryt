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
    title: "Comprehensive Assessment",
    description:"We initiate by comprehending your current workflows and software development procedures. Our team collaborates closely with you to pinpoint areas for enhancement.  ",
  },
  {
    logo: logo2,
    title: "Tailored Strategy Development",
    description:
      "Taking into consideration that each organization is distinct, we create a personalized DevOps and CI/CD strategy that aligns with your objectives and business requirements. ",
  },
  {
    logo: logo3,
    title: "Automated CI/CD Pipelines",
    description:
      "We devise and deploy robust CI/CD pipelines that automate code integration, testing, and deployment, decreasing manual errors and accelerating releases.  ",
  },
  {
    logo: logo4,
    title: "Infrastructure as Code (IaC) Implementation",
    description:
      "We facilitate the adoption of IaC, automating infrastructure provisioning for consistent and repeatable deployments across environments. ",
  },
  {
    logo: logo5,
    title: "Containerization and Orchestration Expertise",
    description:
      "Our team harnesses containerization technologies such as Docker and orchestration tools like Kubernetes to optimize resource usage and scalability. ",
  },
  {
    logo: logo6,
    title: "Continuous Monitoring and Optimization",
    description:
      "We establish continuous monitoring mechanisms to track performance and discover areas for improvement, guaranteeing ongoing enhancement of your DevOps and CI/CD procedures.",
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
      <h2>Our Approach to Effective DevOps and CI/CD Implementation</h2>
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
