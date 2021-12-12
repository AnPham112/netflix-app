import React, { useRef, useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'

import './header.scss'

import logo from '../../assets/netflix-logo.png'

const headerNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Movies',
    path: '/movie'
  },
  {
    display: 'TV Series',
    path: '/tv'
  }
];

const Header = () => {
  const {pathname} =  useLocation()
  const headerRef = useRef(null)

  useEffect(() => {
    const shrinkHeader = () => {
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop>100) {
        headerRef.current.classList.add('shrink')
      } else {
        headerRef.current.classList.remove('shrink')
      }
    }
    window.addEventListener('scroll', shrinkHeader)
    return () => {
      window.removeEventListener('scroll', shrinkHeader)
    }
  }, []);



  const active = headerNav.findIndex(elm => elm.path === pathname)
  return (
    <div ref={headerRef} className='header'>
      <div className="header__wrap container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className='header__nav'>
          {headerNav.map((nav, index) => (
            <li key={index} className={`${index === active ? 'active': ''}`}>
              <Link to={nav.path}>
                {nav.display}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
