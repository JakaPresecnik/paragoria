import React, { Component } from 'react';

import Preview from './Preview'

class AddNews extends Component {
  state = {
    showPreview: false,
    type: '',
    header: '',
    date: '',
    content: '',
    description: '',
    audioUrl: ''
  }

  componentDidMount() {
    const monthArray = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
    const today = new Date();
    this.setState({date: `${today.getDate()} ${monthArray[today.getMonth()]} ${today.getFullYear()}`})
  }
  handleShowPreview(e) {
    e.preventDefault()
    this.setState((prevState) => ({showPreview: !prevState.showPreview}))
    if (this.state.type === 'audio') {
      const audioWww = this.state.content.replace("www", "dl");
      const audioUrl = audioWww.replace("?dl=0", '');
      this.setState({audioUrl: audioUrl})
    }
  }
  handleTypeChange(e) {
    this.setState({type: e.target.value})
  }
  handleHeaderChange(e) {
    this.setState({header: e.target.value})
  }
  handleLinkUrlChange(e) {
    this.setState({content: e.target.value})
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  }
  handlePostNews() {
    const audioWww = this.state.content.replace("www", "dl");
    const audioUrl = audioWww.replace("?dl=0", '');
    const data = {
      date: this.state.date,
      type: this.state.type,
      header: this.state.header,
      content: this.state.type === 'audio' ? audioUrl : this.state.content,
      description: this.state.description,
    }
    this.props.postNews('/api/v1/news', data)
  }

  render() {
    const {showPreview, type, header, content, description, date, audioUrl} = this.state;

    return (
      <div>

        <Preview
          showPreview={showPreview}
          type={type}
          date={date}
          header={header}
          content={content}
          audioUrl={audioUrl}
          description={description}
          handleShowPreview={this.handleShowPreview.bind(this)}
        />

        <div className='adding'>
          <h3>NEWS:</h3>
          <form className='news-form'>
          <select onChange={e => this.handleTypeChange(e)}>
              <optgroup label='Tip'>
                <option hidden>Izberi tip post-a</option>
                <option value='video'>Youtube video in opisom</option>
                <option value='flyer'>Slika in opis</option>
                <option value='audio'>Audio iz dropboxa</option>
                <option value='plain'>Navaden post z naslovom</option>
              </optgroup>
            </select>
            <label htmlFor='header' className='fullW'>Naslov:</label>
            <input 
              onChange={e => this.handleHeaderChange(e)} 
              type='text' 
              id='header' 
              placeholder='Header'
              value={header}
             />
            <label htmlFor='content' className='fullW'>Link do slike - lahko je tudi link slike na facebooku, youtube videa:</label>
            <input 
              disabled={type === 'plain'} 
              onChange={e => this.handleLinkUrlChange(e)} 
              type='text' id='content' 
              placeholder='Image URL/Youtube URL' 
              value={content}
            />
            <label htmlFor='description' className='fullW'>Opis dogodka, napoved dogodka, datum, lokacija, kje, kdaj, zakaj...:</label>
            <textarea 
              onChange={e => this.handleDescriptionChange(e)} 
              placeholder='Text Description...'
              value={description}
            />

            <button disabled={!type || !description} onClick={e => this.handlePostNews(e)}>DODAJ</button>
            <button onClick={e => this.handleShowPreview(e)} className='preview-btn'>PREDOGLED</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddNews;
