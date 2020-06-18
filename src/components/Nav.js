import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    state = {
        shadeNavigation: false,
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 30) {
                this.setState({shadeNavigation: true})
            }else {
                this.setState({shadeNavigation: false})
            }
        })
    }
    render () {
        return (
            <nav>
                <ul className={this.state.shadeNavigation ? 'scrolled' : null}>
                    <li><NavLink to='/paragoria' exact activeClassName="selected">Home</NavLink></li>
                    <li><NavLink to='/paragoria/news' activeClassName="selected">News</NavLink></li>
                    <li><NavLink to='/paragoria/visuals' activeClassName="selected">Visuals</NavLink></li>
                    <li><NavLink to='/paragoria/biography' activeClassName="selected">Biography</NavLink></li>
                    <li><NavLink to='/paragoria/booking' activeClassName="selected">Booking</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Nav
