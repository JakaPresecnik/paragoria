import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FaChevronUp } from "react-icons/fa";
import { emptyCart } from '../actions/merchStoreAction';

import { sendOrder } from '../utils/api';

const ShippingForm = (props) => {
    const [inputs, setInputs] = useState({
        name: '',
        surname: '',
        email: '',
        street: '',
        post: '',
        city: '',
        country: ''
    });

    const onChange = e => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        const details = {
            itemIds: props.itemIds,
            shoppingCart: props.shoppingCart,
            customer: inputs
        }
        let send = window.confirm('Send the order?');

        if (send) {
            sendOrder(details)
            .then(() => {
                alert('Order Sent!');
                setInputs({
                    name: '',
                    surname: '',
                    email: '',
                    street: '',
                    post: '',
                    city: '',
                    country: ''
                });
                props.dispatch(emptyCart());
            })
            

        }
    }

    return (
        <form onSubmit={e => handleSubmit(e)} style={{display: 'block', marginBottom: '0px'}}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' value={inputs.name} onChange={e => onChange(e)} required/><br/>
            <label htmlFor='surname'>Surname:</label>
            <input type='text' name='surname' value={inputs.surname} onChange={e => onChange(e)} required/><br/>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' value={inputs.email} onChange={e => onChange(e)} required/><br/>
            <label htmlFor='street'>Street:</label>
            <input type='text' name='street' value={inputs.street} onChange={e => onChange(e)} required/><br/>
            <label htmlFor='post'>Postal Number:</label>
            <input type='text' name='post' value={inputs.post} onChange={e => onChange(e)} required/><br/>
            <label htmlFor='city'>City:</label>
            <input type='text' name='city' value={inputs.city} onChange={e => onChange(e)} required/><br/>
            <label htmlFor='country'>Country:</label>
            <input type='text' name='country' value={inputs.country} onChange={e => onChange(e)} required/><br/>
            <button>ORDER</button>
            <FaChevronUp className='concert-icon-up' onClick={props.hide} />
        </form>
    )
}

const mapStateToProps = ({shoppingCart}) => {
    return {
        itemIds: Object.keys(shoppingCart),
        shoppingCart
    }  
}

export default connect(mapStateToProps)(ShippingForm);