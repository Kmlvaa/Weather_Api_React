import React, { useState, useEffect } from 'react'
import Style from '../Styles/Index.module.css'
import { Input } from '@chakra-ui/react'
import { SearchIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

function Index() {

  const [input, setInput] = useState("");
  const [city, setCity] = useState("");

  const HandleSearchBtn = () => {
    setCity(input);
  }

  useEffect( () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=no`)
    .then((res) => res.json())
    .then((data) => console.log(data))

  }, [city])

  return (
    <div className={Style.main}>
      <div className={Style.header}>
        <Link className={Style.btn} to={"/about"}><InfoOutlineIcon /></Link>
        <Input onChange={(e) => setInput(e.target.value)} padding={5} placeholder="Enter city name:" />
        <button onClick={ HandleSearchBtn } className={Style.btn}><SearchIcon /></button>
      </div>
      <div className={Style.body}>
        <div className={Style.one}> <span className="city-location"></span></div>
        <div className={Style.two}> <span className="time"></span></div>
        <div className={Style.three}> <span className="date"></span></div>
        <div className={Style.four}> <img  className="icon" src="" alt="" /></div>
        <div className={Style.five}> <span className="temperature"></span></div>
        <div className={Style.footer}>
          <div className="wind-speed"></div>
          <div className="humidity"></div>
          <div className="feels-like"></div>
          <div className="uv-index"></div>
        </div>
      </div>
    </div>
  )
}

export default Index