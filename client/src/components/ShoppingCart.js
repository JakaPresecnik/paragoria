import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaShoppingCart, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { addItemAmount, removeItemAmount, removeItem } from '../actions/merchStoreAction';
import ShippingForm from './ShippingForm';

class ShoppingCart extends Component {

    state = {
        cart: false,
        total: 0,
        order: false
    }

    handleShowItems = () => {
        this.setState((ps) => ({cart: !ps.cart}))
    }

    handleIncrement = (picture, item, cost, size, id) => {
        this.props.dispatch(addItemAmount({ picture, item, cost, size, id }));
    }

    handleDecrement = (picture, item, cost, size, id, amount) => {
        if (amount > 1) {
            this.props.dispatch(removeItemAmount({ picture, item, cost, size, id }));
        }else {
            this.props.dispatch(removeItem(id));
        }
    }

    handleShowOrder = () => {
        this.setState((ps) => ({order: !ps.order}))
    }

    render() {
        const {numOfItems, items} = this.props;
        let total = 0;
        
        return (
            <div className='shopping-cart'>
                <FaShoppingCart onClick={this.handleShowItems} className='shopping-cart-icon'/>
                <span className='item-counter'>{numOfItems}</span>
                {this.state.cart && <div className='cart-items'>
                    {Object.keys(items).map((itm) => {
                        const { id, picture, item, amount, size, cost} = this.props.items[itm];
                        total += amount * cost;
                        return(
                        <div key={id} className='grid-items'>
                            <img src={picture} alt={item}/>
                            <p className='item-name'>{item}</p>
                            <p className='item-size'><span>Size: {size}</span></p>
                            <p className='item-amount'>
                                <span>Amount: <strong>{amount}</strong>
                                    <FaMinusCircle onClick={e => this.handleDecrement(picture, item, cost, size, id, amount)} className='increment-icon' />
                                    <FaPlusCircle onClick={e => this.handleIncrement(picture, item, cost, size, id)} className='increment-icon' /></span>
                                <span>{cost * amount} €</span></p>
                        </div>
                    )})}
                    {!this.state.order && <button className= 'order' onClick={this.handleShowOrder}>ORDER</button>}
                    <p className='total'>TOTAL: {total} € + shipping</p>
                    {this.state.order && <ShippingForm hide={this.handleShowOrder} />}
                </div>}
            </div>
            
        )
    } 
}

const mapStateToProps = ({shoppingCart}) => {
    let numOfItems = 0;
    Object.keys(shoppingCart).map((itemId) => {
        numOfItems += shoppingCart[itemId].amount;
        return numOfItems;
    })
    return {
        items: shoppingCart,
        numOfItems: numOfItems
    }
}

export default connect(mapStateToProps)(ShoppingCart);