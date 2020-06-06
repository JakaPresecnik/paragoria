import React from 'react';

function Booking () {
    return (
        <section className='booking'>
            <div className='section-header'>
                <h2>BOOKING AND LABEL CONTACT</h2>
                <p className='sub-text'> Just send us a message here and we will respond back to you as soon as possible!</p>
            </div>
            
            <form method="post" action="sendemail.php">
                <input type='text' name='first_name' placeholder='Name' />
                <input type='text' name='last_name' placeholder='Surname' />
                <input type='text' name='email' placeholder='Email' />
                <textarea name='message' placeholder='Describe your wishes / interests...' />
                <button>SEND</button>
                <button>CLEAR</button>
            </form>
            <div className='section-footer'>
                <h4>PARAGORIA BOOKING AND LABEL CONTACT</h4>
                <p>+386 (0) 41 97 71 14</p>
                <p>paragoria@gmail.com</p>
                <p>www.paragoriaband.com</p>
                <p>www.on-parole.com</p>
            </div>
        </section>
    )
}
export default Booking;