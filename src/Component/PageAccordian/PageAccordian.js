import React, { useState, useEffect } from "react";
import styles from "./PageAccordian.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";





export function NativeAppAccordian() {

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
