import React from 'react'
import style from "./Footer.module.css"
import logo from "../../Image/logo.png";
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';



function Footer() {
  return (
    <div className={style.containermain}>
    <div className={style.main}>
        <div>
        <Link to={"/"}><img className={style.img} src={logo} alt="logo" /></Link>   
        </div>
        <div>
            <h4>Services</h4>
            <ul className={style.ul}>
              <a href={"/MobileAppDevelopment"}><li>Mobile App Development</li></a>  
          <a href={"/IOSApplicationDevelopmentServices"}>    <li>IOS Development</li></a>  
          <a href={"/AndroidApplicationDevelopmentServices"}>   <li>Anroid Development</li></a>      
          <a href={"/WebApplicationDevelopment"}>  <li>Web App Development</li></a>        
          <Link to={""}><li>Blockchain</li></Link>        
          <Link to={""}><li>Staff Automation</li></Link>      
            </ul>
        </div>
        <div>
        <h4>Company</h4>
            <ul className={style.ul}>
            <a href={"/AboutUs"}>   <li>About easyryt</li></a>      
            <Link to={""}> <li>Our Team</li></Link>       
            <Link to={""}> <li>Event activities</li></Link>      
            <Link to={""}> <li>Careers</li></Link>      
            <a href={"/ContactUs"}>  <li>Contact Us</li></a>     
            <Link to={""}> <li>Portfolio</li></Link>      
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
    <hr />
    <div className={style.bottomBox}>
     
     <h5><BsInstagram/></h5>
     <h5><BsFacebook/></h5>
     <h5><BsTwitter/></h5>
     <h5><AiFillLinkedin/></h5>

   </div>
    </div>
  )
}

export default Footer
