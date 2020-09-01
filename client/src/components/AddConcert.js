import React, { Component } from 'react';

class AddConcert extends Component {
    state = {
        date: null,
        time: '',
        location: null,
        ostalo: null,
    }

    handleDateChange(e) {
        this.setState({date: e.target.value});
    }

    handleTimeChange(e) {
        this.setState({time: e.target.value});
    }

    handleLocationChange(e) {
        this.setState({location: e.target.value});
    }

    handleOstaloChange(e) {
        this.setState({ostalo: e.target.value});
    }

    handlePostConcert(e) {
        const data = {
            datetime: `${this.state.date} ${this.state.time}`,
            location: this.state.location,
            description: this.state.ostalo
        }

        this.props.postConcert('/api/v1/concert', data);
    }

    render() {
        const {date, location} = this.state;
        return (
            <div>
                <h3>CONCERT:</h3>
                <form className='news-form'>
                    <label style={{width: '100%'}}>Čas (am/pm) in datum:</label>
                    <input onChange={e => this.handleDateChange(e)} type="date" id="date" style={{width: '50%'}} />
                    <input onChange={e => this.handleTimeChange(e)} type="time" id="time" style={{width: '50%'}} />
                    <label htmlFor='location'className='fullW' >Lokacija koncerta (in seveda lokal ali fest...):</label>
                    <input onChange={e => this.handleLocationChange(e)} id='location' type='text' placeholder='Kje?'/>
                    <label htmlFor='ostalo' className='fullW'>Ostalo(Ostali bandi....):</label>
                    <input onChange={e => this.handleOstaloChange(e)} id='ostalo' type='text' placeholder='ostalo...' className='halfInput'/>
                    <button disabled={!date || !location} onClick={e => this.handlePostConcert()}>DODAJ</button>
                </form>
            </div>
        )
    }
}

export default AddConcert;