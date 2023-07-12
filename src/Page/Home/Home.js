import React from 'react'
import style from "./Home.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import FirstSection from '../../Section/FirstSection/FirstSection'
import SecondSection from '../../Section/SecondSection/SecondSection'

function Home() {
  return (
    <div className={style.main}>
        <NavBar/>
          <FirstSection/>
          <SecondSection/>
    </div>
  )
}

export default Home
