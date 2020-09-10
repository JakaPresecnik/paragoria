import React from 'react';
import { FaSoundcloud, FaAmazon, FaBandcamp } from 'react-icons/fa'

import logo from '../img/logo.png';
import cd from '../img/last_album.png';

import EditMerch from './EditMerch'

class Header extends React.Component {
  state = {
    popUp: true,
  }

  handleShowBox() {
    this.setState((prevState) => ({popUp: false}))
  }
  
  handleHideBox() {
    this.setState((prevState) => ({popUp: true}))
  }

  render() {
    return (

            <header>

              <img src={logo} alt='logo' />
                <div onMouseOver={() => this.handleShowBox()} onMouseLeave={() => this.handleHideBox()}>
                <div className={this.state.popUp ? 'hiddenBox' : 'buyAlbum'}>
                      <ul>
                          <li><a className='scrolled-link' href='https://soundcloud.com/paragoria' target='_blank' rel="noopener noreferrer"><FaSoundcloud size='1.5em' /></a></li>
                          <li><a className='scrolled-link' href='https://www.amazon.com/Decomposition-Mind-Paragoria/dp/B00HQVNB84' target='_blank' rel="noopener noreferrer"><FaAmazon size='1.5em' /></a></li>
                          <li><a className='scrolled-link' href='https://onparoleprod.bandcamp.com/album/decomposition-of-mind' target='_blank' rel="noopener noreferrer"><FaBandcamp size='1.5em' /></a></li>
                      </ul>
                  </div>
                  <img className='album-cover' src={cd} alt='Album cover' />
                </div> 
           </header> 
    )
  }
}

export default Header;