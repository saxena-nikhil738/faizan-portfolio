import React from 'react'
import './infocard.css'
import { Link } from 'react-router-dom'
const Infocard = ({ iconUrl}) => {
  return (
    <div className='contact-details-card'>
        <div className='icon'>
            <img src= {iconUrl}  />
        </div>
        <a href='https://www.linkedin.com/in/faizanhusain/' >Faizan Husain</a>
    </div>
  )
}

export default Infocard