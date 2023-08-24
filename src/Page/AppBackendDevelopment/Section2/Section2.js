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
    title: "Reach a Wider Audience",
    description:
      "One of the primary blessings of cross-platform app improvement is the capacity to attain a broader target market. With systems like iOS and Android dominating the cell market, targeting both ecosystems are crucial for maximizing your app's reach. Instead of building separate apps for every platform, move-platform development allows you to create an unmarried codebase that may be deployed on a couple of platforms. ",
  },
  {
    logo: logo2,
    title: "Cost-Effectiveness",
    description:
      "Developing local apps for one-of-a-kind systems may be a resource-extensive undertaking. Each platform has its own programming language and improvement equipment, requiring developers with specific know-how in each era. Cross-platform mobile development eliminates the want for separate groups running on special variations of the app.  ",
  },
  {
    logo: logo3,
    title: "Faster Development Cycle",
    description:
      "Time-to-marketplace is important in the competitive app landscape. Cross-platform app improvement hurries up the improvement cycle by allowing builders to jot down code once and deploy it across diverse platforms. This unified approach reduces the want for redundant coding, testing, and debugging. As an end result, you can carry your app to marketplace faster and advantage an aggressive edge.  ",
  },
  {
    logo: logo4,
    title: "Consistent User Experience",
    description:
      "User revel in performs a pivotal role in the achievement of any app. Cross-platform mobile development guarantees a constant consumer revel in throughout distinct gadgets and platforms. With careful layout and optimization, your app can look and feel native on each platform, supplying an unbroken revel in to customers regardless of their device options.",
  },
  {
    logo: logo5,
    title: " Easier Maintenance ",
    description:
      "Maintaining multiple variations of an app can be a nightmare for developers. With cross-platform development, updates and bug fixes may be carried out across all structures concurrently. This removes the need to address problems one by one on every platform, saving time and resources in the long run. By retaining an unmarried codebase, you make certain that everyone customers are profiting from the modern-day upgrades.",
  },
  {
    logo: logo6,
    title: "Access to a Wide Range of Tools",
    description:
      "Cross-platform app improvement frameworks offer a plethora of tools, libraries, and plugins that simplify the improvement system. Frameworks like React Native, Flutter, and Xamarin offer developers with pre-constructed components and modules, lowering the need to reinvent the wheel for each platform. This equipment empowers developers to attention on developing unique functions as opposed to spending time on repetitive obligations.",
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
