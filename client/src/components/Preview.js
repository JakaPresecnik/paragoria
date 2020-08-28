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
                        <h3>{props.header}</h3>
                        <div className='news-video'>
                            <ReactPlayer className='news-video-box' url={props.content} />
                        </div>
                        <p>{props.description} </p>
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
                        <h3>{props.header}</h3>
                        <a href={props.content}>
                            <img className='news-image' src={props.content} alt='News banner' />
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
                    <h3>{props.header}</h3>
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