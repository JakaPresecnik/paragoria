import React, { useState, useEffect } from 'react';
import ReactLoading from "react-loading";

import logo from '../img/logo.png';
import cd from '../img/cd.png';

function Header () {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => setLoaded(true));
            }, 550);
        })

    return (
        loaded ? (
            <header>
                <img src={logo} alt='logo' />
                <img src={cd} alt='Album cover' />
            </header>
        ) : (
            <ReactLoading type={"bars"} color={"#632828"} width={230} className='loading'/>
        )
    )
}

export default Header;