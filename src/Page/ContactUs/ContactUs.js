import React, { useState } from "react";
import style from "./ContactUs.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import ContactUsForm from "../../Component/ContactUsForm/ContactUsForm";
import  logo1 from "../../Image/Dominos.png"
import  logo2 from "../../Image/kotlin.png"
import logo3 from '../../Image/800px-Kentucky_Fried_Chicken_201x_logo.svg.png';
import logo4 from '../../Image/Mars.png';
import logo5 from '../../Image/pngwing.com (2).png';
import logo6 from "../../Image/SAP_(6).png"
import SecondSection from "../../Section/SecondSection/SecondSection";
import TenthSection from "../../Section/TenthSection/TenthSection";
import FourteenSection from "../../Section/FourteenSection/FourteenSection";
import Footer from "../../Component/Footer/Footer";

const ContactUs = () => {


  return (
    <div className={style.main}>
      <NavBar />
      <h1 className={style.heading}>Discover the Future of Technology Together!</h1>
      <p className={style.para}>
        Every day, Easyryt professionals empower businesses worldwide to
        fast-track their digital evolution and create a more resilient,
        sustainable, and equitable future Together.
      </p>
      <div className={style.container}>
        <div className={style.rightbox}>
            <h3 >Trusted by Leading Brands</h3>
            <div>
            <img className={style.img} src={logo1} alt="logo" />
            </div>
            <div>
            <img  className={style.img}  src={logo2} alt="logo" />
            </div>
            <div>
            <img   className={style.img}  src={logo3} alt="logo" />
            </div>
            <div>
            <img  className={style.img}  src={logo4} alt="logo" />
            </div>
            <div>
            <img  className={style.img}  src={logo5} alt="logo" />
            </div>
            <div>
            <img  className={style.img}  src={logo6} alt="logo" />
            </div>
     
       
        </div>
        <div className={style.formbox}>
        <ContactUsForm/>
        </div>
      </div>
      <SecondSection/>
      <TenthSection/>
      <FourteenSection/>
      <Footer/>
    </div>
  );
};

export default ContactUs;
