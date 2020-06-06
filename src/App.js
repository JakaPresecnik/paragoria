import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactPlayer from 'react-player';

import './styles/container.css';
import './styles/section.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Booking from './components/Booking';
import News from './components/News';
import Biography from './components/Biography';

function App () {
 return ( 
  <div className='container'>
    <div className='inner-container'>
      <div className='homepage-container'>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path='/' exact component={Header} />
            <Route path='/news' component={News} />
            <Route path='/biography' component={Biography} />
            <Route path='/booking' component={Booking} />
          </Switch>
          <ReactPlayer url='https://soundcloud.com/on-parole/paragoria-from-carcass-to-soil' playing={true} width='70%' height='70px' style={{margin: '2em auto', maxWidth: '500px'}}/>
          <Footer />
        </BrowserRouter>
        
      </div>
    </div>
  </div>
  )
}

export default App;