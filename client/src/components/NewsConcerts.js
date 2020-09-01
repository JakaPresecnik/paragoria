import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function NewsConcerts (props) {
    const [toggleClass, setToggleClass] = useState(false);
    const { pastConcerts, upcomingConcerts } = props;

    Date.prototype.addDays = function (days) {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    function handleToggleClass (e) {
        e.preventDefault();
        setToggleClass(!toggleClass);
    }
    
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    const date = new Date();
    const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    return (
        <div className={toggleClass ? 'concerts' : 'concerts hide-concerts'}>
            <div><FaChevronDown onClick={(e) => handleToggleClass(e)} className={!toggleClass ? 'concert-icon show-concert-icon' : 'hide-concert-icon'} /></div>
            
            <h4>CONCERTS:</h4>
            {upcomingConcerts.length !== 0 ? upcomingConcerts.map((concert) => {
                let concertDate = new Date(concert.datetime);
                let concertDay = concertDate.getDate();
                let concertMonth = concertDate.getMonth();
                let concertYear = concertDate.getFullYear();
                let concertHour = addZero(concertDate.getHours());
                let concertMinutes = addZero(concertDate.getMinutes());

                if (concertDate > date && concertDate < date.addDays(3)) {
                    return (
                        <div key={concert.key} className='concert featured'>
                            <p className='show-date'>{`${concertDay}. ${month[concertMonth]} ${concertYear} at ${concertHour}:${concertMinutes}`}</p>
                            <p className='show-loc'>{concert.location}</p>
                            <p className='bands'>{concert.description}</p>
                        </div>
                    )
                }else {
                    return (
                        <div key={concert.key} className='concert'>
                            <p className='show-date'>{`${concertDay}. ${month[concertMonth]} ${concertYear} at ${concertHour}:${concertMinutes}`}</p>
                            <p className='show-loc'>{concert.location}</p>
                            <p className='bands'>{concert.description}</p>
                        </div>
                    )
                }
            }) : (
                <div className='concert'>
                    <p className='no-results'>No upcoming concerts</p>
                </div>
            )}

            <h4 className='past-shows'>Past Shows</h4>
            {pastConcerts.map((concert) => {
                let concertDate = new Date(concert.datetime);
                let concertDay = concertDate.getDate();
                let concertMonth = concertDate.getMonth();
                let concertYear = concertDate.getFullYear();
                return (
                    <div key={concert.key} className='past-concert'>
                        <p className='show-date'>{`${concertDay}. ${month[concertMonth]} ${concertYear}`}</p>
                        <p className='show-loc'>{concert.location}</p>
                        <p className='bands'>{concert.description}</p>
                    </div>
                )
            })}
            <div><FaChevronUp onClick={(e) => handleToggleClass(e)} className={toggleClass ? 'concert-icon-up show-concert-icon' : 'hide-concert-icon'} /></div>
        </div>
    )
}

export default NewsConcerts;