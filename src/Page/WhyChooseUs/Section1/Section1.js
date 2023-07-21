import React ,{useState,useEffect} from "react";
import style from "./Section1.module.css";
import logo1 from "../../../Image/chart.gif";
import logo2 from "../../../Image/date.gif";
import logo3 from "../../../Image/id.gif";
import logo4 from "../../../Image/page.gif";
import logo5 from "../../../Image/setting.gif";
import logo6 from "../../../Image/message.gif";

const cardData = [
  {
    logo: logo1,
    title: "Expert Team",
    description:
      "Our team consists of highly skilled professionals who are passionate about technology and committed to excellence. With a diverse skill set and a wealth of experience, we are equipped to tackle any challenge that comes our way.",
  },
  {
    logo: logo2,
    title: "Customer-Centric Approach",
    description:
      "We prioritize our clients' needs and goals. By understanding your business inside out, we tailor our services to align with your vision and objectives, ensuring that the solutions we provide yield maximum results.",
  },
  {
    logo: logo3,
    title: "Innovation and Quality",
    description:
      "Innovation is at the core of what we do. We stay abreast of the latest trends and emerging technologies, allowing us to deliver cutting-edge solutions that provide a competitive edge to our clients.",
  },
  {
    logo: logo4,
    title: "Timely Delivery",
    description:
      "We value your time and understand the importance of meeting deadlines. Our streamlined project management process ensures that we deliver projects on time without compromising on quality.",
  },
  {
    logo: logo5,
    title: "Long-Term Partnerships",
    description:
      "We believe in nurturing long-lasting relationships with our clients. Beyond the completion of a project, we offer ongoing support, maintenance, and updates to ensure your technology remains relevant and effective.",
  },
  {
    logo: logo6,
    title: "Data Security and Confidentiality",
    description:
      "At Easyryt Software Solutions, we take data security and confidentiality seriously. We implement robust measures to safeguard your sensitive information and ensure that it remains protected from unauthorized access, maintaining your trust in our services..",
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

function Section1() {
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
      <h1>Why Easyryt ?</h1>
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

export default Section1;