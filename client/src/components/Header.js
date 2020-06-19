import React from 'react';
import { FaSoundcloud, FaAmazon } from 'react-icons/fa'

import logo from '../img/logo.png';
import cd from '../img/last_album.png';

class Header extends React.Component {
    state = {
        popUp: true,
    }

    handleShowBox() {
        this.setState((prevState) => ({popUp: !prevState.popUp}))
    }

    render() {
        return (
            <header>
                <img src={logo} alt='logo' />
                <div className={this.state.popUp ? 'hiddenBox' : 'buyAlbum'}>
                    <p>Buy it on:</p>
                    <ul>
                        <li><a className={this.props.shadeNavigation ? 'scrolled-link' : null} href='https://soundcloud.com/paragoria' target='_blank' rel="noopener noreferrer"><FaSoundcloud size='1.5em' /></a></li>
                        <li><a className={this.props.shadeNavigation ? 'scrolled-link' : null} href='https://www.amazon.com/Decomposition-Mind-Paragoria/dp/B00HQVNB84' target='_blank' rel="noopener noreferrer"><FaAmazon size='1.5em' /></a></li>
                    </ul>
                </div>
                <img className='albumCover' src={cd} alt='Album cover' onClick={() => this.handleShowBox()}/>
            </header>
    )
    }
}

export default Header;