import React from 'react'
import styles from './Current.module.scss'
import { useSelector } from 'react-redux'
import { getTime } from '../../utils/getTime'
import { weatherName } from '../../utils/getImg'
import headerBg from '../../assets/images/headerBg.svg'
import temp from '../../assets/images/temp.svg'
import wind from '../../assets/images/wind.svg'
import davlenie from '../../assets/images/davlenie.svg'
import osadki from '../../assets/images/osadki.svg'



const Current = () => {
  
  const weather = useSelector(state => state.weather.weather)
  const time = getTime(weather)
  const description = weather.current.weather[0].description
  const img = weatherName[description] || weatherName['дождь']
  const items = [
    {
      img: temp,
      name: 'Температура',
      text: `${Math.round(weather.current.temp)}° - ощущается как ${Math.round(weather.current.feels_like)}°`
    },
    {
      img: davlenie,
      name: 'Давление',
      text: weather.current.pressure
    },
    {
      img: osadki,
      name: 'Облачность',
      text: weather.current.clouds + '%'
    },
    {
      img: wind,
      name: 'Ветер',
      text: Math.round(weather.current.wind_speed) + 'м/c'
    },
    
  ]
  
  
  return (
    <div className={styles.current}>
        <div className={styles.current_left}>
            <p className={styles.current_left_degree}>{Math.round(weather.current.temp)}°</p>
            <p className={styles.current_left_today}>Сегодня</p>
            <p className={styles.current_left_time}>Время: {time}</p>
            <p className={styles.current_left_city}>Город: {weather.timezone.split('/')[1]}</p>
            <img src={img} alt="" className={styles.current_left_img} />
        </div>
        <div className={styles.current_right}>
          <img src={headerBg} alt="" className={styles.current_right_img} />
          {items.map(item => (
              <div key={item.name} className={styles.current_right_item}>
                <div className={styles.current_right_item_icon}>
                  <img src={item.img} alt="" />
                </div>
                <p className={styles.current_right_item_text}>{item.name}</p>
                <p className={styles.current_right_item_value}>{item.text}</p>
            </div>
          ))}
        
        </div>
    </div>
  )
}

export default Current