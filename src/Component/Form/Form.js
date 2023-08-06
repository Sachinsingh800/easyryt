import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';
import formImg from '../../Image/form.png';
import Swal from 'sweetalert2';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';

const Form = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [name, setFullName] = useState('');
  const [phone, setMobileNumber] = useState('');
  const [requestServices, setRequestServices] = useState('');
  const [email, setEmail] = useState('');
  const [requestServicesData, setRequestServicesData] = useState([]);
//comment added
  useEffect(() => {

    const handlegetData = async () => {
      const token =JSON.parse(localStorage.getItem("token")); 
      const headers={
         "x-auth-token": token
       }
      try {
        const response = await axios.get('https://easyryt.onrender.com/admin/allServices',{headers});
        console.log(response.data.data, 'aa raha');
        setRequestServicesData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    handlegetData();
  }, []);

  const showAlert = () => {
    Swal.fire({
      title: 'Verified!',
      text: 'You are verified successfully!',
      icon: 'success',
    });
  };

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
      console.log(response, 'contact info');
      setMessage(response.data.message);
      showAlert();
      setFullName('');
      setMobileNumber('');
      setRequestServices('');
      setEmail('');
      localStorage.setItem("popupSubmitted", "true");
      window.location.href="/";
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
    <div className={styles.container}>
      <img className={styles.title} src={formImg} alt="img" />
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" value={name} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="requestServices">Mobile No</label>
          <PhoneInput
            value={phone}
            country="in"
            onChange={(value) => setMobileNumber(value)}
            className={styles.phonebox}
            inputStyle={{ border: 'none', width: '100%' }}
            buttonStyle={{ border: 'none' }}
            placeholder="Enter phone number"
          />
        </div>
        <div className={styles.inputContainer}>
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
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
