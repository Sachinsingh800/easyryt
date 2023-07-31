import React ,{useState} from "react";
import style from "./AboutUs.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Website Traffic Advertising 2.png";
import Section1 from "./section1/Section1";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import ThirdSection from "../../Section/ThirdSection/ThirdSection";
import CallButton from "../../Component/CallButton/CallButton";
import PopupOption from "../../Component/PopupOption/PopupOption";

function AboutUs() {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>We Transform Digital Solutions</h1>
          <p>
            Easyryt Software Solutions offers the tools you require to
            revolutionize & expedite your business. We stand as a prominent
            software development enterprise with over a decade of experience in
            crafting cutting-edge resolutions.
          </p>
          <button type="submit" 
                onClick={handleGetStartedClick}
          className={style.submitBtn}>
          Join Now
          </button>
        </div>
        <div>
          <img className={style.img} src={img} alt="img" />
        </div>
      </div>
      <Section1 />
      <ThirdSection/>

      <TenthSection />
      <SixthSection />
      <EleventhSection />
      <CallButton/>
      <Footer />
             {/* Popup window */}
             {showPopup && (
        <>
        <button onClick={()=>setShowPopup(false)} className={style.closebtn}>Close</button>
      <PopupOption/>
      </>
      )}
    </div>
  );
}

export default AboutUs;
