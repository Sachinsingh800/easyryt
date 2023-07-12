import React, { useState ,useEffect} from 'react';
import styles from './Accordion.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Accordion1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <button className={styles['accordion-button']} onClick={toggleAccordion}>
       <span>How it works</span>
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
       <span>How it works</span>
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










