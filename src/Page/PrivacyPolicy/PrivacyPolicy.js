import React from 'react';
import style from './PrivacyPolicy.module.css';
import NavBar from '../../Component/NavBar/NavBar';
import Footer from '../../Component/Footer/Footer';

function PrivacyPolicy() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <h1>Privacy Policy</h1>

        <h6 className={style.Last_Updated}>Last Updated: 07-09-2023</h6>

        <p>
          EasyRyt is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or engage with our services, which include website development, app development, digital marketing, and related services. By using our website or services, you consent to the practices described in this Privacy Policy.
        </p>

        <h5>Information We Collect</h5>

        <p>We may collect personal information from you when you interact with our website or engage with our services. The types of information we may collect include:</p>
        <ul>
          <li>Contact Information: Name, email address, phone number, and mailing address.</li>
          <li>Account Information: Usernames, passwords, and other credentials for accessing our services.</li>
          <li>Payment Information: Credit card or other payment details for processing payments.</li>
          <li>Communications: Correspondence and information you provide when you contact us.</li>
          <li>Usage Information: Information about your use of our website and services, including IP addresses, device information, browser type, and browsing history.</li>
          <li>Cookies and Tracking Technologies: We use cookies and similar technologies to collect information about your preferences, browsing habits, and interactions with our website.</li>
        </ul>

        <h5>How We Use Your Information</h5>

        <p>
          We may use your personal information for various purposes, including:
        </p>
        <ul>
          <li>Providing and improving our services.</li>
          <li>Responding to your inquiries and requests.</li>
          <li>Processing payments for our services.</li>
          <li>Sending you promotional materials and updates about our services.</li>
          <li>Analysing website and service usage to improve user experiences.</li>
          <li>Complying with legal obligations.</li>
        </ul>

        <h5>Sharing Your Information</h5>

        <p>We may share your personal information with third parties under the following circumstances:</p>
        <ul>
          <li>Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our services and conducting business operations.</li>
          <li>Legal Compliance: We may disclose your information if required by law or in response to legal requests, such as subpoenas or court orders.</li>
          <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to a new entity.</li>
          <li>Consent: We may share your information with your consent.</li>
        </ul>

        <h5>Security</h5>

        <p>
          We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of data transmission over the internet is completely secure, and we cannot guarantee the absolute security of your information.
        </p>

        <h5>Your Choices</h5>

        <p>You have choices regarding how your personal information is collected and used. You can:</p>
        <ul>
          <li>Opt out of receiving promotional emails from us.</li>
          <li>Disable cookies through your browser settings.</li>
          <li>Review and update your personal information by contacting us.</li>
        </ul>

        <h5>Children's Privacy</h5>

        <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect or solicit personal information from minors. If you believe a minor has provided us with their personal information, please contact us.</p>

        <h5>Changes to this Privacy Policy</h5>

        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will post the revised policy on our website, and the revised policy will be effective immediately upon posting.</p>

        <h5>Contact Us</h5>

        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
        <p>
          EasyRyt
          T-471 Gali, Pahar Wali Gali,
          Quresh Nagar, Sarai Khalil,
          Sadar Bazaar, Delhi, 110006
          info@easyryt.com
          +91 9958280709
        </p>

        <p>By using our website or services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
      </div>
     <Footer/>
    </div>
  );
}

export default PrivacyPolicy;
