import React, { useState } from "react";
import style from "./ContactUs.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import ContactUsForm from "../../Component/ContactUsForm/ContactUsForm";

const ContactUs = () => {


  return (
    <div className={style.main}>
      <NavBar />
      <h1>Discover the Future of Technology Together!</h1>
      <p>
        Every day, Easyryt professionals empower businesses worldwide to
        fast-track their digital evolution and create a more resilient,
        sustainable, and equitable future Together.
      </p>
      <div className={style.container}>
        <ContactUsForm/>
      </div>
   
    </div>
  );
};

export default ContactUs;
