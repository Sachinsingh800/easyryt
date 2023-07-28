import React, { useState } from 'react';
import style from "./BlogForm.module.css"

const BlogForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    helpWith: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, for example, sending the data to a server or processing it in some way.
    console.log(formData);
  };

  return (
    <div className={style.main}>
    <form className={style.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="helpWith">I need help with:</label>
        <select
          id="helpWith"
          name="helpWith"
          value={formData.helpWith}
          onChange={handleInputChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Billing Inquiry">Billing Inquiry</option>
          <option value="Product Information">Product Information</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className={style.label}  htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="5"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default BlogForm;
