import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ReactLoading from "react-loading";

class News extends Component {
    state = {
        data: null,
        loaded: false,
    }

    retrieveNews = async () => {
        const res = await fetch('/allNews');
        try {
            const data = await res.json();
            return data;
        } catch(error) {
            console.log('Error: ', error);
        } 
    }

    componentDidMount() {
        this.retrieveNews()
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
    
                    {data.map((news) => {
                        if(news.type === 'video') {
                            return (
                                <div key={news.key} className='news' >
                                    <p className='date'>{news.date}</p>
                                    <p>{news.description}</p>
                                    <div className='news-video'>
                                    <ReactPlayer className='news-video-box' url={news.linkUrl} />
                                    </div>
                                </div>
                            )
                        }else if(news.type === 'flyer') {
                            return (
                                <div  key={news.key} className='news'>
                                    <p className='date'>{news.date}</p>
                                    <a href={news.linkUrl}>
                                    <img className='news-image' src={news.linkUrl} alt='News banner' />
                                    </a>
                                    <p>{news.description}</p>
                                </div>
                            )
                        }else {
                            return (
                                <div  key={news.key} className='news'>
                                    <p className='date'>{news.date}</p>
                                    <h3>{news.header}</h3>
                                    <p>{news.description}</p>
                                </div>
                            )
                        }
                    })}
                    
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
