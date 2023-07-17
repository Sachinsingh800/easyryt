import React, { useState } from "react";
import style from "./SixthSection.module.css";
import { data } from "../../Const/Const";


function SixthSection() {

  const [newData,setNewData] = useState(data.programmingLang)

  const [filteredData, setFilteredData] = useState(newData);
  const [selectedButton, setSelectedButton] = useState('programmingLang');



  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);

    if (buttonName === '') {
      setFilteredData([]);
    } else {
      setFilteredData(data[buttonName]);
    }
  };


  

  return (
    <div className={style.main}>
      <h1>TECH STACK</h1>
      <p>
        We offer full-cycle technology solutions that streamline your digital
        transformation journey. With cutting-edge technical expertise, complex
        business challenges with INT. simplifies innovative solutions for 100+
        fastest-growing enterprises.
      </p>
      <div className={style.btnsbox}>
<button   className={selectedButton === "programmingLang" ? style.active : style.btn} onClick={() => handleButtonClick('programmingLang')}>PROGRAMMING LANGUAGE</button>
<button  className={selectedButton === "Frontend" ? style.active : style.btn} onClick={() => handleButtonClick('Frontend')}>FRONTEND</button>
<button  className={selectedButton === "backend" ? style.active : style.btn} onClick={() => handleButtonClick('backend')}>BACKEND</button>
<button  className={selectedButton === "database" ? style.active : style.btn} onClick={() => handleButtonClick('database')}>DATABASE</button>
<button  className={selectedButton === "platforms" ? style.active : style.btn} onClick={() => handleButtonClick('platforms')}>PLATFORMS</button>
<button  className={selectedButton === "mobileapp" ? style.active : style.btn} onClick={() => handleButtonClick('mobileapp')}>MOBILE APP</button>
      </div>
      <div className={style.container}>
{filteredData.map((item, index) => (
  <div className={style.innerbox} key={index}>
       <img className={style.img} src={item.icon} alt="img" />
  <h6 key={index}>{item.name}</h6>
  </div>
))}

      </div>
    </div>
  );
}

export default SixthSection;


