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
          *1. What do native mobile application development services entail?*
        </Accordion.Header>
        <Accordion.Body>
          Native mobile application development services involve the creation of
          mobile applications that are specifically designed and constructed for
          a particular platform, such as iOS or Android. These applications are
          developed using programming languages and tools that are native to the
          chosen platform. This results in optimal performance, enhanced user
          experience, and access to platform-specific features.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header>
          *2. Why should I opt for native application development instead of
          other approaches?*
        </Accordion.Header>
        <Accordion.Body>
          Native applications offer superior performance, responsiveness, and
          accessibility to native functionalities of the device (such as camera,
          GPS, sensors, etc.). They provide a seamless user experience that
          aligns with the design principles of the chosen platform. Native
          applications can also be easily integrated into popular app stores
          like Apple App Store and Google Play Store, ensuring widespread
          availability for users.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="10">
        <Accordion.Header>
          *3. Which platforms can you develop native applications for?*
        </Accordion.Header>
        <Accordion.Body>
          Our expertise lies in native application development for both iOS
          (using Swift or Objective-C) and Android (using Java or Kotlin)
          platforms. This ensures that your application will deliver an optimal
          experience to users on both major mobile operating systems.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="12">
        <Accordion.Header>
          *4. How long does it typically take to develop a native mobile
          application?*
        </Accordion.Header>
        <Accordion.Body>
          The development timeline can vary depending on factors such as the
          complexity of the application, desired features, and other
          project-specific requirements. While a simple application may be
          completed within a few weeks, more complex applications can take
          several months. We collaborate closely with our clients to provide
          accurate timelines based on their individual project needs.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="13">
        <Accordion.Header>
          *5. How do you proceed with the app development process?*
        </Accordion.Header>
        <Accordion.Body>
          Our approach to app development involves several stages: gathering
          requirements, designing, developing, testing, deploying, and providing
          ongoing maintenance. We begin by understanding the goals and target
          audience of your app, then progress through the design and development
          phases with regular testing and feedback loops from clients to ensure
          that the app meets your expectations.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="15">
        <Accordion.Header>
          *6. Can you help with both app design and development?*
        </Accordion.Header>
        <Accordion.Body>
          Absolutely, we offer comprehensive services that encompass both app
          design and development. Our team of talented designers and developers
          work together to create visually appealing and user-friendly
          interfaces that align with the purpose of your app.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="17">
        <Accordion.Header>
          *7. What measures do you take to ensure the security of my app and
          user data?*
        </Accordion.Header>
        <Accordion.Body>
          Security is of utmost importance to us. We adhere to best practices
          for secure coding, data encryption, and authentication in order to
          protect your app and user data. Regular security audits and updates
          are performed to address any potential vulnerabilities.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="18">
        <Accordion.Header>
          *8. Will my app be compatible with future updates to the platform?*
        </Accordion.Header>
        <Accordion.Body>
          We prioritize scalability when designing and developing apps. While
          minor updates usually do not affect compatibility, major platform
          updates may require adjustments to ensure that your app functions
          optimally. We offer ongoing maintenance services to ensure that your
          app remains up-to-date with the latest platform changes.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
