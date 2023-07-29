import React, { useState } from "react";
import style from "./ThirdSection.module.css";
import logo1 from "../../Image/graphic-design-.png";
import logo2 from "../../Image/mob-logo.png";
import logo3 from "../../Image/PWA.png";
import logo4 from "../../Image/erp.png";
import logo5 from "../../Image/digitalmarketing.png";
import logo6 from "../../Image/Pm.png";
import logo7 from "../../Image/SAP_(6).png";
import { Servicesaccordian } from "../../Component/Accordion/Accordion";
import { Link } from "react-router-dom";

function ThirdSection() {
  const [hoveredOption, setHoveredOption] = useState("Option 1");

  const handleOptionHover = (option) => {
    setHoveredOption(option);
  };

  return (
    <div className={style.main}>
      <h1>Our Services</h1>
      <div className={style.accodian}>
        <Servicesaccordian />
      </div>
      <div className={style.navBar}>
        <ul className={style.optionList}>
          <li
            className={hoveredOption === "Option 1" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 1")}
          >
            App Development
            {hoveredOption === "Option 1" && (
              <div className={style.optionContent}>
                <span className={style.arrow}>◄</span>
                <img className={style.logo} src={logo2} alt="img" />
                <h4> App Development</h4>
                <p>
                  App development is the process of creating software
                  applications for mobile devices like smartphones and tablets.
                  This involves designing, coding, testing, and deploying the
                  app to platforms like iOS or Android.
                </p>
                <a
                  href="/AppDevelopment"
                >
                  <h6>Read More ᐳ</h6>
                </a>
              </div>
            )}
          </li>
          <li
            className={hoveredOption === "Option 2" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 2")}
          >
            Website Development
            {hoveredOption === "Option 2" && (
              <div className={style.optionContent1}>
                <span className={style.arrow1}>◄</span>
                <img className={style.logo} src={logo3} alt="img" />
                <h4> Website Development</h4>
                <p>
                  Your online presence is critical in today's connected world.
                  Our skilled web development team creates stunning, functional,
                  and responsive websites that leave a lasting impression on
                  visitors. We combine the latest technologies with user-centric
                  design to ensure a seamless browsing experience across
                  devices, empowering your business to stand out in the digital
                  realm.
                </p>
                <a
                  href="/WebsiteDevelopment"
                >
                  <h6>Read More ᐳ</h6>
                </a>
              </div>
            )}
          </li>

          <li
            className={hoveredOption === "Option 3" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 3")}
          >
            Digital Marketing
            {hoveredOption === "Option 3" && (
              <div className={style.optionContent2}>
                <span className={style.arrow2}>◄</span>
                <img className={style.logo} src={logo4} alt="img" />
                <h4> Digital Marketing</h4>
                <p>
                  Stay ahead of the competition with our result-driven digital
                  marketing strategies. From SEO, content marketing, and social
                  media management to pay-per-click advertising and email
                  campaigns, we employ data-driven approaches to maximize your
                  online visibility, attract targeted leads, and enhance your
                  brand's online reputation.
                </p>
                <a
                  href="/DigitalMarketing"
                >
                  <h6>Read More ᐳ</h6>
                </a>
              </div>
            )}
          </li>

          <li
            className={hoveredOption === "Option 4" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 4")}
          >
            Cloud Solutions
            {hoveredOption === "Option 4" && (
              <div className={style.optionContent3}>
                <span className={style.arrow3}>◄</span>
                <img className={style.logo} src={logo1} alt="img" />
                <h4>Cloud Solutions</h4>
                <p>
                  Efficiently manage and store your data with our secure and
                  scalable cloud solutions. We specialize in setting up cloud
                  infrastructure, data migration, and continuous monitoring to
                  ensure seamless operations while maintaining the highest level
                  of data security and compliance.
                </p>
                <a
                  href="/CloudSolutions"
                >
                  <h6>Read More ᐳ</h6>
                </a>
              </div>
            )}
          </li>

          <li
            className={hoveredOption === "Option 5" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 5")}
          >
            WordPress Development
            {hoveredOption === "Option 5" && (
              <div className={style.optionContent4}>
                <span className={style.arrow4}>◄</span>
                <img className={style.logo} src={logo5} alt="img" />
                <h4>WordPress Development</h4>
                <p>
                  As a leading WordPress development company, we empower
                  businesses with feature-rich, responsive, and scalable
                  websites on this popular content management system. Our
                  WordPress experts leverage their extensive knowledge to create
                  customized solutions that meet your specific requirements,
                  whether it's a blog, portfolio, or an enterprise-level
                  website.
                </p>
                <a
                  href="/WordPressDevelopment"
                >
                  <h6>Read More ᐳ</h6>
                </a>
              </div>
            )}
          </li>

          <li
            className={hoveredOption === "Option 6" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 6")}
          >
            UI/UX Design
            {hoveredOption === "Option 6" && (
              <div className={style.optionContent5}>
                <span className={style.arrow5}>◄</span>
                <img className={style.logo} src={logo6} alt="img" />
                <h4>UI/UX Design</h4>
                <p>
                  User experience is at the heart of everything we create. Our
                  talented UI/UX designers combine creativity with usability to
                  craft intuitive and visually appealing interfaces. By
                  understanding your target audience, we ensure your digital
                  products leave a lasting impression and foster customer
                  loyalty.
                </p>
                <a
                  href="/UIUXDesign"
                >
                  <h6>Read More ᐳ</h6>
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ThirdSection;
