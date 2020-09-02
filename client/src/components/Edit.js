import React, { Component } from 'react';
import AddNews from './AddNews';
import AddConcert from './AddConcert';
import auth from '../utils/auth';

import '../styles/additional.css';

class Edit extends Component {

    postNews = async (url = '', data = {}) => {
        const res = await fetch (url, {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        try {
          const newData = await res.json();
          console.log('newData', newData);
          return newData;
        }catch(err) {
          console.log('Error: ', err);
        }
    }
    render() {
      
        return (
          <section>
              <div className='section-header'>
                  <h2>Dodaj:</h2>
                  <p>Dodaj novico ali koncert</p>
              </div>
                <button 
                  onClick={() => {
                    auth.logout(() => {
                      this.props.history.push('/login');
                    })
                  }}
                  className='logout' 
                >LOGOUT</button>
              

              <AddNews postNews={this.postNews}/>
              <AddConcert postConcert={this.postNews}/>
          </section>

        )
    }
}

export default Edit;