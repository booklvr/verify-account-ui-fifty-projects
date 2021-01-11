import React, { Fragment, useState, useEffect } from 'react'

const ThemeClock = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [date, setDate] = useState('')
  const [hours, setHours] = useState('')
  // const [hoursForClock, setHoursForClock] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [amOrPm, setAmOrPm] = useState('')

  const toggleDarkMode = (e) => {
    document.querySelector('html').classList.toggle('dark')
    e.target.innerHTML =
      e.target.innerHTML === 'Dark mode' ? 'Light mode' : 'Dark mode'
  }

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

  // const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date()
      setMonth(time.getMonth())
      setDay(time.getDay())
      setDate(time.getDate())
      setHours(time.getHours())
      // setHoursForClock()
      setMinutes(time.getMinutes())
      setSeconds(time.getSeconds())
      setMonth(time.getMonth())
      setAmOrPm(hours >= 12 ? 'AM' : 'PM')
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Fragment>
      <button className='toggle' onClick={(e) => toggleDarkMode(e)}>
        Dark mode
      </button>

      <div className='clock-container'>
        <div className='clock'>
          <div
            className='needle hour'
            style={{
              transform: `translate(-50%, -100%) rotate(${scale(
                hours >= 13 ? hours % 12 : hours,
                0,
                11,
                0,
                360
              )}deg)`,
              transition: `${hours === 0 ? 'none' : 'all 0.5s ease-in'}`,
            }}
          ></div>
          <div
            className='needle minute'
            style={{
              transform: `translate(-50%, -100%) rotate(${scale(
                minutes,
                0,
                59,
                0,
                360
              )}deg)`,
              transition: `${minutes === 0 ? 'none' : 'all 0.5s ease-in'}`,
            }}
          ></div>
          <div
            className='needle second'
            style={{
              transform: `translate(-50%, -100%) rotate(${scale(
                seconds,
                0,
                59,
                0,
                360
              )}deg)`,
              transition: `${seconds === 0 ? 'none' : 'all 0.5s ease-in'}`,
            }}
          ></div>
          <div className='center-point'></div>
        </div>

        <div className='time'>
          {hours >= 13 ? hours % 12 : hours}:
          {minutes < 10 ? `0${minutes}` : `${minutes} ${amOrPm}`}
        </div>
        <div className='date'>
          {days[day]}, {months[month]} <span className='circle'>{date}</span>
        </div>
      </div>
    </Fragment>
  )
}

export default ThemeClock
