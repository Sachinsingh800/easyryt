import React from 'react'
import style from "./Home.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import FirstSection from '../../Section/FirstSection/FirstSection'
import SecondSection from '../../Section/SecondSection/SecondSection'
import ThirdSection from '../../Section/ThirdSection/ThirdSection'
import ForthSection from '../../Section/ForthSection/ForthSection'
import FifthSection from '../../Section/FifthSection/FifthSection'
import SixthSection from '../../Section/SixthSection/SixthSection'

function Home() {
  return (
    <div className={style.main}>
        <NavBar/>
          <FirstSection/>
          <SecondSection/>
          <ThirdSection/>
          <ForthSection/>
          <FifthSection/>
          <SixthSection/>
    </div>
  )
}

export default Home
