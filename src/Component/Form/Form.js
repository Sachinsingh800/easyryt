import React, { useState } from 'react';
import styles from './Form.module.css';
import formImg from "../../Image/form.png"

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [requestServices, setRequestServices] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!');
    console.log('Full Name:', fullName);
    console.log('Mobile Number:', mobileNumber);
    console.log('Request Services:', requestServices);
    console.log('Email:', email);
  };

  return (
    <div className={styles.container}>
      <img className={styles.title} src={formImg} alt='img' />
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
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
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
        <button type="submit" className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
