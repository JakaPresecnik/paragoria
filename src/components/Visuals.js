import React, { useState, useCallback } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from "react-photo-gallery";
import ReactPlayer from 'react-player';

import images from '../utils/helper';

function Visuals () {
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);

    const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
    };

    const openLightboxTwo = useCallback((event, { photo, index }) => {
        setCurrentImage(index+images.filter((img) => img.type === 'shoot').length);
        setViewerIsOpen(true);
      }, []);

    return (
        <section>
            <div className='section-header'>
                <h2>VISUALS</h2>
            </div>
            <div className='img-belt'>
                <Gallery photos={images.filter((img) => img.type === 'shoot')} onClick={openLightbox} margin={5} />
            </div>
            <div className='video-belt'>
                <ReactPlayer url='https://www.youtube.com/watch?v=4mNbk7DvOuo' />
            </div>
            <div className='img-belt'>
                <Gallery photos={images.filter((img) => img.type === 'live')} onClick={openLightboxTwo} margin={5} />
            </div>
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={images.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
            
        </section>
    )
}

export default Visuals;