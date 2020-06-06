import React from 'react';

import logo from '../img/logo.png';
import band from '../img/pic99.jpg';
import decomposition from '../img/decomposition_of_mind.png';
import ashes from '../img/from_the_ashes.jpg';

function Biography () {
    return (
        <section className='biography'>
            <div className='section-header'>
                <h2>BIOGRAPHY - DISCOGRAPHY - LINE UP</h2>
            </div>
            <div className='bio-disc-lu' >
                <div className='bio'>
                    <p>Paragoria is a band that continued the work of a band named The Scourge. Their 
                        music is defined as death / thrash / groove metal. The first big festival 
                        apppearance of this band was at Paranoid Open Air festival in 2009, 
                        right after releasing their first demo cd From the Ashes. In 2011 the band 
                        renamed and changed their drummer and genre of music, applying some new 
                        progressive metal elements.</p>
                    <figure>
                        <img src={band} alt='Paragoria the band'/>
                        <figcaption>From left to the right: Primož Brezovnik, Jernej Štorgelj, Matjaž Parfant, Matija Kadliček</figcaption>
                    </figure>
                    
                    <p>The new Paragoria introduced new songs and line-up in July 2011 at Metalcamp 
                        festival in Tolmin. A month later they performed at Metal Mania Open Air 
                        festival in Komen. In 2012 the band worked on the layout of their own studio, 
                        where they self-recorded their new album. First album from Paragoria is 
                        entitled Decomposition of mind, it was released on October 4th 2013.</p><hr/>
                    <p>Paragoria went into slightly different musical direction, but kept the 
                        groove they had in their previous formation. It is easy to flow along with 
                        their death metal groove, combined with thrashy or even crossover parts 
                        and spiced up by sludge and progressive elements. According to Paragoria, 
                        it looks that it is still possible to make a fresh sounding death metal 
                        album.</p>
                </div>
                <div className='lineup-disc'>
                    <div className='lineup'>
                        <p className='header'><img src={logo} alt='paragoria logo' className='logo' /> ARE:</p>
                        <p className='headpara'>Matjaž Parfant</p>
                        <p className='subpara'>Guitars / Backvocals</p>
                        <p className='headpara'>Jernej Štorgelj</p>
                        <p className='subpara'>Bass / Vocals</p>
                        <p className='headpara'>Primož Brezovnik</p>
                        <p className='subpara'>Guitars</p>
                        <p className='headpara'>Matija Kadliček</p>
                        <p className='subpara'>Drums / Percussion</p>
                    </div>
                    <div className='discography'>
                        <p className='header'><img src={logo} alt='paragoria logo' className='logo' /> DISC:</p>
                        <figure>
                            <img src={decomposition} alt='Decomposition of mind album cover' />
                            <figcaption className='headpara'>Decomposition of Mind <span className='subpara'>Released: 2013</span></figcaption>
                        </figure>
                        <figure>
                            <img src={ashes} alt='From the ashes album cover' />
                            <figcaption className='headpara'>From the Ashes <span className='subpara'>Released: 2009</span></figcaption>
                        </figure>
                    </div>
                </div>  
            </div>
        </section>
    )
}
export default Biography;