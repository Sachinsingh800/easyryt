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
               <Link to={"/AndroidApplicationDevelopmentServices"}><li>Android Application Development Services</li></Link>   
               <Link to={"/IOSApplicationDevelopmentServices"}>     <li>IOS Application Development Services</li></Link>          
               <Link to={"/HybridApplicationDevelopmentServices"}>    <li>Hybrid Application Development Services</li></Link>           
               <Link to={"/MobileAppDevelopment"}>   <li>Mobile App Development</li></Link>          
               <Link to={"/AppBackendDevelopment"}><li>App Backend Development</li></Link>     
                 </ul>
                 <ul  className={style.options}>
                 <Link to={"/FlutterAppDevelopment"}>  <li>Flutter App Development</li></Link>        
                 <Link to={"/ReactNativeAppDevelopment"}>   <li>React Native App Development</li></Link>    
                 <Link to={"/MobileAppTestingandTestingQualityAssurance"}>  <li>Mobile App Testing and Testing Quality Assurance</li></Link>     
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
                  <Link to={"/SearchEngineOptimization"}><li>Search Engine Optimization (SEO)</li></Link>  
                  <Link to={"/PayPerClickAdvertising"}> <li>Pay-Per-Click (PPC) Advertising</li></Link>    
                  <Link to={"/SocialMediaAdvertising"}> <li>Social Media Advertising</li></Link>      
                  <Link to={"/GoogleAdvertising"}><li>Google Advertising</li></Link>        
                  <Link to={"/Facebook&InstagramAdvertising"}> <li>Facebook & Instagram Advertising</li></Link> 
                  <Link to={"/ContentMarketing"}><li>Content Marketing</li></Link>        
                  <Link to={"/SocialMediaMarketing"}> <li>Social Media Marketing</li></Link> 
                 </ul>
                  <ul  className={style.options}>
                  <Link to={"/EmailMarketing"}>  <li>Email Marketing</li></Link>      
                  <Link to={"/AnalyticsandReporting"}>  <li>Analytics and Reporting</li></Link>        
                  <Link to={""}> <li>Website Traffic Advertising</li></Link>        
                  <Link to={""}>  <li>E-Commerce Advertising</li></Link>        
                  <Link to={""}>  <li>App Install Advertising</li></Link>      
                  <Link to={""}> <li>Android App Advertising</li></Link>        
                  <Link to={""}>  <li>IOS App Advertising</li></Link>        
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
                <Link to={""}></Link>         <li>E-Commerce Development</li>
                <Link to={""}></Link>        <li>Front-End Development</li>
                <Link to={""}></Link>         <li>Backend Development</li>
                <Link to={""}></Link>         <li>Full Stack Development Services</li>
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
                 <Link to={""}></Link>       <li>Blog or Personal Website</li>
                 <Link to={""}></Link>       <li>Business Website</li>
                 <Link to={""}></Link>         <li>Ecommerce Website / Online Store</li>
                 <Link to={""}></Link>         <li>Online Courses</li>
                 <Link to={""}></Link>        <li>Podcast Website</li>
                 <Link to={""}></Link>        <li>Affiliate Website</li>
                 <Link to={""}></Link>      <li>Job Board Website</li>
                 </ul>
                 <ul  className={style.options}>
                 <Link to={""}></Link>      <li>Portfolio Websites</li>
                 <Link to={""}></Link>       <li>Travel Website</li>
                 <Link to={""}></Link>        <li>Fashion / Lifestyle Website</li>
               
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
                <Link to={""}></Link>          <li>Mobile App UI?UX Design Services</li>
                <Link to={""}></Link>        <li>Mobile App UI?UX Design Services</li>
                <Link to={""}></Link>        <li>Android App UI/UX Design Services</li>
                <Link to={""}></Link>        <li>Social Media Marketing</li>
                <Link to={""}></Link>        <li>ISO UI/UX Design Servicesg</li>
                <Link to={""}></Link>       <li>Website UI/UX Design Services</li>
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
                <Link to={""}></Link>      <li>React Js Development</li>
                <Link to={""}></Link>         <li>Next js Development</li>
                <Link to={""}></Link>          <li>Vue js Development</li>
                <Link to={""}></Link>         <li>Angular Dvelopment</li>
                <Link to={""}></Link>       <li>React Native Development</li>
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
             <Link to={""}></Link>        <li>Node js</li>
             <Link to={""}></Link>        <li>Laravel</li>
             <Link to={""}></Link>        <li>Python</li>
             <Link to={""}></Link>        <li>API Development</li>
             <Link to={""}></Link>         <li>Database Design and Management</li>
             <Link to={""}></Link>          <li>Server Architecture and Configuration,</li>
             <Link to={""}></Link>        <li>Cloud Services Integration,SAP Industry Solutions</li>
                 </ul>
             <ul  className={style.options}>
             <Link to={"/Backend Framework Development"}> <li>Backend Framework Development</li></Link>       
             <Link to={"/WebApplicationDevelopment"}><li>Web Application Development</li></Link>      
             <Link to={"/MobileBackendDevelopment"}><li>Mobile Backend Development</li></Link>   
             <Link to={"/RealTimeDataProcessing"}><li>Real-Time Data Processing</li></Link>  
             <Link to={"/Performance Optimization"}><li>Performance Optimization</li></Link>   
             <Link to={"/IntegrationwithThirdPartyServices"}> <li>Integration with Third-Party Services</li></Link>      
             <Link to={"/DevOpsandContinuousIntegration"}>   <li>DevOps and Continuous Integration/Continuous Deployment (CI/CD)</li></Link>    
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
                <Link to={"/Azure"}>  <li>Azure</li></Link>       
                <Link to={"/Aws"}> <li>Aws</li></Link>        
                <Link to={"/GoogleCloud"}>   <li>Google Cloud</li></Link>      
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
