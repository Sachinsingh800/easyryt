import React from 'react'
import style from "./Home.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import FirstSection from '../../Section/FirstSection/FirstSection'

function Home() {
  return (
    <div className={style.main}>
        <NavBar/>
          <FirstSection/>
    </div>
  )
}

export default Home
