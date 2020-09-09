import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

class ShoppingCart extends Component {

    state = {
        cart: false,
        total: 0
    }

    handleShowItems = () => {
        this.setState((ps) => ({cart: !ps.cart}))
    }

    render() {
        const {numOfItems, items} = this.props;
        console.log(this.props)
        return (
            <div className='shopping-cart'>
                <FaShoppingCart onClick={this.handleShowItems} className='shopping-cart-icon'/>
                <span className='item-counter'>{numOfItems}</span>
                {this.state.cart && <div className='cart-items'>
                    {Object.keys(items).map((item) => {
                        return(
                        <div key={items[item].id} className='grid-items'>
                            <img src={items[item].picture} />
                            <p className='item-name'>{items[item].item}</p>
                            <p className='item-size'><span>Size: {items[item].size}</span></p>
                            <p className='item-amount'><span>Amount: <strong>{items[item].amount}</strong></span><span>{items[item].cost * items[item].amount} €</span></p>
                        </div>
                    )})}
                    <p>TOTAL: {this.state.total} €</p>
                </div>}
            </div>
            
        )
    } 
}

const mapStateToProps = ({shoppingCart}) => {
    let numOfItems = 0;
    Object.keys(shoppingCart).map((itemId) => {
        numOfItems += shoppingCart[itemId].amount;
    })
    return {
        items: shoppingCart,
        numOfItems: numOfItems
    }
}

export default connect(mapStateToProps)(ShoppingCart);