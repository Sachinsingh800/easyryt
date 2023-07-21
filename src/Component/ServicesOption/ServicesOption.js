import React, { useState } from "react";
import style from "./ServicesOption.module.css";
import { Servicesaccordian } from "../../Component/Accordion/Accordion";
import { Link } from "react-router-dom";
import logo2 from "../../Image/opbg.png";

function ServicesOption() {
  const [hoveredOption, setHoveredOption] = useState("Option 1");

  const handleOptionHover = (option) => {
    setHoveredOption(option);
  };

  return (
    <div className={style.main}>
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
                 <ul  className={style.options}>
                <Link to={"/FirstPage"}> <li>Native Mobile App Development</li></Link> 
                <Link to={"/CrossPlatformAppDevelopment"}> <li>Cross-Platform App Development</li></Link> 
                  <li>Android Application Development Services</li>
                  <li>IOS Application Development Services</li>
                  <li>Hybrid Application Development Services</li>
                  <li>Mobile App Development</li>
                  <li>App Backend Development</li>
                 </ul>
                 <ul  className={style.options}>
               <li>Flutter App Development</li>
                 <li>Cross-Platform App Development</li>
                  <li>React Native App Development</li>
                  <li>Mobile App Testing and Testing Quality Assurance</li>
                 </ul>
              </div>
            )}
          </li>
          <li
            className={hoveredOption === "Option 2" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 2")}
          >
           Digital Marketing
            {hoveredOption === "Option 2" && (
              <div className={style.optionContent1}>
                  <ul  className={style.options}>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Pay-Per-Click (PPC) Advertising</li>
                  <li>Social Media Advertising</li>
                  <li>Google Advertising</li>
                  <li>Facebook & Instagram Advertising</li>
                  <li>Content Marketing</li>
                  <li>Social Media Marketing</li>
                 </ul>
                  <ul  className={style.options}>
                  <li>Email Marketing</li>
                  <li>Analytics and Reporting</li>
                  <li>Website Traffic Advertising</li>
                  <li>E-Commerce Advertising</li>
                  <li>App Install Advertising</li>
                  <li>Android App Advertising</li>
                  <li>IOS App Advertising</li>
                 </ul>
              </div>
            )}
          </li>

          <li
            className={hoveredOption === "Option 3" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 3")}
          >
        Website Development
            {hoveredOption === "Option 3" && (
              <div className={style.optionContent2}>
                <ul  className={style.options}>
                  <li>E-Commerce Development</li>
                  <li>Front-End Development</li>
                  <li>Backend Development</li>
                  <li>Full Stack Development Services</li>
                 </ul>
              </div>
            )}
          </li>

          <li
            className={hoveredOption === "Option 4" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 4")}
          >
     WordPress Development
            {hoveredOption === "Option 4" && (
              <div className={style.optionContent3}>
                 <ul  className={style.options}>
                  <li>Blog or Personal Website</li>
                  <li>Business Website</li>
                  <li>Ecommerce Website / Online Store</li>
                  <li>Online Courses</li>
                  <li>Podcast Website</li>
                  <li>Affiliate Website</li>
                  <li>Job Board Website</li>
                 </ul>
                 <ul  className={style.options}>
                  <li>Portfolio Websites</li>
                  <li>Travel Website</li>
                  <li>Fashion / Lifestyle Website</li>
               
                 </ul>
              </div>
            )}
          </li>

          <li
            className={hoveredOption === "Option 5" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 5")}
          >
      UI/UX Design
            {hoveredOption === "Option 5" && (
              <div className={style.optionContent4}>
                <ul  className={style.options}>
                  <li>Mobile App UI?UX Design Services</li>
                  <li>Mobile App UI?UX Design Services</li>
                  <li>Android App UI/UX Design Services</li>
                  <li>Social Media Marketing</li>
                  <li>ISO UI/UX Design Servicesg</li>
                  <li>Website UI/UX Design Services</li>
                 </ul>
              </div>
            )}
          </li>

          <li
            className={hoveredOption === "Option 6" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 6")}
          >
Front End Development
            {hoveredOption === "Option 6" && (
              <div className={style.optionContent5}>
                <ul  className={style.options}>
                  <li>React Js Development</li>
                  <li>Next js Development</li>
                  <li>Vue js Development</li>
                  <li>Angular Dvelopment</li>
                  <li>React Native Development</li>
                 </ul>
              </div>
            )}
          </li>
          <li
            className={hoveredOption === "Option 7" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 7")}
          >
      Backend Development
            {hoveredOption === "Option 7" && (
              <div className={style.optionContent6}>
             <ul  className={style.options}>
                  <li>Node js</li>
                  <li>Laravel</li>
                  <li>Python</li>
                  <li>API Development</li>
                  <li>Database Design and Management</li>
                  <li>Server Architecture and Configuration,</li>
                  <li>Cloud Services Integration,SAP Industry Solutions</li>
                 </ul>
             <ul  className={style.options}>
                  <li>Backend Framework Development,</li>
                  <li>Web Application Development</li>
                  <li>Mobile Backend Development</li>
                  <li>Real-Time Data Processing</li>
                  <li>Performance Optimization</li>
                  <li>Integration with Third-Party Services</li>
                  <li>DevOps and Continuous Integration/Continuous Deployment (CI/CD)</li>
                 </ul>
              </div>
            )}
          </li>
          <li
            className={hoveredOption === "Option 8" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 8")}
          >
  Cloud
            {hoveredOption === "Option 8" && (
              <div className={style.optionContent7}>
                <ul  className={style.options}>
                  <li>Azure</li>
                  <li>Aws</li>
                  <li>Google Cloud</li>
                 </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesOption;
