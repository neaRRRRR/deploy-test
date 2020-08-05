import React from 'react'
import './quality.styles.scss'
import Card from '../quality-cards/card.component'

const Quality = () => {
  return (
    <div className='quality-main'>
      <div className='quality-up'>
        <div className='contentq'>
          <div className='header'>QUALITY</div>
          <div className='pr'>
            UB Global quality pillars including mission vision paths are; data
            safety and protection, customer relationship management, operational
            excellence, and conscious growth
          </div>
        </div>
      </div>
      <div className='quality-down'>
        <Card />
      </div>
    </div>
  )
}

export default Quality
