import React,{useState,useEffect} from 'react'
import style from "./FirstSection.module.css"
import Form from '../../Component/Form/Form'
import img from "../../Image/bg2.png"

function FirstSection() {

  const sentence = "Smart Digital Solutions for Growing SMEs & MSMEs";
  const [currentWord, setCurrentWord] = useState('');
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const nextIndex = currentIndex + 1;
        return sentence.slice(0, nextIndex);
      });
      currentIndex++;
      if (currentIndex === sentence.length) clearInterval(interval);
    }, 100); // Adjust the interval (in milliseconds) to control the speed of typing
    return () => clearInterval(interval);
  }, []);


  const sentence1 = 'Trusted by over 1,000 ambitious brands';
  const [currentWord1, setCurrentWord1] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    // Delay of 4 seconds before starting the typing effect
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentWord1((prevWord) => {
          const nextIndex = currentIndex + 1;
          return sentence1.slice(0, nextIndex);
        });
        currentIndex++;
        if (currentIndex === sentence1.length) clearInterval(interval);
      }, 100); // Adjust the interval (in milliseconds) to control the speed of typing
    }, 5000); // Delay of 4000 milliseconds (4 seconds)

    return () => {
      clearTimeout(initialDelay);
    };
  }, []);

  
  return (
    <div className={style.main}>
      <div className={style.leftBox}>
        <span>{currentWord}</span>
        <p>{currentWord1}</p>
        <img className={style.img} src={img} alt='handimg' />

      </div>
      <div className={style.rightBox}>
     <div className={style.form}><Form/></div>  
      </div>
    </div>
  )
}

export default FirstSection
