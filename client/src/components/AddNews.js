import React, { Component } from 'react';

import '../styles/additional.css';
import Preview from './Preview'

class AddNews extends Component {
  state = {
    showPreview: false,
    type: null,
    date: null,
    linkUrl: null,
    description: null,
  }
  componentDidMount() {
    const monthArray = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
    const today = new Date();
    this.setState({date: `${today.getDate()}. ${monthArray[today.getMonth()]} ${today.getFullYear()}`})
  }
  handleShowPreview(e) {
    e.preventDefault()
    this.setState((prevState) => ({showPreview: !prevState.showPreview}))
  }
  handleTypeChange(e) {
    this.setState({type: e.target.value})
  }
  handleLinkUrlChange(e) {
    this.setState({linkUrl: e.target.value})
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  }

  render() {
    const {showPreview, type, linkUrl, description, date} = this.state;

    return (
      <section>
        <div className='section-header'>
          <h2>Dodaj v News:</h2>
          <p>Dokler ni funkcijonalnosti za odstranjevanje sekcij novic sledi navodilom, če ne lahko cela sekcija zgleda narobe!</p>
        </div>

        <Preview
          showPreview={showPreview}
          type={type}
          date={date}
          linkUrl={linkUrl}
          description={description}
          handleShowPreview={this.handleShowPreview.bind(this)}
        />

        <div className='adding'>
          <h3>Dodaj:</h3>
          <form className='news-form'>
          <select onChange={e => this.handleTypeChange(e)}>
              <optgroup label='Tip'>
                <option hidden>Izberi tip post-a</option>
                <option value='video'>Youtube video in opisom</option>
                <option value='flyer'>Slika in opis</option>
                <option value='plain'>Navaden post z naslovom</option>
              </optgroup>
            </select>
            <label htmlFor='link' style={{width: '100%'}}>Link do slike - lahko je tudi link slike na facebooku, youtube videa, ali navaden text kot naslov:</label>
            <input onChange={e => this.handleLinkUrlChange(e)} type='text' id='link' placeholder='Image URL/Youtube URL/Header' />
            <label htmlFor='link' style={{width: '100%'}}>Opis dogodka, napoved dogodka, datum, lokacija, kje, kdaj, zakaj...:</label>
            <textarea onChange={e => this.handleDescriptionChange(e)} placeholder='Text Description...'/>

            <button>DODAJ</button>
            <button onClick={e => this.handleShowPreview(e)} className='preview-btn'>PREDOGLED</button>
          </form>
        </div>
      </section>
    )
  }
}

export default AddNews;
