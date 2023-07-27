import React, { useState, useEffect } from 'react';
import style from "./Popup.module.css";
import img from "../../Image/popup.gif"
import Swal from 'sweetalert2';
import axios from 'axios';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setFullName] = useState('');
  const [phone, setMobileNumber] = useState('');
  const [requestServices, setRequestServices] = useState('');
  const [email, setEmail] = useState('');

  const [message,setMessage] = useState("")
const [error,setError] = useState("")

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


  const showAlert = () => {
    Swal.fire({
      title: 'Verified!',
      text: 'you are verified successfully !',
      icon: 'success',
    });
  };



  const handleSubmit= async (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      phone,
      requestServices,
    };
    try {
      const response = await axios.post('https://easyryt.onrender.com/client/clientInfo', formData);
     console.log(response,"contact info")
      setMessage(response.data.message);
      showAlert()
      
    } catch (error) {
      setError(error.response.data.message);
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.message || 'Internal Server Error',
        icon: 'error',
      });
    }
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
            value={name}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            value={phone}
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
