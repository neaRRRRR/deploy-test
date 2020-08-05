import React from 'react'
import './card.styles.scss'
import Star from '../svg'

const Card = () => {
  const data = [
    {
      key: 1,
      head: 'Data Safety & Compliance',
      par:
        'UB GLOBAL acts within the framework of business ethics and rules in its relations with the company, suppliers, and customers. The Company acts upon on sensitivity of information and compliance regulations, protects the privacy of individuals and institutions at all levels.',
    },
    {
      key: 2,
      head: 'Customer Relationship Management',
      par:
        'UB GLOBAL staff at all levels acts upon the company’s trust-based, open communicatory mission when interacting with their customers. The usual process follows as assigning a team member to a customer company to build up a sincere, valuable business network and provide niche services.',
    },
    {
      key: 3,
      head: 'Operational Excellence',
      par:
        'UB GLOBAL operates within a mindset of flexible frames such as calculating risks, implementing efficient solutions, delegating responsibilities, demonstrating leadership, keeping track of processes at all times.',
    },
    {
      key: 4,
      head: 'Conscious Growth',
      par:
        "UB GLOBAL invests in the growth of their employees' competencies and skills by providing digital and in house learning solutions. Physical and Mental Wellbeing and operational performance are inharmoniously managed. The company seeks conscious and sustainable business opportunities, stays up to date to digital logistics and procurement trends as well as provides consultancy, training in supply chain management, shipping, and logistics.",
    },
  ]

  return (
    <div className='grid-container'>
      {data.map((info) => {
        return (
          <div className='card' key={info.key}>
            <div className='svg'>
              <Star />
            </div>
            <h3>
              <span>{info.head}</span>
            </h3>
            <p className='pq'>
              <span>{info.par}</span>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Card
