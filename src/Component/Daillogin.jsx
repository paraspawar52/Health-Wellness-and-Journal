import React from 'react'
import Navbar from './Navbar'
import Meals from './Meals'
import Graph from './Graph'
import Footer from './Footer'
import SleepDuration from './SleepDuration'
import HealthHostic from './HealthHostic'
import HealthTracking from './HealthTracking'
import MealSchdeule from './MealSchdeule'
function Dailylogin () {
  return (
    <div>
        <Navbar/>
        <Meals/>
        <SleepDuration/>
        <HealthTracking/>
        <HealthHostic/>
        <MealSchdeule/>
        
        {/* <Graph/> */}
        <Footer/>
    </div>
  )
}

export default Dailylogin