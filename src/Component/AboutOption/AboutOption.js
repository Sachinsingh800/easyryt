import React, { useState } from "react";
import style from "./AboutOption.module.css";
import { Servicesaccordian } from "../../Component/Accordion/Accordion";
import { Link } from "react-router-dom";

function AboutOption() {
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
         About Easyryt
      
          </li>
          <li
            className={hoveredOption === "Option 2" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 2")}
          >
      Out team
    
          </li>

          <li
            className={hoveredOption === "Option 3" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 3")}
          >
           Why Choose Us
       
          </li>

          <li
            className={hoveredOption === "Option 4" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 4")}
          >
          Careers
        
          </li>

          <li
            className={hoveredOption === "Option 5" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 5")}
          >
            Digital Marketing
   
          </li>

          <li
            className={hoveredOption === "Option 6" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 6")}
          >
            Events & Activities
      
          </li>
          <li
            className={hoveredOption === "Option 7" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 7")}
          >
            Great Place To Work

          </li>
        </ul>
      </div>






      <div className={style.navBar}>
        <ul className={style.optionList}>
          <li
            className={hoveredOption === "Option 8" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 8")}
          >
      Delivery Models
      
          </li>
          <li
            className={hoveredOption === "Option 9" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 9")}
          >
           Engagement Models
    
          </li>

          <li
            className={hoveredOption === "Option 10" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 10")}
          >
           Development Methodology
       
          </li>
        </ul>
      </div>




      <div className={style.navBar}>
        <ul className={style.optionList}>
          <li
            className={hoveredOption === "Option 11" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 11")}
          >
      Client Testimonials
      
          </li>
          <li
            className={hoveredOption === "Option 12" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 12")}
          >
           Video Testimonials
    
          </li>

          <li
            className={hoveredOption === "Option 13" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 13")}
          >
           Clutch Testimonials
       
          </li>
        </ul>
      </div>


    </div>
  );
}

export default AboutOption;
