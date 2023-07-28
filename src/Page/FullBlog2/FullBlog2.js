import React,{useState,useEffect} from 'react'
import style from "./FullBlog2.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import CallButton from '../../Component/CallButton/CallButton';

function FullBlog2() {
    const blog=JSON.parse(localStorage.getItem("blog2"))
    const [active, setActive] = useState(false);

    useEffect(() => {
      // Function to toggle the active state every 5 seconds
      const toggleActive = () => {
        setActive((prevActive) => !prevActive);
      };
  
      // Set up the interval to toggle the active state every 5 seconds
      const intervalId = setInterval(toggleActive, 5000);
  
      // Clean up the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }, []);
  return (
    <div className={style.main}>
      <NavBar/>
      <div className={style.container}>
        <div className={style.imgbox}>
        <img    className={active ? style.active : ""}  src={blog[0]?.image}  alt='blog' />
        </div>
          <div className={style.infobox}>
          <h1>{blog[0]?.heading}</h1>
          <hr/>
       <p className={style.para}>{blog[0]?.description}</p>
          </div>
    
      </div>
      <CallButton/>
    </div>
  )
}

export default FullBlog2
