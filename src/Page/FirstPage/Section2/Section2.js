import React from "react";
import style from "./Section2.module.css";
import logo1 from "../../../Image/chart.gif";
import logo2 from "../../../Image/date.gif";
import logo3 from "../../../Image/id.gif";
import logo4 from "../../../Image/page.gif";
import logo5 from "../../../Image/setting.gif";
import logo6 from "../../../Image/message.gif";

function Section2() {
  return (
    <div className={style.main}>
      <h1>The Expertise Of Our Native App Development Service</h1>
      <p>
        As a native app development company, we have expertise in developing
        Native apps for different platforms. Take a look at our expertise:
      </p>
      <div className={style.innerbox}>
        <div className={style.card}>
          <img className={style.img} src={logo1} alt="img1" />
          <h6>Android App</h6>
          <p>
            Our Android applications are renowned for their captivating User
            Interface UI/UX, rapid loading speeds, and reliable performance.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo2} alt="img1" />
          <h6>IOS App</h6>
          <p>
            Our iOS apps embody innovative concepts, featuring intuitive GUIs.
            With our proficient iPhone application development team, you'll find
            the perfect solution for your needs.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo3} alt="img1" />
          <h6>Tablet App development</h6>
          <p>
            We offer extensive tablet app development solutions to diverse
            industries, catering to startups and leading enterprises alike.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo4} alt="img1" />
          <h6>IPad App Development</h6>
          <p>
            With years of proficiency in native app development, our team can
            fulfill your unique requirements. We provide impeccable, visually
            appealing iPad app development services using Flutter.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo5} alt="img1" />
          <h6>AR App Development</h6>
          <p>
            Benefiting from over 15 years of expertise in 3D modeling and
            Augmented Reality (AR), we deliver top-notch AR software swiftly.
            Our team crafts cutting-edge virtual reality solutions, harnessing
            the latest tools and advancements.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo6} alt="img1" />
          <h6>Marketing Automation Solutions</h6>
          <p>
            Catering to diverse user needs, our team develops Native
            applications that precisely align with their business requirements.
            Leveraging the finest native app development platform, we ensure
            optimal results for every project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
