import React from 'react'
import './solutions.styles.scss'
import Star from '../svg'
const Solutions = () => {
  return (
    <div className='solutions-main'>
      <div className='left'></div>
      <div className='right'>
        <div className='solution-content'>
          <h2 className='solution-h'>
            <span>SOLUTIONS</span>
          </h2>
          <p className='solution-p'>
            <span>
              UB Global provides international logistics options with optional
              custom clearance and brokerage services. All processes are
              trackable and archieved in{' '}
              <a
                style={{ textDecoration: 'underline' }}
                target='_blank'
                href={'https://webgumruk.com/authentication/login.xhtml'}
              >
                MY Web
              </a>{' '}
              system.
            </span>
          </p>
          <div className='list'>
            <ul>
              <li>Bonded Warehouse Services</li>
              <li>Air Freight</li>
              <li>Sea Freight</li>
              <li>Road Transport</li>
              <li>Tailor Made Transport</li>
              <li>Door to Door Courrier</li>
              <li>Supply Chain Management Consultancy</li>
              <li>FCL Full Container Load - LCL – Less Container Load</li>
              <li>Insured Consignment</li>
            </ul>
          </div>
          <div className='sol-star'>
            <Star />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions
