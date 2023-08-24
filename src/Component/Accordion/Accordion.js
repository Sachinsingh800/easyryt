import React, { useState} from "react";
import styles from "./Accordion.module.css";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

export const Accordion1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <button className={styles["accordion-button"]} onClick={toggleAccordion}>
        <span>Services</span>
        {isOpen ? <span>▲</span> : <span>▼</span>}
      </button>
      {isOpen && (
        <div className={styles.content}>
          <ul>
            <li className={styles.heading}>Mobile App Development</li>
            <Link to={"/Native-Mobile-App-Development"}>
              {" "}
              <li>Native Mobile App Development</li>
            </Link>
            <Link to={"/Cross-Platform-App-Development"}>
              {" "}
              <li>Cross-Platform App Development</li>
            </Link>
            <Link to={"/Android-Application-Development-Services"}>
              <li>Android Application Development Services</li>
            </Link>
            <Link to={"/IOS-Application-Development-Services"}>
              {" "}
              <li>IOS Application Development Services</li>
            </Link>
            <Link to={"/Hybrid-Application-Development-Services"}>
              {" "}
              <li>Hybrid Application Development Services</li>
            </Link>
            <Link to={"/Mobile-App-Development"}>
              {" "}
              <li>Mobile App Development</li>
            </Link>
            <Link to={"/App-Backend-Development"}>
              <li>App Backend Development</li>
            </Link>
            <Link to={"/Flutter-App-Development"}>
              {" "}
              <li>Flutter App Development</li>
            </Link>
            <Link to={"/React-Native-App-Development"}>
              {" "}
              <li>React Native App Development</li>
            </Link>
            <Link to={"/Mobile-App-Testingand-Testing-Quality-Assurance"}>
              {" "}
              <li>Mobile App Testing and Testing Quality Assurance</li>
            </Link>
          </ul>
          <ul>
            <li className={styles.heading}>Digital Marketing</li>
            <Link to={"/Search-Engine-Optimization"}>
              <li>Search Engine Optimization (SEO)</li>
            </Link>
            <Link to={"/Pay-Per-Click-Advertising"}>
              {" "}
              <li>Pay-Per-Click (PPC) Advertising</li>
            </Link>
            <Link to={"/Social-Media-Advertising"}>
              {" "}
              <li>Social Media Advertising</li>
            </Link>
            <Link to={"/Google-Advertising"}>
              <li>Google Advertising</li>
            </Link>
            <Link to={"/Facebook-&-Instagram-Advertising"}>
              {" "}
              <li>Facebook & Instagram Advertising</li>
            </Link>
            <Link to={"/Content-Marketing"}>
              <li>Content Marketing</li>
            </Link>
            <Link to={"/Social-Media-Marketing"}>
              {" "}
              <li>Social Media Marketing</li>
            </Link>
            <Link to={"/Email-Marketing"}>
              {" "}
              <li>Email Marketing</li>
            </Link>
            <Link to={"/Analytics-and-Reporting"}>
              {" "}
              <li>Analytics and Reporting</li>
            </Link>
            <Link to={"/Website-Traffic-Advertising"}>
              {" "}
              <li>Website Traffic Advertising</li>
            </Link>
            <Link to={"/E-Commerce-Advertising"}>
              {" "}
              <li>E-Commerce Advertising</li>
            </Link>
            <Link to={"/App-Install-Advertising"}>
              {" "}
              <li>App Install Advertising</li>
            </Link>
            <Link to={"/Android-App-Advertising"}>
              {" "}
              <li>Android App Advertising</li>
            </Link>
            <Link to={"/IOS-App-Advertising"}>
              {" "}
              <li>IOS App Advertising</li>
            </Link>
          </ul>
          <ul>
            <li className={styles.heading}>Website Development</li>
            <Link to={"/E-Commerce-Development"}>
              {" "}
              <li>E-Commerce Development</li>
            </Link>
            <Link to={"/FrontEnd-Development"}>
              {" "}
              <li>Front-End Development</li>
            </Link>
            <Link to={"/Backend-Development"}>
              {" "}
              <li>Backend Development</li>
            </Link>
            <Link to={"/FullStack-Development-Services"}>
              {" "}
              <li>Full Stack Development Services</li>
            </Link>
          </ul>
          <ul>
            <li className={styles.heading}>WordPress Development</li>
            <Link to={"/Blog-or-Personal-Website"}>
              <li>Blog or Personal Website</li>
            </Link>
            <Link to={"/Business-Website"}>
              <li>Business Website</li>
            </Link>
            <Link to={"/E-commerce-Website-Online-Store"}>
              <li>Ecommerce Website / Online Store</li>
            </Link>
            <Link to={"/Online-Courses"}>
              <li>Online Courses</li>
            </Link>
            <Link to={"/Podcast-Website"}>
              <li>Podcast Website</li>
            </Link>
            <Link to={"/Affiliate-Website"}>
              <li>Affiliate Website</li>
            </Link>
            <Link to={"/Job-Board-Website"}>
              <li>Job Board Website</li>
            </Link>
            <Link to={"/Portfolio-Websites"}>
              {" "}
              <li>Portfolio Websites</li>
            </Link>
            <Link to={"/Travel-Website"}>
              {" "}
              <li>Travel Website</li>
            </Link>
            <Link to={"/Fashion-Lifestyle-Website"}>
              <li>Fashion / Lifestyle Website</li>
            </Link>
          </ul>
          <ul>
            <li className={styles.heading}>UI/UX Design</li>
            <Link to={"/Mobile-App-UIUX-Design-Services"}>
              <li>Mobile App UI /UX Design Services</li>
            </Link>
            <Link to={"/Android-App-UIUX-Design-Services"}>
              {" "}
              <li>Android App UI/UX Design Services</li>
            </Link>
            <Link to={"/UIUX-Design-Services"}>
              {" "}
              <li>UI/UX Design Services</li>
            </Link>
            <Link to={"/ISO-UIUX-Design-Services"}>
              {" "}
              <li>ISO UI/UX Design Servicesg</li>
            </Link>
            <Link to={"/Website-UIUX-Design-Services"}>
              {" "}
              <li>Website UI/UX Design Services</li>
            </Link>
          </ul>
          <ul>
            <li className={styles.heading}>Front End Development</li>
            <Link to={"/ReactJs-Development"}>
              <li>React Js Development</li>
            </Link>
            <Link to={"/Nextjs-Development"}>
              {" "}
              <li>Next js Development</li>
            </Link>
            <Link to={"/Vuejs-Development"}>
              {" "}
              <li>Vue js Development</li>
            </Link>
            <Link to={"/Angular-Dvelopment"}>
              {" "}
              <li>Angular Dvelopment</li>
            </Link>
            <Link to={"/ReactNative-Development"}>
              <li>React Native Development</li>
            </Link>
          </ul>
          <ul>
            <li className={styles.heading}>Backend Development</li>
            <Link to={"/Nodejs"}>
              {" "}
              <li>Node js</li>
            </Link>
            <Link to={"/Laravel"}>
              {" "}
              <li>Laravel</li>
            </Link>
            <Link to={"/Python"}>
              <li>Python</li>
            </Link>
            <Link to={"/API-Development"}>
              <li>API Development</li>
            </Link>
            <Link to={"/Database-Design-and-Management"}>
              {" "}
              <li>Database Design and Management</li>
            </Link>
            <Link to={"/Server-Architecture-and-Configuration"}>
              {" "}
              <li>Server Architecture and Configuration</li>
            </Link>
            <Link to={"/Cloud-Services-Integration-SAP-Industry-Solutions"}>
              <li>Cloud Services Integration,SAP Industry Solutions</li>
            </Link>
            <Link to={"/Backend-Framework-Development"}>
              {" "}
              <li>Backend Framework Development</li>
            </Link>
            <Link to={"/Web-Application-Development"}>
              <li>Web Application Development</li>
            </Link>
            <Link to={"/Mobile-Backend-Development"}>
              <li>Mobile Backend Development</li>
            </Link>
            <Link to={"/Real-Time-Data-Processing"}>
              <li>Real-Time Data Processing</li>
            </Link>
            <Link to={"/Performance-Optimization"}>
              <li>Performance Optimization</li>
            </Link>
            <Link to={"/Integration-with-Third-Party-Services"}>
              {" "}
              <li>Integration with Third-Party Services</li>
            </Link>
            <Link to={"/DevOps-and-Continuous-Integration"}>
              {" "}
              <li> (CI/CD)</li>
            </Link>
          </ul>
          <ul>
            <li className={styles.heading}> Cloud</li>
            <Link to={"/Azure"}>
              {" "}
              <li>Azure</li>
            </Link>
            <Link to={"/Aws"}>
              {" "}
              <li>Aws</li>
            </Link>
            <Link to={"/Google-Cloud"}>
              {" "}
              <li>Google Cloud</li>
            </Link>
          </ul>
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
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <button className={styles["accordion-button"]} onClick={toggleAccordion}>
        <Link className={styles.a} to={"/About-Us"}>
          <span>About</span>
        </Link>
        {/* {isOpen ? <span>▲</span> : <span>▼</span>  } */}
      </button>
      {/* {isOpen && (
        <div className={styles.content}>
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
          <p>Option 4</p>
        </div>
      )} */}
    </div>
  );
};

