import React from 'react'
import s from './Week.module.scss'
import { weatherName } from '../../utils/getImg'
import { getDate } from '../../utils/getDate'

const Day = ({day, i }) => {

    
    const description = day.weather[0].description
    const img = weatherName[description] || weatherName['дождь']
    const getWeekDay = getDate(day.dt, 'weekday')
    const getMonthDay = getDate(day.dt, 'day')
    const getMonth = getDate(day.dt,'month')
    
  return (
    <div className={s.week__item}>
        <p className={s.week__item_day}>{getWeekDay}</p>
        <p className={s.week__item_date}>{getMonthDay}  {getMonth}</p>
        <img src={img} alt="" className={s.week__item_img} />
        <p className={s.week__item_temp}>{Math.round(day.temp.max)}°</p>
        <p className={s.week__item_temp2}>{Math.round(day.feels_like.day)}°</p>
        <p className={s.week__item_info}>{description}</p>
    </div>
  )
}

export default Day