import React from 'react';
import ReactPlayer from 'react-player';

function News () {
    return (
        <section>
            <div className='section-header'>
                <h2>NEWS AND UPDATES</h2>
            </div>

            {/* VIDEO STYLE NEWS DIV */}
            <div className='news'>
                <p className='date'>25. DECEMBER 2019</p>
                <p>6 years after Decomposition of mind we are back in studio recording our 2nd album. Album will be out in the middle of 2020. </p>
                <div className='news-video'>
                  <ReactPlayer className='news-video-box' url='https://www.youtube.com/watch?v=PsLf10FESl4' />
                </div>
            </div>

            {/* CONCERT ANNOUCEMENT STYLE NEWS DIV */}
            <div className='news' id='gonoba30302019'>
                <p className='date'>22. FEBRUARY 2019</p>
                <a href='https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/51814874_783791751995120_2480949100749520896_o.jpg?_nc_cat=109&_nc_sid=b386c4&_nc_ohc=fTBtA4m2njgAX8a2gv6&_nc_ht=scontent-frt3-2.xx&oh=6aee565531374730de5020512d4f3c6f&oe=5F0551DC'>
                  <img className='news-image' src='https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/51814874_783791751995120_2480949100749520896_o.jpg?_nc_cat=109&_nc_sid=b386c4&_nc_ohc=fTBtA4m2njgAX8a2gv6&_nc_ht=scontent-frt3-2.xx&oh=6aee565531374730de5020512d4f3c6f&oe=5F0551DC' alt='News banner picture' />
                </a>
                <p>Camel Metal Show !! Gonoba - 15. obletnica in zadnji koncert - spet! Skupaj z gosti Paragoria in Licence to Hate !!</p>
            </div>

        </section>
    )
}
export default News;
