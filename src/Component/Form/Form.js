import React, { useState ,useEffect} from 'react';
import styles from './Form.module.css';
import formImg from '../../Image/form.png';
import Swal from 'sweetalert2';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



const Form = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!');
    console.log('Full Name:', fullName);
    console.log('Mobile Number:', mobileNumber); // Combine country code and mobile number
    console.log('Request Services:', requestServices);
    console.log('Email:', email);
    showAlert();
  };



 


  return (
    <div className={styles.container}>
      <img className={styles.title} src={formImg} alt="img" />
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
        <label htmlFor="requestServices">Mobile No</label>
        <PhoneInput
             value={mobileNumber}
             country={'in'}
             onChange={(e) => setMobileNumber(e)}
        className={styles.phonebox}
        inputStyle={{border:"none", width: "100%"}}
        buttonStyle={{border:"none"}}
      placeholder="Enter phone number"
     />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="requestServices">Request Services</label>
          <input
            type="text"
            id="requestServices"
            value={requestServices}
            onChange={(e) => setRequestServices(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
