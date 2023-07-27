import React, { useState } from 'react';
import style from './ContactUsForm.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Swal from 'sweetalert2';
import axios from 'axios';

function ContactUsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setMobileNumber] = useState('');
  const [interestedService, setInterestedService] = useState('');
  const [amount, setProjectBudget] = useState('');
  const [projectType, setProjectType] = useState('');
  const [description, setProjectDescription] = useState('');
  const [requestServices, setRequestService] = useState('true');
  const [projectFile, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  console.log(projectFile, 'dsadsd');

  const showAlert = () => {
    Swal.fire({
      title: 'Verified!',
      text: 'You are verified successfully!',
      icon: 'success',
    });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = 'https://easyryt.onrender.com/client/clientProject'; // Replace with your backend API endpoint URL
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('requestServices', requestServices);
      formData.append('description', description);
      formData.append('amount', amount);
      formData.append('projectFile', projectFile);

      const response = await axios.post(url, formData);
      console.log(response.data);
      setMessage(response.data.message);
      showAlert();
    } catch (error) {
      console.error('Error submitting project data:', error);
      setError(error.response?.data?.message || 'Internal Server Error');
      // You can also use the 'Swal' library to display an error message
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.message || 'Internal Server Error',
        icon: 'error',
      });
    }
  };

  return (
    <div className={style.main}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h6>How may we assist you today?</h6>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email Id:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <PhoneInput
            value={phone}
            country="in"
            onChange={(value) => setMobileNumber(value)}
            inputStyle={{ border: 'none', width: '100%' }}
            buttonStyle={{ border: 'none' }}
            placeholder="Enter phone number"
          />
        </div>
        <div>
          <label htmlFor="interestedService">Interested Service:</label>
          <select
            id="interestedService"
            name="interestedService"
            value={interestedService}
            onChange={(e) => setInterestedService(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="projectBudget">Project Budget:</label>
          <select
            id="projectBudget"
            name="projectBudget"
            value={amount}
            onChange={(e) => setProjectBudget(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="budget1">Budget 1</option>
            <option value="budget2">Budget 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="projectType">Project Type:</label>
          <select id="projectType" name="projectType" value={projectType} onChange={(e) => setProjectType(e.target.value)}>
            <option value="">Select an option</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="projectDescription">Tell us more about your project:</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={description}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input className={style.upload} type="file" id="file" name="file" onChange={handleFileChange} />
        </div>
        <div>
          <div className={style.btnbox}>
            {/* <button type="button" onClick={handleScheduleMeeting}>
              Schedule Meeting
            </button> */}
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
