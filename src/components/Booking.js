import React, { useState } from 'react';

// mail nastavljen na emailjs.com

function Booking () {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // emailjs.com
  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
      alert('Message sent!')
    	console.log('Email successfully sent!')
  	})
    .catch(err => {
      console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
      alert('Something went wrong.')
    })
  }

  const clearAll = (e) => {
    e.preventDefault()
    setName('');
    setSurname('');
    setEmail('');
    setMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const templateId = 'template_VOxnYylt';

    sendFeedback(templateId, {
      message_html: message,
      name: name,
      surname: surname,
      email: email,
    })
    clearAll(e)
  }

    return (
        <section className='booking'>
            <div className='section-header'>
                <h2>BOOKING AND LABEL CONTACT</h2>
                <p className='sub-text'> Just send us a message here and we will respond back to you as soon as possible!</p>
            </div>
            <form>
                <input onChange={(e) => {setName(e.target.value)}}
                  type='text'
                  value={name}
                  name='name'
                  placeholder='Name'
                  required />
                <input onChange={(e) => {setSurname(e.target.value)}}
                  type='text'
                  value={surname}
                  name='surname'
                  placeholder='Surname'
                  required />
                <input onChange={(e) => {setEmail(e.target.value)}}
                  type='text'
                  value={email}
                  name='email'
                  placeholder='Email'
                  required />
                <textarea onChange={(e) => {setMessage(e.target.value)}}
                  value={message}
                  name='message'
                  placeholder='Describe your wishes / interests...'
                  required />
                <button onClick={e => handleSubmit(e)} disabled={!name || !surname || !email || !message}>SEND</button>
                <button onClick={e => clearAll(e)} disabled={!name && !surname && !email && !message}>CLEAR</button>
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
