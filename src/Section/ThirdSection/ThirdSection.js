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
  const [hoveredOption, setHoveredOption] = useState(null);

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
            Mobile App Development
            {hoveredOption === "Option 1" && (
              <div className={style.optionContent}>
                <span className={style.arrow}>◄</span>
                <img className={style.logo} src={logo2} alt="img" />
                <h4> Mobile App Development</h4>
                <p>
                  Mobile app development is the process of creating software
                  applications specifically designed for use on mobile devices,
                  such as smartphones and tablets. It involves the creation,
                  design, development, testing, and deployment of applications
                  that run on various mobile operating systems, including iOS
                  and Android.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Mobile_app_development"
                  target="_blank"
                  rel="noopener noreferrer"
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
            Progressive Web App
            {hoveredOption === "Option 2" && (
              <div className={style.optionContent1}>
                <span className={style.arrow1}>◄</span>
                <img className={style.logo} src={logo3} alt="img" />
                <h4> Progressive Web App</h4>
                <p>
                  A Progressive Web App (PWA) is a web application that combines
                  the best features of a website and a native app. It can be
                  accessed through a web browser and offers an app-like
                  experience, including offline functionality, push
                  notifications, and device hardware access. PWAs are fast,
                  responsive, and can be installed on the user's home screen,
                  making them convenient and accessible across different
                  platforms.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Progressive_Web_Apps"
                  target="_blank"
                  rel="noopener noreferrer"
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
            Enterprise Application Development
            {hoveredOption === "Option 3" && (
              <div className={style.optionContent2}>
                <span className={style.arrow2}>◄</span>
                <img className={style.logo} src={logo4} alt="img" />
                <h4> Enterprise Application Development</h4>
                <p>
                  Enterprise Application Development refers to the process of
                  creating software applications specifically designed for large
                  organizations or businesses. These applications are developed
                  to meet the unique requirements and challenges of enterprise
                  environments, focusing on scalability, security, and
                  integration with existing systems.
                </p>
                <a
                  href="https://www.silvertouch.com/blog/enterprise-application-development-how-it-drives-growth-for-business/"
                  target="_blank"
                  rel="noopener noreferrer"
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
            Design UI/UX
            {hoveredOption === "Option 4" && (
              <div className={style.optionContent3}>
                <span className={style.arrow3}>◄</span>
                <img className={style.logo} src={logo1} alt="img" />
                <h4> Design UI/UX</h4>
                <p>
                  UI/UX design aims to create a positive user experience that
                  encourages customers to stick with a brand or product. While a
                  UX Designer decides how the user interface works, the UI
                  designer decides how the user interface looks.
                </p>
                <a
                  href="https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
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
            Digital Marketing
            {hoveredOption === "Option 5" && (
              <div className={style.optionContent4}>
                <span className={style.arrow4}>◄</span>
                <img className={style.logo} src={logo5} alt="img" />
                <h4>Digital Marketing</h4>
                <p>
                  Digital marketing encompasses various online strategies and
                  techniques to promote products, services, or brands using
                  digital channels. It includes activities such as search engine
                  optimization (SEO), social media marketing, content marketing,
                  email marketing, pay-per-click advertising, and more.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Digital_marketing"
                  target="_blank"
                  rel="noopener noreferrer"
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
            Product Management
            {hoveredOption === "Option 6" && (
              <div className={style.optionContent5}>
                <span className={style.arrow5}>◄</span>
                <img className={style.logo} src={logo6} alt="img" />
                <h4> Product Management</h4>
                <p>
                  Product management is the process of overseeing the
                  development, launch, and ongoing management of a product or
                  service throughout its lifecycle. It involves strategic
                  planning, market research, defining product vision, gathering
                  requirements, and collaborating with cross-functional teams to
                  ensure successful product development. Product managers
                  analyze market trends, competition, and customer needs to make
                  informed decisions regarding product features, pricing, and
                  positioning.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Product_management"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6>Read More ᐳ</h6>
                </a>
              </div>
            )}
          </li>
          <li
            className={hoveredOption === "Option 7" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 7")}
          >
            Sap（system Application Product）
            {hoveredOption === "Option 7" && (
              <div className={style.optionContent6}>
                <span className={style.arrow6}>◄</span>
                <img className={style.logo} src={logo7} alt="img" />
                <h4> Sap（system Application Product）</h4>
                <p>
                  SAP, which stands for System Application Product, is a leading
                  enterprise software company that offers a range of business
                  software solutions. SAP's software applications help
                  organizations manage various aspects of their operations,
                  including finance, human resources, supply chain, customer
                  relationship management, and more.
                </p>
                <a
                  href="https://www.engineersgarage.com/sap-systems-applications-products-in-data-processing/"
                  target="_blank"
                  rel="noopener noreferrer"
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
