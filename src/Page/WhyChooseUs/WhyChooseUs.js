import React ,{useState}from "react";
import style from "./WhyChooseUs.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Content Marketing 2.png";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import ThirdSection from "../../Section/ThirdSection/ThirdSection";
import Section1 from "./Section1/Section1";
import CallButton from "../../Component/CallButton/CallButton";
import PopupOption from "../../Component/PopupOption/PopupOption";

function WhyChooseUs() {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div>
          <h1>Why Choose Us?</h1>
          <p>
            We acknowledge the importance of your project, and here are several
            compelling reasons to become a part of the Easyryt community and
            join the ranks of over 500+ clients who have relied on us for the
            past two decades.
          </p>
          <button type="submit"
              onClick={handleGetStartedClick}
           className={style.submitBtn}
           >
            Join Now
          </button>
        </div>
        <div>
          <img className={style.img} src={img} alt="img" />
        </div>
      </div>
      <Section1 />
      <ThirdSection />

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

export default WhyChooseUs;
