import DayNightToggle from 'react-day-and-night-toggle';
import React, { useState } from 'react'

const DayNight = ({setIsDarkMode ,isDarkMode}) => {


  return (
    <div>
        <DayNightToggle
            onChange={() => setIsDarkMode(!isDarkMode)}
            checked={isDarkMode}
        />
    </div>
  )
}

export default DayNight