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
      As a native app development company, we have expertise in developing Native apps for different platforms. Take a look at
our expertise:
      </p>
      <div className={style.innerbox}>
        <div className={style.card}>
          <img className={style.img} src={logo1} alt="img1" />
          <h6>Android App</h6>
          <p>
            Since Business Apps Are Custom Built With The Companys Needs In Mind
            They Act As A Robust App That Performs Various Tasks Eliminating The
            Need For Multiple Apps.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo2} alt="img1" />
          <h6>IOS App</h6>
          <p>
            Since Business Apps Are Custom Built With The Companys Needs In Mind
            They Act As A Robust App That Performs Various Tasks Eliminating The
            Need For Multiple Apps.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo3} alt="img1" />
          <h6>Tablet App development</h6>
          <p>
            Since Business Apps Are Custom Built With The Companys Needs In Mind
            They Act As A Robust App That Performs Various Tasks Eliminating The
            Need For Multiple Apps.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo4} alt="img1" />
          <h6>IPad App Development</h6>
          <p>
            Since Business Apps Are Custom Built With The Companys Needs In Mind
            They Act As A Robust App That Performs Various Tasks Eliminating The
            Need For Multiple Apps.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo5} alt="img1" />
          <h6>AR App Development</h6>
          <p>
            Since Business Apps Are Custom Built With The Companys Needs In Mind
            They Act As A Robust App That Performs Various Tasks Eliminating The
            Need For Multiple Apps.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo6} alt="img1" />
          <h6>Marketing Automation Solutions</h6>
          <p>
            Since Business Apps Are Custom Built With The Companys Needs In Mind
            They Act As A Robust App That Performs Various Tasks Eliminating The
            Need For Multiple Apps.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
