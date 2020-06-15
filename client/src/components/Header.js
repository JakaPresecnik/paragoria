import React from 'react';

import logo from '../img/logo.png';
import cd from '../img/last_album.png';

function Header () {
    return (
            <header>
                <img src={logo} alt='logo' />
                <img src={cd} alt='Album cover' />
            </header>
    )
}

export default Header;