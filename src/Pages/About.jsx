import React from 'react'
import { Link } from 'react-router-dom'
import Index from './Index'

function About() {

    const btn = {
      padding: '10px',
      backgroundColor: 'lavender',
      border: 'none',
      borderRadius: '40px'
    };
  return (
    <div className='container' style={{marginLeft: '50px', marginTop: '30px'}}>
      <div>Some info about me</div>
      <br />
      <button style={btn}><Link to={'/'}> Back to Home </Link></button>
    </div>
  )
}

export default About