import React, { useState ,useEffect} from 'react';
import style from './ContactUsForm.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Swal from 'sweetalert2';
import axios from 'axios';

function ContactUsForm() {
  const [requestServicesData, setRequestServicesData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requestServices: '',
    description: '',
    amount: '',
    projectFile: null,
  });

console.log(formData,"kya aa raha")




  const handleFileChange = (e) => {
    setFormData({ ...formData, projectFile: e.target.files[0] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'phone' ? value : value.trim(), // Handle phone separately to avoid whitespace
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create FormData object to send the data as multipart form data
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('requestServices', formData.requestServices);
      data.append('description', formData.description);
      data.append('amount', formData.amount);
      data.append('projectFile', formData.projectFile);
      

      // Make a POST request to the API endpoint (replace 'YOUR_API_ENDPOINT' with the actual URL)
      const response = await axios.post('https://easyryt.onrender.com/client/clientProject', data);

      // Handle the response (you can display a success message or redirect to another page)

      Swal.fire({
        title: 'Form!',
        text: 'Submitted successfully!',
        icon: 'success',
      });
      setFormData(
        formData.name=""
      )
      window.location.href="/";
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.message || 'Internal Server Error',
        icon: 'error',
      });
      // Handle error (display an error message to the user)
    }
  };
  useEffect(() => {

    const handlegetData = async () => {
      
      try {
        const response = await axios.get('https://easyryt.onrender.com/client/allServices');
        console.log(response.data.data, 'aa raha');
        setRequestServicesData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    handlegetData();
  }, []);

  return (
    <div className={style.main}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <PhoneInput
            value={formData.phone}
            country="in"
            onChange={(value) => handleChange({ target: { name: 'phone', value } })}
            inputStyle={{ border: 'none', width: '100%' }}
            buttonStyle={{ border: 'none' }}
            placeholder="Enter phone number"
          />
        </div>
        {/* ... (previous imports and component code) ... */}

<div>
  <label>Request Services:</label>
  <select
    id="requestServices"
    name="requestServices"
    value={formData.requestServices}
    onChange={handleChange}
    required
  >
    <option value="">Select an option</option>
    {requestServicesData.map((service) => (
      <option key={service._id} value={service.requestServices}> {/* Use service._id as the value */}
        {service.requestServices}
      </option>
    ))}
  </select>
</div>

{/* ... (rest of the component code) ... */}

        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        </div>
        <div>
          <label>Project File:</label>
          <input className={style.imginput} type="file" name="projectFile" onChange={handleFileChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUsForm;