export const Accordion3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <button className={styles["accordion-button"]} onClick={toggleAccordion}>
        <Link className={styles.a} to={"/Contact-Us"}>
          <span>Contact Us</span>
        </Link>
        {/* {isOpen ? <span>▲</span> : <span>▼</span>  } */}
      </button>
      {/* {isOpen && (
        <div className={styles.content}>
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
          <p>Option 4</p>
        </div>
      )} */}
    </div>
  );
};

export const Accordion4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <button className={styles["accordion-button"]} onClick={toggleAccordion}>
        <Link className={styles.a} to={"/Blogs"}>
          <span>Blog</span>
        </Link>
        {/* {isOpen ? <span>▲</span> : <span>▼</span>  } */}
      </button>
      {/* {isOpen && (
        <div className={styles.content}>
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
          <p>Option 4</p>
        </div>
      )} */}
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
          applications specifically designed for use on mobile devices, such as
          smartphones and tablets. It involves the creation, design,
          development, testing, and deployment of applications that run on
          various mobile operating systems, including iOS and Android.
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
        <Accordion.Header> Progressive Web App</Accordion.Header>
        <Accordion.Body>
          Progressive Web Apps (PWAs) are web-based applications that offer a
          native app-like experience, combining the reach of the web with the
          functionality of mobile apps.
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
        <Accordion.Header> Enterprise Application Development</Accordion.Header>
        <Accordion.Body>
          Enterprise Application Development refers to the process of creating
          software applications specifically designed for large organizations or
          businesses. These applications are developed to meet the unique
          requirements and challenges of enterprise environments, focusing on
          scalability, security, and integration with existing systems.
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
        <Accordion.Header> Design UI/UX</Accordion.Header>
        <Accordion.Body>
          UI/UX design aims to create a positive user experience that encourages
          customers to stick with a brand or product. While a UX Designer
          decides how the user interface works, the UI designer decides how the
          user interface looks.
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
        <Accordion.Header> Digital Marketing</Accordion.Header>
        <Accordion.Body>
          Digital marketing encompasses various online strategies and techniques
          to promote products, services, or brands using digital channels. It
          includes activities such as search engine optimization (SEO), social
          media marketing, content marketing, email marketing, pay-per-click
          advertising, and more.
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
        <Accordion.Header> Product Management</Accordion.Header>
        <Accordion.Body>
          Product management is the process of overseeing the development,
          launch, and ongoing management of a product or service throughout its
          lifecycle. It involves strategic planning, market research, defining
          product vision, gathering requirements, and collaborating with
          cross-functional teams to ensure successful product development.
          Product managers analyze market trends, competition, and customer
          needs to make informed decisions regarding product features, pricing,
          and positioning.
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
        <Accordion.Header> Sap（system Application Product）</Accordion.Header>
        <Accordion.Body>
          SAP, which stands for System Application Product, is a leading
          enterprise software company that offers a range of business software
          solutions. SAP's software applications help organizations manage
          various aspects of their operations, including finance, human
          resources, supply chain, customer relationship management, and more.
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
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          {" "}
          Q. *What services does your IT company offer?*
        </Accordion.Header>
        <Accordion.Body>
          We offer a wide range of services, including app development, website
          development, digital marketing, WordPress development, cloud
          solutions, and UI/UX design.
        </Accordion.Body>
      </Accordion.Item>



      <Accordion.Item eventKey="8">
        <Accordion.Header>
          Q. *How do you ensure the security of the apps and websites you develop?*

        </Accordion.Header>
        <Accordion.Body>
        We prioritize security at every step of the development process, implementing industry best practices and using the latest security measures to safeguard your app or website from potential threats.

        </Accordion.Body>
      </Accordion.Item>

  

      <Accordion.Item eventKey="10">
        <Accordion.Header>
          Q. *How long does it typically take to develop a custom app or website?*

        </Accordion.Header>
        <Accordion.Body>
        The development timeline varies depending on the project's complexity and requirements. We'll provide you with a detailed estimate after understanding your project's scope.

        </Accordion.Body>
      </Accordion.Item>

   

      <Accordion.Item eventKey="12">
        <Accordion.Header>
          Q. *What are the benefits of using cloud services for my business?*

        </Accordion.Header>
        <Accordion.Body>
        Cloud services offer advantages such as cost savings, scalability, accessibility, and improved collaboration among team members.

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="13">
        <Accordion.Header>
          Q. *Do you provide content creation services for websites and apps?*

        </Accordion.Header>
        <Accordion.Body>
        Yes, we offer content creation services, including copywriting, graphic design, and multimedia content production, to enhance the overall user experience of your digital products.

        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="15">
        <Accordion.Header>
          Q. *What makes your WordPress development services stand out?*
        </Accordion.Header>
        <Accordion.Body>
          Our WordPress development services are distinguished by our team's
          expertise in creating highly functional, visually appealing, and
          user-friendly websites using the WordPress platform.
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="17">
        <Accordion.Header>
          Q. *What makes your WordPress development services stand out?*
        </Accordion.Header>
        <Accordion.Body>
          Our WordPress development services are distinguished by our team's
          expertise in creating highly functional, visually appealing, and
          user-friendly websites using the WordPress platform.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="18">
        <Accordion.Header>
          Q. *What makes your WordPress development services stand out?*
        </Accordion.Header>
        <Accordion.Body>
          Our WordPress development services are distinguished by our team's
          expertise in creating highly functional, visually appealing, and
          user-friendly websites using the WordPress platform.
        </Accordion.Body>
      </Accordion.Item>





    </Accordion>
  );
}
