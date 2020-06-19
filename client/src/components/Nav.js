import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav (props) {
  return (
      <nav>
          <ul className={props.shadeNavigation ? 'scrolled' : null}>
              <li><NavLink to='/paragoria' exact activeClassName="selected">Home</NavLink></li>
              <li><NavLink to='/paragoria/news' activeClassName="selected">News</NavLink></li>
              <li><NavLink to='/paragoria/visuals' activeClassName="selected">Visuals</NavLink></li>
              <li><NavLink to='/paragoria/biography' activeClassName="selected">Biography</NavLink></li>
              <li><NavLink to='/paragoria/booking' activeClassName="selected">Booking</NavLink></li>
          </ul>
      </nav>
  )
}

export default Nav
