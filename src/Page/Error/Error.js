import React from 'react'
import style from "./Error.module.css"
import img from "../../Image/Errors.gif"
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className={style.main}>
     <Link to={"/"}> <button className={style.btn}>Back to Home Page</button></Link>  
      <img className={style.img} src={img} alt='bg' />
    </div>
  )
}

export default Error
