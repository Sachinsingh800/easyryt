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
    title: "Improves Efficiency And Offers High Scalability",
    description:
      "Since Business Apps Are Custom Built With The Company's Needs In Mind, They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
  },
  {
    logo: logo2,
    title: "Improves Efficiency And Offers High Scalability",
    description:
      "Since Business Apps Are Custom Built With The Company's Needs In Mind, They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
  },
  {
    logo: logo3,
    title: "Improves Efficiency And Offers High Scalability",
    description:
      "Since Business Apps Are Custom Built With The Company's Needs In Mind, They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
  },
  {
    logo: logo4,
    title: "Improves Efficiency And Offers High Scalability",
    description:
      "Since Business Apps Are Custom Built With The Company's Needs In Mind, They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
  },
  {
    logo: logo5,
    title: "Improves Efficiency And Offers High Scalability",
    description:
      "Since Business Apps Are Custom Built With The Company's Needs In Mind, They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
  },
  {
    logo: logo6,
    title: "Improves Efficiency And Offers High Scalability",
    description:
      "Since Business Apps Are Custom Built With The Company's Needs In Mind, They Act As A Robust App That Performs Various Tasks Eliminating The Need For Multiple Apps.",
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