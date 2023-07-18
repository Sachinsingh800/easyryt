import React, { useState, useEffect } from 'react';
import style from './EightSection.module.css';

const EightSection = () => {
  const features = [
    'Usability First',
    'Push Notification',
    'FeedBack System',
    'Social Integration',
    'Customization',
    'Augmented Reality',
    'Google Indoor-Maps',
    'Payment Gateway Integration',
    'Advance Analytics',
    'One-Click Contacting',
    'QR/Barcode Scanner Integration',
    'Security',
  ];

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex(getRandomIndex(features.length));
    }, 2000); // 2-second delay

    return () => clearInterval(interval);
  }, []);

  const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length);
  };

  return (
    <div className={style.main}>
      <h1>Features Of Front End Development</h1>
      <p className={style.para}>
        The Following Are Essential Mobile App Development Featurees To Considen
        When Developing a Successful Application For Your Company
      </p>
      <div className={style.innerbox}>
        {features.map((feature, index) => (
          <p key={index} className={index === currentFeatureIndex ? style.active : ''}>
            ☑&#8193;{feature}
          </p>
        ))}
      </div>
    </div>
  );
};

export default EightSection;

