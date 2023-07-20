import React from 'react'
import style from "./Home.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import FirstSection from '../../Section/FirstSection/FirstSection'
import SecondSection from '../../Section/SecondSection/SecondSection'
import ThirdSection from '../../Section/ThirdSection/ThirdSection'
import ForthSection from '../../Section/ForthSection/ForthSection'
import FifthSection from '../../Section/FifthSection/FifthSection'
import SixthSection from '../../Section/SixthSection/SixthSection'
import SeventhSection from '../../Section/SeventhSection/SeventhSection'
import EightSection from '../../Section/EightSection/EightSection'
import NinthSection from '../../Section/NinthSection/NinthSection'
import call from "../../Image/call.png"
import whatsapp from "../../Image/whatsapp.png"
import TenthSection from '../../Section/TenthSection/TenthSection'
import Popup from '../../Component/Popup/Popup'
import EleventhSection from '../../Section/EleventhSection/EleventhSection'
import Footer from '../../Component/Footer/Footer'
import TwelvethSection from '../../Section/TwelvethSection/TwelvethSection'
import ThirteenthSection from '../../Section/ThirteenthSection/ThirteenthSection'
import FourteenSection from '../../Section/FourteenSection/FourteenSection'
import ClientsAccordion from '../../Component/ClientsAccordion/ClientsAccordion'

function Home() {

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
        <NavBar/>
        <Popup/>
          <FirstSection/>
          <SecondSection/>
          <ThirdSection/>
          <ForthSection/>
          <FifthSection/>
          <SixthSection/>
          <SeventhSection/>
          {/* <EightSection/> */}
          <NinthSection/>
          <TenthSection/>
          <EleventhSection/>
          <TwelvethSection/>
          <ThirteenthSection/>
          <FourteenSection/>
          <ClientsAccordion/>
          <Footer/>
          <div className={style.contactBox}>

            <img onClick={handleCallClick} className={style.logo} src={call} alt='call' />
            <img onClick={handleWhatsAppClick} className={style.logo} src={whatsapp} alt='whatsapp' />
   
          </div>
    </div>
  )
}

export default Home
