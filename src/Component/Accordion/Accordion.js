import React, { useState ,useEffect} from 'react';
import styles from './Accordion.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Accordion1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <button className={styles['accordion-button']} onClick={toggleAccordion}>
       <span>Services</span>
       {isOpen ? <span>▲</span> : <span>▼</span>  }
       
      </button>
      {isOpen && (
        <div className={styles.content}>
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
          <p>Option 4</p>
        </div>
      )}
    </div>
  );
};

export const Accordion2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <button className={styles['accordion-button']} onClick={toggleAccordion}>
       <span>About</span>
       {isOpen ? <span>▲</span> : <span>▼</span>  }
       
      </button>
      {isOpen && (
        <div className={styles.content}>
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
          <p>Option 4</p>
        </div>
      )}
    </div>
  );
};

export const Accordion3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <button className={styles['accordion-button']} onClick={toggleAccordion}>
       <span>Contact Us</span>
       {isOpen ? <span>▲</span> : <span>▼</span>  }
       
      </button>
      {isOpen && (
        <div className={styles.content}>
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
          <p>Option 4</p>
        </div>
      )}
    </div>
  );
};

export const Accordion4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <button className={styles['accordion-button']} onClick={toggleAccordion}>
       <span>Blog</span>
       {isOpen ? <span>▲</span> : <span>▼</span>  }
       
      </button>
      {isOpen && (
        <div className={styles.content}>
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
          <p>Option 4</p>
        </div>
      )}
    </div>
  );
};





//service page accordian

export function Servicesaccordian() {
  return (
    <Accordion>

      <Accordion.Item eventKey="0">
        <Accordion.Header> Q. What are AWS cloud services?</Accordion.Header>
        <Accordion.Body>
        AWS (Amazon Web Services) is a comprehensive and widely-used cloud
              computing platform provided by Amazon. It offers a vast array of
              cloud services and solutions that cater to a wide range of
              business needs.
           
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>  Q. Are AWS and cloud computing the same?</Accordion.Header>
        <Accordion.Body>
        No, AWS (Amazon Web Services) and cloud computing are not the
              same, but there is a close relationship between them.
              <br />
              <br />
              Cloud computing is a broad and general term that refers to the
              delivery of computing services over the internet. It involves the
              provision of on-demand computing resources, such as computing
              power, storage, databases, networking, software, and more, without
              the need for direct management and maintenance by the user. Cloud
              computing enables users to access and use these resources on a
              pay-as-you-go basis, scaling up or down as needed, which can be
              more cost-effective and flexible compared to traditional
              on-premises infrastructure.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>  Q. What type of cloud service is AWS?</Accordion.Header>
        <Accordion.Body>
        AWS (Amazon Web Services) is a cloud service provider, offering a
              comprehensive set of cloud computing services. It falls under the
              category of "Infrastructure as a Service" (IaaS), "Platform as a
              Service" (PaaS), and "Software as a Service" (SaaS) offerings,
              making it a versatile cloud platform.
         
        </Accordion.Body>
      </Accordion.Item>

  

      <Accordion.Item eventKey="3">
        <Accordion.Header>  Q. What are the services of AWS?</Accordion.Header>
        <Accordion.Body>
        The services provided by AWS can be categorized into several key
              areas:
              <br/>
              <ul>
                <li>Compute Services</li>
                <li>Storage Services</li>
                <li>Database Services</li>
                <li>Networking Services</li>
                <li>Security, Identity, and Compliance</li>
                <li>Machine Learning and AI Services</li>
                <li>Analytics and Big Data</li>
                <li>Internet of Things (IoT) Services</li>
                <li>Management Tools</li>
                <li>Application Integration</li>
              </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header> Q. Utilization of Amazon's Web Services?</Accordion.Header>
        <Accordion.Body>
        Amazon Web Services (AWS) is utilized by a diverse range of
              businesses, organizations, and individuals worldwide. Its cloud
              computing services offer a wide array of benefits that cater to
              various use cases
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}






