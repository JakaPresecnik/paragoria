import React from 'react';
import ReactPlayer from 'react-player'

function Preview (props) {

    if(props.showPreview === true) {
        if(props.type === 'video') {
            return (
                <div className='preview'>
                    <button onClick={e => props.handleShowPreview(e)} className='close'>X</button>
                    <div className='news'>
                        <p className='date'>{props.date}</p>
                        <p>{props.description} </p>
                        <div className='news-video'>
                            <ReactPlayer className='news-video-box' url={props.linkUrl} />
                        </div>
                    </div>
                    <button onClick={e => props.handleShowPreview(e)} className='preview-btn'>ZAPRI</button>
                </div>
            )
        }else if(props.type === 'flyer') {
            return (
                <div className='preview'>
                    <button onClick={e => props.handleShowPreview(e)} className='close'>X</button>
                    <div className='news'>
                        <p className='date'>{props.date}</p>
                        <a href={props.linkUrl}>
                        <img className='news-image' src={props.linkUrl} alt='News banner' />
                        </a>
                        <p>{props.description}</p>
                    </div> 
                    <button onClick={e => props.handleShowPreview(e)} className='preview-btn'>ZAPRI</button>
                </div>
            )
        }else if(props.type === 'plain') {
            return (
                <div className='preview'>
                    <button onClick={e => props.handleShowPreview(e)} className='close'>X</button>
                    <p className='date'>{props.date}</p>
                    <h1>{props.linkUrl}</h1>
                    <p>{props.description}</p>
                    <button onClick={e => props.handleShowPreview(e)} className='preview-btn'>ZAPRI</button>
                </div>
            )
        }else {
            return (
                <div className='preview'>
                    <button onClick={e => props.handleShowPreview(e)} className='close'>X</button>
                    <h1>Prosim dodaj tip.....</h1>
                    <button onClick={e => props.handleShowPreview(e)} className='preview-btn'>ZAPRI</button>
                </div>
            )
        }    
    }else {
        return null
    }
}

export default Preview;