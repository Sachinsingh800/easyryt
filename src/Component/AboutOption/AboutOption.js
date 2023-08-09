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
        <Link to={"/About-Us"}>
        <li
            className={hoveredOption === "Option 1" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 1")}
          >
            About Easyryt
          </li>
          </Link>    
       
          {/* <li
            className={hoveredOption === "Option 2" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 2")}
          >
            Out team
          </li> */}


<Link to={"/Why-Choose-Us"}> 
<li
            className={hoveredOption === "Option 3" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 3")}
          >
            Why Choose Us
          </li>
</Link>
        

          {/* <li
            className={hoveredOption === "Option 4" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 4")}
          >
            Careers
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default AboutOption;
