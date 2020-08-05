import React from 'react'
import './support.styles.scss'
import linkedin from '../../assets/linkedin.webp'
import chain from '../../assets/chain.webp'

const Support = () => {
  return (
    <div className='support-main'>
      <div className='info'>
        <div className='contact'>
          <h2 className='contact-h'>
            <span>Contact Information</span>
          </h2>
          <p className='contact-p'>
            <span>
              Eski Osmanlı Sokak Osmanlı Apartmanı No 15 Daire 6 Şişli,
              İstanbul, Turkey 34680
            </span>
          </p>
          <p>
            <span>info@ubglobal.com.tr</span>
          </p>
          <div className='items'>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href={
                'https://www.linkedin.com/company/ugurcan-customs-consultancy-ltd/'
              }
            >
              <img className='imgclass' alt='1' src={linkedin}></img>
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href={'https://www.ugmgumruk.com/'}
            >
              <img className='imgclass' alt='2' src={chain}></img>
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href={'https://webgumruk.com/authentication/login.xhtml'}
            >
              <img className='imgclass' alt='3' src={chain}></img>
            </a>
          </div>
        </div>
        <div className='form'>
          <form>
            <input
              type='text'
              id='fname'
              name='fname'
              placeholder='Name Surname'
            />
            <br />
            <input type='text' id='fname' name='fname' placeholder='E-Mail' />
            <br />
            <input type='text' id='fname' name='fname' placeholder='Phone' />
            <br />
            <input type='text' id='fname' name='fname' placeholder='Subject' />
            <br />
            <input
              type='text'
              id='fname'
              name='fname'
              placeholder='Your Message Here'
            />
            <br />
            <button class='btn' onClick={(e) => e.preventDefault()}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className='footer'>
        ©2020, UB Global Logistics and Transportation LTD.
      </div>
    </div>
  )
}

export default Support
