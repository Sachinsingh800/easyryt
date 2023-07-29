import React ,{useState,useEffect} from "react";
import style from "./NinthSection.module.css";
import logo1 from "../../Image/chart.gif";
import logo2 from "../../Image/date.gif";
import logo3 from "../../Image/id.gif";
import logo4 from "../../Image/page.gif";
import logo5 from "../../Image/setting.gif";
import logo6 from "../../Image/message.gif";

const cardData = [
  {
    logo: logo1,
    title: "Enhanced Customer Engagement",
    description: "Mobile apps offer direct communication channels, enabling businesses to interact with customers, provide personalized experiences, and gather valuable feedback..",
  },
  {
    logo: logo2,
    title: "Increased Brand Visibility",
    description:
      "Mobile apps, once downloaded, stay on users' devices, reminding them of your brand and increasing brand recall.",
  },
  {
    logo: logo3,
    title: "Improved Accessibility",
    description:
      "Mobile apps allow users to access your products or services anytime, anywhere, leading to a more convenient and seamless user experience.",
  },
  {
    logo: logo4,
    title: "Higher Efficiency",
    description:
      " Apps can streamline processes, automate tasks, and optimize workflows, resulting in increased operational efficiency for businesses.",
  },
  {
    logo: logo5,
    title: "New Revenue Streams",
    description:
      " Mobile apps can open up new opportunities for monetization, such as in-app purchases, subscriptions, or advertising, expanding revenue potential.",
  },
  {
    logo: logo6,
    title: "Competitive Advantage",
    description:
      "In today's mobile-centric world, having a well-designed and functional app can set your business apart from competitors and attract tech-savvy users.",
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

function NinthSection() {
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
      <h1>Benefits Of Mobile App Development</h1>
      <p>Here Are Some Of The Most Advantage Of Mobile App Growth For Business.</p>
      <div className={style.innerbox}>
        {cardData.map((data, index) => (
          <div className={style.card} key={index} style={{ background: randomColors[index] }}>
            <img className={style.img} src={data.logo} alt={`img${index}`} />
            <h6>{data.title}</h6>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NinthSection;