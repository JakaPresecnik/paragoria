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
import Visuals from './components/Visuals';
import ScrollToTop from './components/ScrollToTop'

import AddNews from './components/AddNews';

class App extends React.Component {
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
     <div className='container'>
       <div className='inner-container'>
         <div className='homepage-container'>
           <BrowserRouter>
             <Nav shadeNavigation={this.state.shadeNavigation} />
             <ScrollToTop />
             <Switch>
               <Route path='/paragoria' exact render={() => (
                 <Header shadeNavigation={this.state.shadeNavigation}/>
               )} />
               <Route path='/paragoria/news' component={News} />
               <Route path='/paragoria/biography' component={Biography} />
               <Route path='/paragoria/visuals' component={Visuals} />
               <Route path='/paragoria/booking' component={Booking} />

               <Route path='/paragoria/addNews' component={AddNews} />
             </Switch>
             <ReactPlayer url='https://soundcloud.com/on-parole/paragoria-from-carcass-to-soil' playing={false} width='70%' height='70px' style={{margin: '2em auto', maxWidth: '500px'}}/>
             <Footer shadeNavigation={this.state.shadeNavigation} />
           </BrowserRouter>

         </div>
       </div>
     </div>
     )
  }
}

export default App;
