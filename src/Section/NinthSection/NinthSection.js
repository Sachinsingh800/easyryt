import React from "react";
import style from "./NinthSection.module.css";
import logo1 from "../../Image/chart.gif";
import logo2 from "../../Image/date.gif";
import logo3 from "../../Image/id.gif";
import logo4 from "../../Image/page.gif";
import logo5 from "../../Image/setting.gif";
import logo6 from "../../Image/message.gif";

function NinthSection() {
  return (
    <div className={style.main}>
      <h1>Benefits Of Mobile App Development</h1>
      <p>
        Here Are Some Of The Most Advantage Of Mobile App Growth For Business.
      </p>
      <div className={style.innerbox}>
        <div className={style.card}>
          <img className={style.img} src={logo1} alt="img1" />
          <h6>Improves Efficiency And Offers High Scalability</h6>
          <p>
            Since Business Apps Are Custom Built With The Companys Needs In Mind
            They Act As A Robust App That Performs Various Tasks Eliminating The
            Need For Multiple Apps.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo2} alt="img1" />
          <h6>Improves Efficiency And Offers High Scalability</h6>
          <p>
            Since Business Apps Are Custom Built With The Companys Needs In Mind
            They Act As A Robust App That Performs Various Tasks Eliminating The
            Need For Multiple Apps.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo3} alt="img1" />
          <h6>Improves Efficiency And Offers High Scalability</h6>
          <p>
            Since Business Apps Are Custom Built With The Companys Needs In Mind
            They Act As A Robust App That Performs Various Tasks Eliminating The
            Need For Multiple Apps.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo4} alt="img1" />
          <h6>Improves Efficiency And Offers High Scalability</h6>
          <p>
            Since Business Apps Are Custom Built With The Companys Needs In Mind
            They Act As A Robust App That Performs Various Tasks Eliminating The
            Need For Multiple Apps.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo5} alt="img1" />
          <h6>Improves Efficiency And Offers High Scalability</h6>
          <p>
            Since Business Apps Are Custom Built With The Companys Needs In Mind
            They Act As A Robust App That Performs Various Tasks Eliminating The
            Need For Multiple Apps.
          </p>
        </div>
        <div className={style.card}>
          <img className={style.img} src={logo6} alt="img1" />
          <h6>Improves Efficiency And Offers High Scalability</h6>
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

export default NinthSection;
