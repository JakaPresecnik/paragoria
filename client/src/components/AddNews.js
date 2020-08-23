import React, { Component } from 'react';

import '../styles/additional.css';
import Preview from './Preview'

class AddNews extends Component {
  state = {
    showPreview: false,
    type: null,
    date: null,
    content: null,
    description: null,
  }

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

  componentDidMount() {
    const monthArray = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    const today = new Date();
    this.setState({date: `${today.getDate()}-${monthArray[today.getMonth()]}-${today.getFullYear()}`})
  }
  handleShowPreview(e) {
    e.preventDefault()
    this.setState((prevState) => ({showPreview: !prevState.showPreview}))
  }
  handleTypeChange(e) {
    this.setState({type: e.target.value})
  }
  handleLinkUrlChange(e) {
    this.setState({content: e.target.value})
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  }
  handlePostNews() {
    const data = {
      date: this.state.date,
      type: this.state.type,
      content: this.state.content,
      description: this.state.description,
    }
    this.postNews('/api/v1/news', data)
  }



  render() {
    const {showPreview, type, content, description, date} = this.state;

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
          content={content}
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

            <button disabled={!type || !content || !description} onClick={e => this.handlePostNews()}>DODAJ</button>
            <button onClick={e => this.handleShowPreview(e)} className='preview-btn'>PREDOGLED</button>
          </form>
        </div>
      </section>
    )
  }
}

export default AddNews;
