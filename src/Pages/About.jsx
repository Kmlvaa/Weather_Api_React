import React from 'react'
import { Link } from 'react-router-dom'
import Index from './Index'

function About() {
  return (
    <div className='container'>
      <div>Some info about me</div>
      <Link to={'/'}> Back to Home </Link>
    </div>
  )
}

export default About