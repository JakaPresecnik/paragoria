import React, { Component } from 'react';
import ReactLoading from "react-loading";
import NewsNews from './NewsNews';
import NewsConcerts from './NewsConcerts';

class News extends Component {
    state = {
        data: null,
        loaded: false,
    }

    retrieveData = async () => {
        const res = await fetch('/api/v1/news');
        try {
            const data = await res.json();
            return data;
        } catch(error) {
            console.log('Error: ', error);
        } 
    }

    componentDidMount() {
        this.retrieveData()
        .then(res => this.setState({data: res}))
        .then(() => this.setState({loaded: true}))
    }

    render() {
        const { data, loaded } = this.state;

        if(loaded === true) {
            return (
                <section>
                    <div className='section-header'>
                        <h2>NEWS AND UPDATES</h2>
                    </div>
                    <NewsConcerts pastConcerts={data.previousConcertsData} upcomingConcerts={data.upcomingConcertsData} />
                    <NewsNews data={data.newsData}/>
                    
                </section>
            )
        }else {
            return (
                <ReactLoading type={"bars"} color={"#632828"} width={230} className='loading'/>
            )
        }
    }
}
export default News;
