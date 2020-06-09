import React from 'react';
import ReactPlayer from 'react-player';

function News () {
    return (
        <section className='news'>
            <div className='section-header'>
                <h2>NEWS AND UPDATES</h2>
            </div>
            <div className='news'>
                <p className='date'>25. DECEMBER 2019</p>
                <p>6 years after Decomposition of mind we are back in studio recording our 2nd album. Album will be out in the middle of 2020. </p>
                <div className='video-belt'>
                <ReactPlayer url='https://www.youtube.com/watch?v=PsLf10FESl4' />
            </div>
            </div>
        </section>
    )
}
export default News;