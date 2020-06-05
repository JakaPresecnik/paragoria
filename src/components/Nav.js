import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav () {
    return (
        <nav>
            <ul>
                <li><NavLink to='/' exact activeClassName="selected">Home</NavLink></li>
                <li><NavLink to='/news' activeClassName="selected">News</NavLink></li>
                <li><NavLink to='/visuals' activeClassName="selected">Visuals</NavLink></li>
                <li><NavLink to='/biography' activeClassName="selected">Biography</NavLink></li>
                <li><NavLink to='/merch' activeClassName="selected">Merch</NavLink></li>
                <li><NavLink to='/booking' activeClassName="selected">Booking</NavLink></li>         
            </ul>
        </nav>
    )
}

export default Nav