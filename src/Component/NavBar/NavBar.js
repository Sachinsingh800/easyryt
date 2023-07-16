import React, { useState } from "react";
import style from "./NavBar.module.css";
import logo from "../../Image/logo.png";
import logo2 from "../../Image/opbg.png";
import HamburgerBtn from "../HamburgerBtn/HamburgerBtn";
import ServicesOption from "../ServicesOption/ServicesOption";

function NavBar() {
  const [activeLink, setActiveLink] = useState(null);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isBlogHovered, setIsBlogHovered] = useState(false);

  const handleServicesHover = (link) => {
    setIsServicesHovered(true);
    setIsAboutHovered(false);
    setIsBlogHovered(false);
    setIsContactHovered(false);
    setActiveLink(link);
  };

  const handleServicesLeave = () => {
    setIsServicesHovered(false);
    setActiveLink(null);
  };

  const handleAboutHover = (link) => {
    setIsAboutHovered(true);
    setIsServicesHovered(false);
    setIsBlogHovered(false);
    setIsContactHovered(false);
    setActiveLink(link);
  };

  const handleAboutLeave = () => {
    setIsAboutHovered(false);
    setActiveLink(null);
  };

  const handleContactHover = (link) => {
    setIsContactHovered(true);
    setIsServicesHovered(false);
    setIsAboutHovered(false);
    setIsBlogHovered(false);

    setActiveLink(link);
  };

  const handleContactLeave = () => {
    setIsContactHovered(false);
    setActiveLink(null);
  };

  const handleBlogHover = (link) => {
    setIsBlogHovered(true);
    setIsServicesHovered(false);
    setIsAboutHovered(false);
    setIsContactHovered(false);
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
            <ServicesOption />
            <div className={style.rightbox}>
              <h3>
                Lets grow together <span>Partner with us</span>
              </h3>
              <button>Get A quote</button>
              <img className={style.img2} src={logo2} alt="logo" />
            </div>
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
            <div className={style.rightbox2}>
              <h3>
                {" "}
                <span>Company</span>
              </h3>
              <p>
                We Provide Custom Web Design, Mobile App Development Solutions
                for your venture or start-ups.We are professional and
                experienced in delivering Customized & Superior quality Web
                Design and App development solutions at the most reasonable
                price. Here we assist you to Figure out the finest results out
                of your funds through our digital services.
              </p>
              <button>About Company</button>
            </div>
            <ServicesOption />
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
            <ServicesOption />
            <div className={style.rightbox}>
              <h3>
                Lets grow together <span>Partner with us</span>
              </h3>
              <button>Get A quote</button>
              <img className={style.img2} src={logo2} alt="logo" />
            </div>
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
            <ServicesOption />
            <div className={style.rightbox}>
              <h3>
                Lets grow together <span>Partner with us</span>
              </h3>
              <button>Get A quote</button>
              <img className={style.img2} src={logo2} alt="logo" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
