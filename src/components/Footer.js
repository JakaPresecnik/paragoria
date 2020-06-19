import React from 'react'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'

function Footer (props) {
    return (
        <footer>
          <p>&copy; 2020 - Paragoria - All Rights Reserved.</p>
          <ul>
              <li><a className={props.shadeNavigation ? 'scrolled-link' : null} href='https://www.facebook.com/Paragoria-184127594965190/' target='_blank' rel="noopener noreferrer"><FaFacebookF size='1.5em' /></a></li>
              <li><a className={props.shadeNavigation ? 'scrolled-link' : null} href='https://www.youtube.com/channel/UC7GwMieOsZ1ODfk6H6cqMIg' target='_blank' rel="noopener noreferrer"><FaYoutube size='1.5em' /></a></li>
          </ul>
        </footer>
    )
}

export default Footer
