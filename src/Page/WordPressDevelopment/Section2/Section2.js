import React ,{useState,useEffect} from "react";
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
    title: "Android App",
    description:
      "Our Android applications are renowned for their captivating User Interface UI/UX, rapid loading speeds, and reliable performance.",
  },
  {
    logo: logo2,
    title: "iOS App",
    description:
      "Our iOS apps embody innovative concepts, featuring intuitive GUIs. With our proficient iPhone application development team, you'll find the perfect solution for your needs.",
  },
  {
    logo: logo3,
    title: "Tablet App development",
    description:
      "We offer extensive tablet app development solutions to diverse industries, catering to startups and leading enterprises alike.",
  },
  {
    logo: logo4,
    title: "iPad App Development",
    description:
      "With years of proficiency in native app development, our team can fulfill your unique requirements. We provide impeccable, visually appealing iPad app development services using Flutter.",
  },
  {
    logo: logo5,
    title: "AR App Development",
    description:
      "Benefiting from over 15 years of expertise in 3D modeling and Augmented Reality (AR), we deliver top-notch AR software swiftly. Our team crafts cutting-edge virtual reality solutions, harnessing the latest tools and advancements.",
  },
  {
    logo: logo6,
    title: "Marketing Automation Solutions",
    description:
      "Catering to diverse user needs, our team develops Native applications that precisely align with their business requirements. Leveraging the finest native app development platform, we ensure optimal results for every project.",
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
      <h2>The Expertise Of Our Native App Development Service</h2>
      <p className={style.para}>
        As a native app development company, we have expertise in developing
        Native apps for different platforms. Take a look at our expertise:
      </p>
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

export default Section2;
