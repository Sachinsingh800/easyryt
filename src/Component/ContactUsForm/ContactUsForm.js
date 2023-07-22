import React, { useState } from 'react';
import style from './ContactUsForm.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Swal from 'sweetalert2';

function ContactUsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [interestedService, setInterestedService] = useState('');
  const [projectBudget, setProjectBudget] = useState('');
  const [projectType, setProjectType] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [file, setFile] = useState(null);
  const showAlert = () => {
    Swal.fire({
      title: 'Verified!',
      text: 'you are verified successfully !',
      icon: 'success',
    });
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      mobileNumber,
      interestedService,
      projectBudget,
      projectType,
      projectDescription,
      file,
    };
    // Perform form validation and submit data to backend if needed
    console.log(formData);
    showAlert()
  };

  const handleScheduleMeeting = () => {
    // Implement the logic for scheduling a meeting
    console.log('Schedule Meeting clicked');
  };

  return (
    <div className={style.main}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h6>How may we assist you today?</h6>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <PhoneInput
             value={mobileNumber}
             country={'in'}
             onChange={(e) => setMobileNumber(e)}
        className={style.phonebox}
        inputStyle={{border:"none", width: "100%"}}
        buttonStyle={{border:"none"}}
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
            value={projectBudget}
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
          <select
            id="projectType"
            name="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="projectDescription">
            Tell us more about your project:
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input className={style.upload}  type="file" id="file" name="file" onChange={handleFileChange} />
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
