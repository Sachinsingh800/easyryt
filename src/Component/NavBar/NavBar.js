import React, { useState } from "react";
import style from "./NavBar.module.css";
import logo from "../../Image/logo.png";
import HamburgerBtn from "../HamburgerBtn/HamburgerBtn";

function NavBar() {
  const [activeLink, setActiveLink] = useState(null);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isBlogHovered, setIsBlogHovered] = useState(false);

  const handleServicesHover = (link) => {
    setIsServicesHovered(true);
    setIsAboutHovered(false)
     setIsBlogHovered(false)
     setIsContactHovered(false)
    setActiveLink(link);
  };

  const handleServicesLeave = () => {
    setIsServicesHovered(false);
    setActiveLink(null);
  };

  const handleAboutHover = (link) => {
    setIsAboutHovered(true);
    setIsServicesHovered(false);
     setIsBlogHovered(false)
     setIsContactHovered(false)
    setActiveLink(link);
  };

  const handleAboutLeave = () => {
    setIsAboutHovered(false);
    setActiveLink(null);
  };

  const handleContactHover = (link) => {
    setIsContactHovered(true);
    setIsServicesHovered(false);
    setIsAboutHovered(false)
     setIsBlogHovered(false)
 
    setActiveLink(link);
  };

  const handleContactLeave = () => {
    setIsContactHovered(false);
    setActiveLink(null);
  };

  const handleBlogHover = (link) => {
    setIsBlogHovered(true);
    setIsServicesHovered(false);
    setIsAboutHovered(false)
     setIsContactHovered(false)
    setActiveLink(link);
  };

  const handleBlogLeave = () => {
    setIsBlogHovered(false);
    setActiveLink(null);
  };

  return (
    <div className={style.main}>
      <img className={style.img} src={logo} alt="logo" />
      <div className={style.HamburgerBtn}>
        <HamburgerBtn />
      </div>
      <div className={style.innerBox}>
        <h4
          className={activeLink === "services" ? style.active : ""}
          onMouseEnter={() => handleServicesHover("services")}
        >
          Services
        </h4>

        {isServicesHovered && (
          <div onMouseLeave={handleServicesLeave} className={style.servicesDiv}>
            {/* Content of the services div */}
            <p>This is the services section.</p>
          </div>
        )}

        <h4
          className={activeLink === "about" ? style.active : ""}
          onMouseEnter={() => handleAboutHover("about")}
        >
          About
        </h4>
        {isAboutHovered && (
          <div onMouseLeave={handleAboutLeave} className={style.servicesDiv}>
            {/* Content of the services div */}
            <p>This is the ABout section.</p>
          </div>
        )}

        <h4
          className={activeLink === "contact" ? style.active : ""}
          onMouseEnter={() => handleContactHover("contact")}
        >
          Contact Us
        </h4>

        {isContactHovered && (
          <div onMouseLeave={handleContactLeave} className={style.servicesDiv}>
            {/* Content of the services div */}
            <p>This is the COntact section.</p>
          </div>
        )}

        <h4
          className={activeLink === "blog" ? style.active : ""}
          onMouseEnter={() => handleBlogHover("blog")}
        >
          Blog
        </h4>

        {isBlogHovered && (
          <div onMouseLeave={handleBlogLeave} className={style.servicesDiv}>
            {/* Content of the services div */}
            <p>This is the blog section.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
