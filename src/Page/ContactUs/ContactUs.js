import React, { useState } from "react";
import style from "./ContactUs.module.css";
import NavBar from "../../Component/NavBar/NavBar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    interestedService: "",
    projectBudget: "",
    projectType: "",
    projectDescription: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation and submit data to backend if needed
    console.log(formData);
  };

  const handleScheduleMeeting = () => {
    // Implement the logic for scheduling a meeting
    console.log("Schedule Meeting clicked");
  };

  return (
    <div className={style.main}>
      <NavBar />
      <h1>Discover the Future of Technology Together!</h1>
      <p>
        Every day, Easyryt professionals empower businesses worldwide to
        fast-track their digital evolution and create a more resilient,
        sustainable, and equitable future Together.
      </p>
      <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h6>How may we assist you today?</h6>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="interestedService">Interested Service:</label>
          <select
            id="interestedService"
            name="interestedService"
            value={formData.interestedService}
            onChange={handleInputChange}
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
            value={formData.projectBudget}
            onChange={handleInputChange}
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
            value={formData.projectType}
            onChange={handleInputChange}
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
            value={formData.projectDescription}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input type="file" id="file" name="file" />
        </div>
        <div>
          <button type="button" onClick={handleScheduleMeeting}>
            Schedule Meeting
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
   
    </div>
  );
};

export default ContactUs;
