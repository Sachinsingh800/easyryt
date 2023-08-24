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
    title: "Exploration and Strategy",
    description:
      "We initiate the process by gaining a profound comprehension of your app's purpose, target demographic, and distinctive characteristics. Our team works closely with you to establish the scope and objectives of your hybrid app. We thoroughly analyse your competitors, industry trends, and user preferences to create a comprehensive plan that forms the basis for development. ",
  },
  {
    logo: logo2,
    title: "Personalized Interface",
    description:
      "User experience takes precedence in our design approach. Our design specialists craft intuitive interfaces that prioritize usability, aesthetics, and functionality. We concentrate on creating a consistent user experience across various devices and platforms, promoting seamless navigation and user engagement.",
  },
  {
    logo: logo3,
    title: "Technology Choice",
    description:
      "Selecting the appropriate technology stack is crucial for the success of a hybrid app. Based on your app's requirements, we choose the most suitable hybrid app frameworks such as Ionic, React Native, or Flutter. This ensures that your app can harness the best features and capabilities of modern hybrid development. ",
  },
  {
    logo: logo4,
    title: "Streamlined Development",
    description:
      "Our skilled developers bring your app to life using the chosen hybrid app framework. By leveraging the power of web technologies and integrating native-like features, we ensure optimal performance and functionality. This approach not only enhances the user experience but also grants access to device capabilities.",
  },
  {
    logo: logo5,
    title: "Thorough Examination",
    description:
      "Comprehensive examination is an essential aspect of our hybrid application development procedure. We carry out extensive examination across various devices, operating systems, and situations to identify and resolve any problems. This guarantees that your application operates perfectly for all users.",
  },
  {
    logo: logo6,
    title: "Release and Continuous Assistance",
    description:
      "We assist you throughout the release process, ensuring that your hybrid application is accessible for download on applicable application stores. Our dedication doesn't conclude with release; we provide continuous assistance to address any concerns and implement upgrades to improve user involvement.",
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
      <h1>Our Method for Cross-Platform App Development</h1>
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
