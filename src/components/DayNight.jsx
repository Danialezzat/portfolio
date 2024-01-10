import DayNightToggle from 'react-day-and-night-toggle';


import React, { useState } from 'react'

const DayNight = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);


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