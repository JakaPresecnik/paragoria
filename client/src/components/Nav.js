import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav (props) {
  return (
      <nav>
          <ul className={props.shadeNavigation ? 'scrolled' : null}>
              <li><NavLink to='/' exact activeClassName="selected">Home</NavLink></li>
              <li><NavLink to='/news' activeClassName="selected">News</NavLink></li>
              <li><NavLink to='/visuals' activeClassName="selected">Visuals</NavLink></li>
              <li><NavLink to='/biography' activeClassName="selected">Biography</NavLink></li>
              <li><NavLink to='/booking' activeClassName="selected">Booking</NavLink></li>
          </ul>
      </nav>
  )
}

export default Nav
