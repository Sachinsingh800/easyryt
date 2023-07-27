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
          <select>
            <option> Option 1</option>
            <option> Option 1</option>
            <option> Option 1</option>
            <option> Option 1</option>
            <option> Option 1</option>
            <option> Option 1</option>
        
            </select>
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
        <Accordion.Header> Mobile App Development</Accordion.Header>
        <Accordion.Body>
        Mobile app development is the process of creating software
                  applications specifically designed for use on mobile devices,
                  such as smartphones and tablets. It involves the creation,
                  design, development, testing, and deployment of applications
                  that run on various mobile operating systems, including iOS
                  and Android.
                  <a
                  href="https://en.wikipedia.org/wiki/Mobile_app_development"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6>Read More ᐳ</h6>
                </a>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>       Progressive Web App</Accordion.Header>
        <Accordion.Body>
        Progressive Web Apps (PWAs) are web-based applications that
                  offer a native app-like experience, combining the reach of the
                  web with the functionality of mobile apps.
                  <a
                  href="https://en.wikipedia.org/wiki/Progressive_Web_Apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6>Read More ᐳ</h6>
                </a>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>         Enterprise Application Development</Accordion.Header>
        <Accordion.Body>
        Enterprise Application Development refers to the process of
                  creating software applications specifically designed for large
                  organizations or businesses. These applications are developed
                  to meet the unique requirements and challenges of enterprise
                  environments, focusing on scalability, security, and
                  integration with existing systems.
                  <a
                  href="https://www.silvertouch.com/blog/enterprise-application-development-how-it-drives-growth-for-business/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6>Read More ᐳ</h6>
                </a>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>          Design UI/UX</Accordion.Header>
        <Accordion.Body>
        UI/UX design aims to create a positive user experience that
                  encourages customers to stick with a brand or product. While a
                  UX Designer decides how the user interface works, the UI
                  designer decides how the user interface looks.
                  <a
                  href="https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6>Read More ᐳ</h6>
                </a>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>            Digital Marketing</Accordion.Header>
        <Accordion.Body>
        Digital marketing encompasses various online strategies and
                  techniques to promote products, services, or brands using
                  digital channels. It includes activities such as search engine
                  optimization (SEO), social media marketing, content marketing,
                  email marketing, pay-per-click advertising, and more.
                  <a
                  href="https://en.wikipedia.org/wiki/Digital_marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6>Read More ᐳ</h6>
                </a>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>       Product Management</Accordion.Header>
        <Accordion.Body>
        Product management is the process of overseeing the
                  development, launch, and ongoing management of a product or
                  service throughout its lifecycle. It involves strategic
                  planning, market research, defining product vision, gathering
                  requirements, and collaborating with cross-functional teams to
                  ensure successful product development. Product managers
                  analyze market trends, competition, and customer needs to make
                  informed decisions regarding product features, pricing, and
                  positioning.
                  <a
                  href="https://en.wikipedia.org/wiki/Product_management"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6>Read More ᐳ</h6>
                </a>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>        Sap（system Application Product）</Accordion.Header>
        <Accordion.Body>
        SAP, which stands for System Application Product, is a leading
                  enterprise software company that offers a range of business
                  software solutions. SAP's software applications help
                  organizations manage various aspects of their operations,
                  including finance, human resources, supply chain, customer
                  relationship management, and more.
                  <a
                  href="https://www.engineersgarage.com/sap-systems-applications-products-in-data-processing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6>Read More ᐳ</h6>
                </a>
        </Accordion.Body>
      </Accordion.Item>


    </Accordion>
  );
}






export function ClientServicesaccordian() {
  return (
    <Accordion>

      <Accordion.Item eventKey="0">
        <Accordion.Header> Q. What are AWS cloud services?</Accordion.Header>
        <Accordion.Body  >
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
