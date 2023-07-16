import React, { useState } from "react";
import style from "./ServicesOption.module.css";
import logo1 from "../../Image/graphic-design-.png";
import logo2 from "../../Image/mob-logo.png";
import logo3 from "../../Image/PWA.png";
import logo4 from "../../Image/erp.png";
import logo5 from "../../Image/digitalmarketing.png";
import logo6 from "../../Image/Pm.png";
import logo7 from "../../Image/SAP_(6).png";
import { Servicesaccordian } from "../../Component/Accordion/Accordion";
import { Link } from "react-router-dom";

function ServicesOption() {
  const [hoveredOption, setHoveredOption] = useState(null);

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
                  <li>Native Mobile App Development</li>
                  <li>Cross-Platform App Development</li>
                  <li>Mobile Web Development</li>
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>Backend Development for Mobile Apps</li>
                  <li>Mobile App Testing and Quality Assurance:</li>
                  <li>Mobile App UI/UX Design</li>
                 </ul>
              
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
                  <ul  className={style.options}>
                  <li>Native Mobile App Development</li>
                  <li>Cross-Platform App Development</li>
                  <li>Mobile Web Development</li>
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>Backend Development for Mobile Apps</li>
                  <li>Mobile App Testing and Quality Assurance:</li>
                  <li>Mobile App UI/UX Design</li>
                 </ul>
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
                <ul  className={style.options}>
                  <li>Native Mobile App Development</li>
                  <li>Cross-Platform App Development</li>
                  <li>Mobile Web Development</li>
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>Backend Development for Mobile Apps</li>
                  <li>Mobile App Testing and Quality Assurance:</li>
                  <li>Mobile App UI/UX Design</li>
                 </ul>
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
                 <ul  className={style.options}>
                  <li>Native Mobile App Development</li>
                  <li>Cross-Platform App Development</li>
                  <li>Mobile Web Development</li>
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>Backend Development for Mobile Apps</li>
                  <li>Mobile App Testing and Quality Assurance:</li>
                  <li>Mobile App UI/UX Design</li>
                 </ul>
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
                <ul  className={style.options}>
                  <li>Native Mobile App Development</li>
                  <li>Cross-Platform App Development</li>
                  <li>Mobile Web Development</li>
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>Backend Development for Mobile Apps</li>
                  <li>Mobile App Testing and Quality Assurance:</li>
                  <li>Mobile App UI/UX Design</li>
                 </ul>
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
                <ul  className={style.options}>
                  <li>Native Mobile App Development</li>
                  <li>Cross-Platform App Development</li>
                  <li>Mobile Web Development</li>
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>Backend Development for Mobile Apps</li>
                  <li>Mobile App Testing and Quality Assurance:</li>
                  <li>Mobile App UI/UX Design</li>
                 </ul>
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
             <ul  className={style.options}>
                  <li>Native Mobile App Development</li>
                  <li>Cross-Platform App Development</li>
                  <li>Mobile Web Development</li>
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>Backend Development for Mobile Apps</li>
                  <li>Mobile App Testing and Quality Assurance:</li>
                  <li>Mobile App UI/UX Design</li>
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
