import React from 'react'
import s from './Week.module.scss'
import { useSelector } from 'react-redux'
import Day from './Day'

const Week = () => {
    
    const week = useSelector(state => state.weather.weather.daily)
    
  return (
    <div className={s.week}>
        {week.map((day,i) => (
            <Day
                key={day.dt}
                day={day}
                i={i}
            />
        ))}
    </div>
  )
}

export default Week