import React, { useState } from 'react'
import Style from '../Styles/Index.module.css'
import { Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function Index() {

  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});
  const [isError, setIsError] = useState(false);

 const HandleSearchBtn = async() => {
    if(!input.trim()) return
    try{
      const resp = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${input}&aqi=no`);
      const data = await resp.json();
      const weatherData = {
        location_city: `${data.location.name} /`,
        location_country: `${data.location.country}`,
        temperature: `${data.current.temp_c} C`,
        time: `${data.location.localtime}`,
        icon: `${data.current.condition.icon}`,
        wind_speed: `${data.current.wind_mph} km/h`,
        humidity: `${data.current.humidity} %`,
        feelslike_c: `${data.current.feelslike_c} C`,
        uv_index: `${data.current.uv}`
      }
      setWeather(weatherData);
      setIsError(false);
    }
    catch(err){
      console.log(err);
      setIsError(true);
      setWeather({})
    }
  }

  return (
    <div className={Style.main}>
      <div className={Style.header}>
        <Input value={input} onChange={(e) => setInput(e.target.value)} padding={10} placeholder="Enter city name:" border={1} borderRadius={40}/>
        <button onClick={ HandleSearchBtn } className={Style.btn}><SearchIcon /></button>
      </div>
      {isError && <div style={{color: 'red'}}>Location not found!</div>}
      {weather ? 
          <div className={Style.body}>
            <div className={Style.one}>{weather.location_city} {weather.location_country}</div>
            <div className={Style.two}> <span className="time">{weather.time}</span></div>
            <div className={Style.four}><img src={`${weather.icon}`} alt=''/></div>
            <div className={Style.five}>{weather.temperature}</div>
            <div className={Style.footer}>
              <div className="wind-speed"> {weather.wind_speed}</div>
              <div className="humidity">{weather.humidity}</div>
              <div className="feels-like">{weather.feelslike_c}</div>
              <div className="uv-index">{weather.uv_index}</div>
            </div>
          </div>
       : <div>{isError && <div style={{color: 'red'}}>Location not found!</div>} </div>}
    </div>
  )
}

export default Index