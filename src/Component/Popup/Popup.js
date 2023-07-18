import React, { useState, useEffect } from 'react';
import style from "./Popup.module.css";
import img from "../../Image/popup.gif"
import Swal from 'sweetalert2';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
 
    const isPopupSubmitted = localStorage.getItem('popupSubmitted');
    if (isPopupSubmitted) {
      setShowPopup(false);
    } else {
      const popupTimer = setInterval(() => {
        setShowPopup(true); // Show popup every 15 seconds
      }, 95000);

      return () => {
        clearInterval(popupTimer);
      };
    }
  }, []); // Empty dependency array to run the effect only once

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('popupSubmitted', 'true');
    setShowPopup(false);
    showAlert()
    window.location.href = '/';
  };

  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [requestServices, setRequestServices] = useState('');
  const [email, setEmail] = useState('');


  const showAlert = () => {
    Swal.fire({
      title: 'Verified!',
      text: 'you are verified successfully !',
      icon: 'success',
    });
  };



  return (
    showPopup && (
      <div className={style.popup_overlay}>
        <div  className={style.popup_content1}>
            <img className={style.imgs} src={img} alt='img' />
        </div>
        <div className={style.popup_content}>
          <h2>Contact With Our Experts</h2>
          <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="requestServices">Request Services</label>
          <input
            type="text"
            id="requestServices"
            value={requestServices}
            onChange={(e) => setRequestServices(e.target.value)}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className={style.submitBtn}>Submit</button>
      </form>
          <button className={style.close_btn} onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default Popup;
