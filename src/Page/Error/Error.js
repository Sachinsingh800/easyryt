import React,{useEffect, useState} from 'react'
import style from "./Error.module.css"
import img from "../../Image/Errors.gif"
import { Link, useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Error() {
  const { blogTitle } = useParams(); 
  console.log(blogTitle,"Full Blog")
  const location = useLocation();

  const [blog,setBlog ] =useState()
console.log(blog)
  useEffect(() => {
    const handlegetData = async () => {
      try {
        const response = await axios.get('https://easyryt.onrender.com/client/getAllBlog');
        setBlog(response.data.data)
      } catch (error) {
        console.log(error);
      }
    };
    handlegetData();

  
  


    const blogTitle = location.pathname.slice(7);
   const urlFriendlyTitle = blogTitle.replace(/-/g, ' ');
    console.log('URL-friendly title:', urlFriendlyTitle);

function handleFilterData(){
  const newData=blog?.filter((item)=>item.title==urlFriendlyTitle)
  console.log(newData,"aa gaya")
}
handleFilterData()



  }, [location]);

  return (
    <div className={style.main}>
     <Link to={"/"}> <button className={style.btn}>Back to Home Page</button></Link>  
      <img className={style.img} src={img} alt='bg' />
    </div>
  )
}

export default Error
