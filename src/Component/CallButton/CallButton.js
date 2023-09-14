import React from 'react'
import style from "./CallButton.module.css"
import call from "../../Image/call.png"
import whatsapp from "../../Image/whatsapp.png"

function CallButton() {
    const handleWhatsAppClick = () => {
        // Replace the following phone number with the desired WhatsApp number
        const phoneNumber = '7678109682';
        const message = 'Hello! I have a question.';
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      };
    
      const handleCallClick = () => {
        // Replace the following phone number with the desired phone number
        const phoneNumber = '7678109682';
        const url = `tel:${phoneNumber}`;
        window.location.href = url;
      };
  return (
    <div className={style.contactBox}>
    <img onClick={handleCallClick} className={style.logo} src={call} alt='call' />
    <img onClick={handleWhatsAppClick} className={style.logo} src={whatsapp} alt='whatsapp' />

  </div>
  )
}

export default CallButton
