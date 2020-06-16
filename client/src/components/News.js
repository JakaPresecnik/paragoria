import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class News extends Component {
    state = {
        data: [{
            type: 'video',
            key: '1',
            date: '25/12/2019',
            linkUrl: 'https://www.youtube.com/watch?v=PsLf10FESl4',
            description: '6 years after Decomposition of mind we are back in studio recording our 2nd album. Album will be out in the middle of 2020.',
          },
          {
            type: 'flyer',
            key: '2',
            date: '22/2/2019',
            linkUrl: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/51814874_783791751995120_2480949100749520896_o.jpg?_nc_cat=109&_nc_sid=b386c4&_nc_ohc=fTBtA4m2njgAX8a2gv6&_nc_ht=scontent-frt3-2.xx&oh=6aee565531374730de5020512d4f3c6f&oe=5F0551DC',
            description: 'Camel Metal Show !! Gonoba - 15. obletnica in zadnji koncert - spet! Skupaj z gosti Paragoria in Licence to Hate !!',
          },]
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
    }

    render() {
        const { data } = this.state;

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
    }
}
export default News;
