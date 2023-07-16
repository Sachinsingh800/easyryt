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
                  <li>Service Workers</li>
                  <li>Web App Manifest</li>
                  <li>Responsive Design</li>
                  <li>Application Shell Architecture</li>
                  <li>App Shell and Content Caching</li>
                  <li>Push Notifications</li>
                  <li>IndexedDB</li>
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
                  <li>Backend Technologies</li>
                  <li>Frontend Technologies</li>
                  <li>Integration and Middleware</li>
                  <li>Security and Identity Management</li>
                  <li>Enterprise Resource Planning (ERP) Systems</li>
                  <li>Business Process Management (BPM)</li>
                  <li>Data Analytics and Business Intelligence (BI)</li>
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
                  <li>Wireframing and Prototyping</li>
                  <li>Visual Design</li>
                  <li>UI Component Libraries</li>
                  <li>Typography</li>
                  <li>Color Palettes and Themes</li>
                  <li>Interaction Design and Animation</li>
                  <li>User Testing and Feedback</li>
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
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Pay-Per-Click (PPC) Advertising</li>
                  <li>Content Marketing</li>
                  <li>Social Media Marketing</li>
                  <li>Email Marketing</li>
                  <li>Conversion Rate Optimization (CRO)</li>
                  <li>Analytics and Reporting</li>
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
                  <li>Market Research</li>
                  <li>Product Strategy</li>
                  <li>Product Planning</li>
                  <li>Agile Development</li>
                  <li>User Experience (UX) Design</li>
                  <li>Feature Prioritization</li>
                  <li>Roadmap Management</li>
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
                  <li>SAP ERP (Enterprise Resource Planning)</li>
                  <li>SAP CRM (Customer Relationship Management)</li>
                  <li>SAP SCM (Supply Chain Management)</li>
                  <li>SAP SRM (Supplier Relationship Management)</li>
                  <li>SAP HCM (Human Capital Management)</li>
                  <li>SAP Analytics</li>
                  <li>SAP Industry Solutions</li>
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
