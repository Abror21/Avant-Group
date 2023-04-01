import React from 'react'
import './IntroItem.css'

const IntroItem = ({img, title, subtitle, text}) => {
  return (
    <div className='intro__info-box'>
      <img src={img} alt={title} />
      <div className='intro__info-box-inner'>
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default IntroItem
