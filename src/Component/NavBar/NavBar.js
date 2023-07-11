import React, { useState } from 'react';
import style from "./NavBar.module.css";
import logo from "../Image/logo.png";

function NavBar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={style.main}>
      <img className={style.img} src={logo} alt='logo' />
      <div className={style.innerBox}>
        <h4
          className={activeLink === 'services' ? style.active : ''}
          onClick={() => handleLinkClick('services')}
        >
          Services
        </h4>
        <h4
          className={activeLink === 'about' ? style.active : ''}
          onClick={() => handleLinkClick('about')}
        >
          About
        </h4>
        <h4
          className={activeLink === 'contact' ? style.active : ''}
          onClick={() => handleLinkClick('contact')}
        >
          Contact Us
        </h4>
        <h4
          className={activeLink === 'blog' ? style.active : ''}
          onClick={() => handleLinkClick('blog')}
        >
          Blog
        </h4>
      </div>
    </div>
  );
}

export default NavBar;
