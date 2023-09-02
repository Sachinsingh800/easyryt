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
    title: "Keyword Research and Analysis",
    description:
      "Effective SEO starts with thorough keyword research. Our team conducts in-depth analysis to identify the most relevant and high-traffic keywords for your industry. By understanding what your target audience is searching for, we ensure that your website content aligns with their needs, improving your chances of ranking higher in search engine results.   ",
  },
  {
    logo: logo2,
    title: "On-Page Optimization",
    description:
      "Our SEO experts meticulously optimize every aspect of your website's on-page elements. SEO includes optimizing meta tags, headers, URLs, and content for target keywords. We also focus on improving user experience, ensuring your website is easy to navigate and mobile-responsive. By enhancing your website's on-page factors, we lay a strong foundation for improved search engine rankings.",
  },
  {
    logo: logo3,
    title: "Technical SEO",
    description:
      "Behind every successful website lies a strong technical infrastructure. Our SEO Experts conduct comprehensive technical audits to identify and address any issues that may be hindering your site's performance in search engines. From website speed optimization to fixing crawl errors, we ensure that your website meets the technical standards set by search engines.",
  },
  {
    logo: logo4,
    title: "Content Creation and Optimization",
    description:
      "Engaging and informative content not only attracts visitors but also showcases your expertise. Our content team creates high-quality, keyword-rich content that resonates with your target audience. From blog posts to infographics, we ensure that your content provides value and answers the questions your potential customers are asking.  ",
  },
  {
    logo: logo5,
    title: " Link Building",
    description:
      "Building high-quality, authoritative backlinks is a crucial aspect of SEO. Our team of SEO Experts employ ethical link-building strategies to secure relevant and reputable links from other websites. This not only drives referral traffic but also signals to search engines that your website is a reliable source of information.  ",
  },
  {
    logo: logo6,
    title: "Local SEO ",
    description:
      "For businesses targeting local customers, our local SEO services are designed to enhance your visibility within your geographic area. We optimize your Google My Business listing, manage online reviews, and ensure accurate local directory listings. This way, you'll be more visible to potential customers in your vicinity. ",
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
      <h2>Our Methodology for Search Engine Optimization (SEO) Services </h2>
      <p className={style.para}>
        At EasyRyt, we firmly believe that efficient SEO constitutes a blend of
        technical proficiency, strategic plotting, and continuous adjustment to
        evolving search engine algorithms. Our experienced team of SEO experts
        collaboratively engages with each client to formulate tailored
        strategies that align with their distinct objectives and industry
        landscape.
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
