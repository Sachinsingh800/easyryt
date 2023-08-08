import React,{useEffect} from 'react'
import style from "./Error.module.css"
import img from "../../Image/Errors.gif"
import { Link, useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Error() {
  const { blogTitle } = useParams(); 
  console.log(blogTitle,"Full Blog")
  const location = useLocation();

  useEffect(() => {
    console.log('Current URL:', location.pathname);
  }, [location]);

  return (
    <div className={style.main}>
     <Link to={"/"}> <button className={style.btn}>Back to Home Page</button></Link>  
      <img className={style.img} src={img} alt='bg' />
    </div>
  )
}

export default Error
