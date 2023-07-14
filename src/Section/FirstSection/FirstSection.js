import React from 'react'
import style from "./FirstSection.module.css"
import Form from '../../Component/Form/Form'
import img from "../../Image/bg2.png"

function FirstSection() {

    const handleWhatsAppClick = () => {
      // Replace the following phone number with the desired WhatsApp number
      const phoneNumber = '1234567890';
      const message = 'Hello! I have a question.';
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
  
    const handleCallClick = () => {
      // Replace the following phone number with the desired phone number
      const phoneNumber = '1234567890';
      const url = `tel:${phoneNumber}`;
      window.location.href = url;
    };

  return (
    <div className={style.main}>
      <div className={style.leftBox}>
        <span>Smart Digital Solutions for Growing SMEs & MSMEs</span>
        <p>Trusted by over 1,000 ambitious brands</p>
        <img className={style.img} src={img} alt='handimg' />
        <div className={style.btnbox}> 
          <button className={style.btn} onClick={handleCallClick }>Call</button>
          <button className={style.btn} onClick={ handleWhatsAppClick }>Whatsapp</button>
        </div>
      </div>
      <div className={style.rightBox}>
     <div className={style.form}><Form/></div>  
      </div>
    </div>
  )
}

export default FirstSection
