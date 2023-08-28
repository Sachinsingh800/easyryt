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
    title: "Comprehensive Examination",
    description:
      "We thoroughly analyse your objectives for the job board, gaining a deep understanding of the industries you cater to, the types of jobs available, and the user experience you aim to provide.  ",
  },
  {
    logo: logo2,
    title: "User-Focused Design",
    description:
      "Our skilled designers concentrate on crafting designs that prioritize the needs of the users, making it effortless for job seekers to browse, search, and apply for positions.",
  },
  {
    logo: logo3,
    title: "Smooth Integration of Job Listings",
    description:
      "We seamlessly incorporate the functionalities required for posting job listings, streamlining the process for employers to advertise positions and for job seekers to submit applications. ",
  },
  {
    logo: logo4,
    title: "Efficient Applicant Management System ",
    description:
      "Our job board websites come equipped with tools that facilitate efficient management of applicants, enabling employers to review, communicate with, and hire candidates seamlessly. ",
  },
  {
    logo: logo5,
    title: " Mobile-Friendly Design",
    description:
      "Job seekers and employers access job boards using a variety of devices. Our responsive design ensures optimal performance across desktops, tablets, and smartphones. ",
  },
  {
    logo: logo6,
    title: "Search Engine Optimization  ",
    description:
      "In order to optimize the visibility of job listings, we employ techniques that optimize your website's rankings on search engines, attracting a wider audience.",
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
      <h1>Our Approach to Developing a Job Board Website on WordPress</h1>
      <p className={style.para}>
        Creating a platform for job seekers and employers that caters to their
        unique needs demands a well-thought-out and imaginative strategy. Our
        process revolves around collaboration, innovation, and a commitment to
        delivering outstanding results. Here's how we do it.
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
