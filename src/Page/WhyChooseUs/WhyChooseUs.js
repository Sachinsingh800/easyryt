import React from "react";
import style from "./WhyChooseUs.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import img from "../../Image/Mobile-App-Development.png";
import TenthSection from "../../Section/TenthSection/TenthSection";
import SixthSection from "../../Section/SixthSection/SixthSection";
import EleventhSection from "../../Section/EleventhSection/EleventhSection";
import Footer from "../../Component/Footer/Footer";
import ThirdSection from "../../Section/ThirdSection/ThirdSection";
import Section1 from "./Section1/Section1";

function WhyChooseUs() {
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
          <button type="submit" className={style.submitBtn}>
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
      <Footer />
    </div>
  );
}

export default WhyChooseUs;
