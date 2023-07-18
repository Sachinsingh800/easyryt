import React, { useState, useEffect } from 'react';
import style from './SeventhSection.module.css';

const SeventhSection = () => {
  const industries = [
    'Insurance',
    'Healthcare',
    'Education',
    'Travel & Hospitality',
    'Retail & E-commerce',
    'Banking & Financial Services',
    'Manufacturing',
    'Chemicals',
    'Energy & Utilities',
    'Non Profits',
    'Distribution',
    'Oil & Gas',
    'Independent Software Vendors',
  ];

  const [currentIndustryIndex, setCurrentIndustryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustryIndex(getRandomIndex(industries.length));
    }, 2000); // 2-second delay

    return () => clearInterval(interval);
  }, []);

  const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length);
  };

  return (
    <div className={style.main}>
      <h1>Industries we serve</h1>
      <p className={style.para}>
        We revolutionalize Industries with the power of tech, to seamlessly weave a tapestry of innovation, efficiency,
        and growth.
      </p>
      <div className={style.innerbox}>
        {industries.map((industry, index) => (
          <p key={index} className={index === currentIndustryIndex ? style.active : ''}>
            {industry}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SeventhSection;
