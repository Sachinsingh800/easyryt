import React, { useState, useEffect } from 'react';
import style from "./Popup.module.css";
import img from "../../Image/popup.gif"
import Swal from 'sweetalert2';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [name, setFullName] = useState('');
  const [phone, setMobileNumber] = useState('');
  const [requestServices, setRequestServices] = useState('');
  const [email, setEmail] = useState('');
  const [requestServicesData, setRequestServicesData] = useState([]);

  useEffect(() => {
    const isPopupSubmitted = localStorage.getItem('popupSubmitted');
    console.log(isPopupSubmitted, "status")
    if (isPopupSubmitted === "true") {
      setShowPopup(false);
    } else {
      const popupTimer = setInterval(() => {
        setShowPopup(true); // Show popup every 15 seconds
      }, 95000);

      return () => {
        clearInterval(popupTimer);
      };
    }
  }); // Empty dependency array to run the effect only once

  const handleClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handlegetData = async () => {
      try {
        const response = await axios.get('https://easyryt.onrender.com/admin/allServices');
        setRequestServicesData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    handlegetData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      phone,
      requestServices,
    };
    try {
      const response = await axios.post('https://easyryt.onrender.com/client/clientInfo', formData);
      setMessage(response.data.message);
      Swal.fire({
        title: 'Verified!',
        text: 'You are verified successfully!',
        icon: 'success',
      });
      setFullName('');
      setMobileNumber('');
      setRequestServices('');
      setEmail('');
      localStorage.setItem("popupSubmitted", "true");
      handleClose();
    } catch (error) {
      setError(error.response?.data?.message || 'Internal Server Error');
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
        <div className={style.popup_content1}>
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
              <label htmlFor="requestServices">Mobile No</label>
              <PhoneInput
                value={phone}
                country="in"
                onChange={(value) => setMobileNumber(value)}
                className={style.phonebox}
                inputStyle={{ border: 'none', width: '100%' }}
                buttonStyle={{ border: 'none' }}
                placeholder="Enter phone number"
              />
            </div>
            <div className={style.inputContainer}>
              <label htmlFor="requestServices">Request Services</label>
              <select
                id="requestServices"
                name="requestServices"
                value={requestServices}
                onChange={(e) => setRequestServices(e.target.value)}
                required
              >
                <option value="">Select an option</option>
                {requestServicesData.map((service) => (
                  <option key={service._id} value={service.requestServices}>
                    {service.requestServices}
                  </option>
                ))}
              </select>
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
