import React from 'react';
import ReactPlayer from 'react-player';

function NewsNews (props) {
    const { data } = props;

    return (
        <div>
            {data.map((news) => {
                if(news.type === 'video') {
                    return (
                        <div key={news.key} className='news' >
                            <p className='date'>{news.date}</p>
                            <h3>{news.header}</h3>
                            <div className='news-video'>
                                <ReactPlayer className='news-video-box' url={news.content} />
                            </div>
                            <p>{news.description}</p>
                        </div>
                    )
                }else if(news.type === 'flyer') {
                    return (
                        <div  key={news.key} className='news'>
                            <p className='date'>{news.date}</p>
                            <h3>{news.header}</h3>
                            <a href={news.content}>
                            <img className='news-image' src={news.content} alt='News banner' />
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
        </div>
    )
}

export default NewsNews;