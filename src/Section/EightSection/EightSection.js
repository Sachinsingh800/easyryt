import React from "react";
import style from "./EightSection.module.css";

function EightSection() {
  return (
    <div className={style.main}>
      <h1>Features Of Front End Development</h1>
      <p className={style.para}>
        The Following Are Essential Mobile App Development Featurees To Considen
        When Developing a Successful Application For Your Company
      </p>
      <div className={style.innerbox}>
        <p>☑&#8193;Usability First</p>
        <p>☑&#8193;Push Notification</p>
        <p>☑&#8193;FeedBack System</p>
        <p>☑&#8193;Social Integration</p>
        <p>☑&#8193;Customization</p>
        <p>☑&#8193;Augmented Reality</p>
        <p>☑&#8193;Google Indoor-Maps</p>
        <p>☑&#8193;Payment Gateway Integration</p>
        <p>☑&#8193;Advance Analytics</p>
        <p>☑&#8193;One-Click Contacting</p>
        <p>☑&#8193;QR/Barcode Scanner Integration</p>
        <p>☑&#8193;Security</p>
      </div>
    </div>
  );
}

export default EightSection;
