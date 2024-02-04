import React, { useState } from 'react'
import Style from '../Styles/Index.module.css'
import { Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'

function Index() {

  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);

  const HandleSearchBtn = () => {
      fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${input}&aqi=no`)
    .then((res) => res.json())
    .then((data) => {
      const weatherData = {
        location: `${data.location.name}`,
        temperature: `${weather.current.temp_c} C`,
        time: `${weather.location.localtime}`,
        icon: `${weather.current.condition.icon}`,
        wind_speed: `${weather.current.wind_mph} km/h`,
        humidity: `${weather.current.humidity} %`,
        feelslike_c: `${weather.current.feelslike_c} C`,
        uv_index: `${weather.current.uv}`
      }
      setWeather(weatherData);
    })
    .catch(err => console.log(err))
    }
  
  
  const ErrorMessage = (msg) => {
    const body = document.querySelector('.body');
    body.innerHTML = `${msg}`
  }


  return (
    <div className={Style.main}>
      <div className={Style.header}>
        <Input onChange={(e) => setInput(e.target.value)} padding={10} placeholder="Enter city name:" border={1} borderRadius={40}/>
        <button onClick={ HandleSearchBtn } className={Style.btn}><SearchIcon /></button>
      </div>
      {weather && (
        <div className={Style.body}>
        <div className={Style.one}>{weather.location}</div>
        <div className={Style.two}> <span className="time">{weather.time}</span></div>
        <div className={Style.three}> <span className="date"></span></div>
        <div className={Style.four}><img src='{weather.current.condition.icon}' alt=''/></div>
        <div className={Style.five}> <span className="temperature">{weather.temperature}</span></div>
        <div className={Style.footer}>
          <div className="wind-speed"> {weather.wind_speed}</div>
          <div className="humidity">{weather.humidity}</div>
          <div className="feels-like">{weather.feelslike_c}</div>
          <div className="uv-index">{weather.uv_index}</div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Index