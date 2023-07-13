import React, { useState } from 'react';
import style from "./ThirdSection.module.css";
import logo1 from "../../Image/graphic-design-.png" 
import { Servicesaccordian } from '../../Component/Accordion/Accordion';

function ThirdSection() {
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleOptionHover = (option) => {
    setHoveredOption(option);
  };

  return (
    <div className={style.main}>
        <h1>Our Services</h1>
        <div className={style.accodian}>
       < Servicesaccordian />
        </div>
    <div className={style.navBar}>
      <ul className={style.optionList}>
        <li
          className={hoveredOption === 'Option 1' ? style.active : ''}
          onMouseOver={() => handleOptionHover('Option 1')}
        >
    Mobile App Development
          {hoveredOption === 'Option 1' && (
            <div className={style.optionContent}>
                <span className={style.arrow}>◄</span>
                <img className={style.logo} src={logo1} alt='img' />
              <h4> Design  UI/UX</h4>
              <p>UI/UX design aims to create a positive user experience that encourages customers to stick with a brand or product.
              While a UX Designer  decides how the user interface works, the UI designer decides how the user interface looks.
            </p>
            <h5>Read More ᐳ</h5>
            </div>
          )}
        </li>
        <li
          className={hoveredOption === 'Option 2' ? style.active : ''}
          onMouseOver={() => handleOptionHover('Option 2')}
        >
    Progressive Web App
          {hoveredOption === 'Option 2' && (
            <div className={style.optionContent}>
                 <span className={style.arrow}>◄</span>
                 <img className={style.logo} src={logo1} alt='img' />
              <h4> Design  UI/UX</h4>
              <p>UI/UX design aims to create a positive user experience that encourages customers to stick with a brand or product.
              While a UX Designer  decides how the user interface works, the UI designer decides how the user interface looks.
            </p>
            <h5>Read More ᐳ</h5>
            </div>
          )}
        </li>
        
        <li
          className={hoveredOption === 'Option 3' ? style.active : ''}
          onMouseOver={() => handleOptionHover('Option 3')}
        >
        Enterprise Application Development
          {hoveredOption === 'Option 3' && (
            <div className={style.optionContent}>
                   <span className={style.arrow}>◄</span>
                   <img className={style.logo} src={logo1} alt='img' />
              <h4> Design  UI/UX</h4>
              <p>UI/UX design aims to create a positive user experience that encourages customers to stick with a brand or product.
              While a UX Designer  decides how the user interface works, the UI designer decides how the user interface looks.
            </p>
            <h5>Read More ᐳ</h5>
            </div>
          )}
        </li>

        <li
          className={hoveredOption === 'Option 4' ? style.active : ''}
          onMouseOver={() => handleOptionHover('Option 4')}
        >
        Design  UI/UX
          {hoveredOption === 'Option 4' && (
            <div className={style.optionContent}>
                   <span className={style.arrow}>◄</span>
                   <img className={style.logo} src={logo1} alt='img' />
              <h4> Design  UI/UX</h4>
              <p>UI/UX design aims to create a positive user experience that encourages customers to stick with a brand or product.
              While a UX Designer  decides how the user interface works, the UI designer decides how the user interface looks.
            </p>
            <h5>Read More ᐳ</h5>
            </div>
          )}
        </li>

        <li
          className={hoveredOption === 'Option 5' ? style.active : ''}
          onMouseOver={() => handleOptionHover('Option 5')}
        >
  Digital Marketing
          {hoveredOption === 'Option 5' && (
            <div className={style.optionContent}>
                   <span className={style.arrow}>◄</span>
                   <img className={style.logo} src={logo1} alt='img' />
              <h4> Design  UI/UX</h4>
              <p>UI/UX design aims to create a positive user experience that encourages customers to stick with a brand or product.
              While a UX Designer  decides how the user interface works, the UI designer decides how the user interface looks.
            </p>
            <h5>Read More ᐳ</h5>
            </div>
          )}
        </li>

        <li
          className={hoveredOption === 'Option 6' ? style.active : ''}
          onMouseOver={() => handleOptionHover('Option 6')}
        >
    Product Management
          {hoveredOption === 'Option 6' && (
            <div className={style.optionContent}>
                   <span className={style.arrow}>◄</span>
                   <img className={style.logo} src={logo1} alt='img' />
              <h4> Design  UI/UX</h4>
              <p>UI/UX design aims to create a positive user experience that encourages customers to stick with a brand or product.
              While a UX Designer  decides how the user interface works, the UI designer decides how the user interface looks.
            </p>
            <h5>Read More ᐳ</h5>
            </div>
          )}
        </li>
        <li
          className={hoveredOption === 'Option 7' ? style.active : ''}
          onMouseOver={() => handleOptionHover('Option 7')}
        >
Sap（system Application  Product）
          {hoveredOption === 'Option 7' && (
            <div className={style.optionContent}>
                   <span className={style.arrow}>◄</span>
                   <img className={style.logo} src={logo1} alt='img' />
              <h4> Design  UI/UX</h4>
              <p>UI/UX design aims to create a positive user experience that encourages customers to stick with a brand or product.
              While a UX Designer  decides how the user interface works, the UI designer decides how the user interface looks.
            </p>
            <h5>Read More ᐳ</h5>
            </div>
          )}
        </li>
      </ul>
    </div>
    </div>
  );
}

export default ThirdSection;
