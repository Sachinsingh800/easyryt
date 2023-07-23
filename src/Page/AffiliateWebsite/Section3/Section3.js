import React, { useState, useEffect } from 'react';
import style from './Section3.module.css';

const Section3 = () => {
  const features = [
    'Seamless Performance',
    'Native User Interface',
    'Offline Functionality',
    'Enhanced Security',
    'Access to Device Features',
    'Better User Engagement',
    'App Store Optimization',
    'Faster Development',
    'Long-Term Support',
    'High-Quality Graphics',
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
      <h1>Features Of Native App Development Services</h1>
      <p className={style.para}>
        The Following Are Essential  Native App Development Services Featurees To Considen
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

export default Section3;

