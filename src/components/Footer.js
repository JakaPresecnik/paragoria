import React from 'react'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'

function Footer () {
    return (
        <footer>
            <ul>
                <li><a href='https://www.facebook.com/Paragoria-184127594965190/' target='_blank' rel="noopener noreferrer"><FaFacebookF size='1.5em' /></a></li>
                <li><a href='https://www.youtube.com/channel/UC7GwMieOsZ1ODfk6H6cqMIg' target='_blank' rel="noopener noreferrer"><FaYoutube size='1.5em' /></a></li>
            </ul>
        </footer>
    )
}

export default Footer