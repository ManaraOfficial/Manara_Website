import React from 'react'
import HeroSection from '../components/body/HeroSection'
import AboutUs from '../components/body/AboutUs'
import OurActivities from '../components/body/OurActivities'
import Testomonials from '../components/body/Testomonials'
import TeamMembers from '../components/body/TeamMembers'
const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <AboutUs/>
      <OurActivities/>
      <Testomonials/>
      <TeamMembers/>
    </div>
  )
}

export default HomePage