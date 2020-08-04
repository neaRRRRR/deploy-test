import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import './header.styles.scss'
import logo from '../assets/logo.webp'

const Header = () => {
  return (
    <header>
      <div className='logo-container'>
        <img align='left' className='logo' src={logo} />
        <div className='text-container'>Through Air, Earth, Sea</div>
      </div>
      <nav>
        <ul className='nav-links'>
          <Link
            activeClass='active'
            to='section1'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass='active'
            to='history-main'
            spy={true}
            smooth={true}
            offset={20}
            duration={1000}
          >
            History
          </Link>
          <Link
            activeClass='active'
            to='section1'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Solutions
          </Link>
          <Link
            activeClass='active'
            to='section1'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Support
          </Link>
          <Link
            activeClass='active'
            to='section1'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Quality
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
