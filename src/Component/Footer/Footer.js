import React from 'react'
import style from "./Footer.module.css"
import logo from "../../Image/logo.png";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={style.main}>
        <div>
        <Link to={"/"}><img className={style.img} src={logo} alt="logo" /></Link>   
        </div>
        <div>
            <h4>Services</h4>
            <ul className={style.ul}>
                <li>Mobile App Development</li>
                <li>IOS Development</li>
                <li>Anroid Development</li>
                <li>Web App Development</li>
                <li>Blockchain</li>
                <li>Staff Automation</li>
            </ul>
        </div>
        <div>
        <h4>Company</h4>
            <ul className={style.ul}>
                <li>About easyryt</li>
                <li>Our Team</li>
                <li>Event activities</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Portfolio</li>
            </ul>
        </div>
        <div>
        <h4>Contact For Sales</h4>
            <ul className={style.ul}>
                <li>info@easyryt.com</li>
                <li>+91 723725656</li>
                <li><h6>Address</h6></li>
                <li className={style.address}>5675634 ,$$$,$$$ , Delhi-110056</li>
            
            </ul>
        </div>
      
    </div>
  )
}

export default Footer
