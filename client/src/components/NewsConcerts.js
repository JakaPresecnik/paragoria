import React from 'react';

function NewsConcerts (props) {
    const { pastConcerts, upcomingConcerts } = props;

    Date.prototype.addDays = function (days) {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      }

    const date = new Date();

    return (
        <div className='concerts'>
            
            <h4>Upcoming shows</h4>
            {upcomingConcerts.map((concert) => {
                let concertDate = new Date(concert.datetime);
                let concertDay = concertDate.getDate();
                let concertMonth = concertDate.getMonth();
                let concertYear = concertDate.getFullYear();

                if (concertDate > date && concertDate < date.addDays(3)) {
                    return (
                        <div key={concert.key} className='concert featured'>
                            <p className='show-date'>{`${concertDay}. ${concertMonth}. ${concertYear}`}</p>
                            <p className='show-loc'>{concert.location}</p>
                            <p className='bands'>{concert.description}</p>
                        </div>
                    )
                }else {
                    return (
                        <div key={concert.key} className='concert'>
                            <p className='show-date'>{`${concertDay}. ${concertMonth}. ${concertYear}`}</p>
                            <p className='show-loc'>{concert.location}</p>
                            <p className='bands'>{concert.description}</p>
                        </div>
                    )
                }
            })}

            <h4>Past Shows</h4>
            {pastConcerts.map((concert) => {
                let concertDate = new Date(concert.datetime);
                let concertDay = concertDate.getDate();
                let concertMonth = concertDate.getMonth();
                let concertYear = concertDate.getFullYear();
                return (
                    <div key={concert.key} className='past-concert'>
                        <p className='show-date'>{`${concertDay}. ${concertMonth}. ${concertYear}`}</p>
                        <p className='show-loc'>{concert.location}</p>
                        <p className='bands'>{concert.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default NewsConcerts;