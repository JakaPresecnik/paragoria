import React from 'react';
import { connect } from 'react-redux';
import { GiReturnArrow } from 'react-icons/gi';
import { FaPlus } from 'react-icons/fa';

import { addItem, addItemAmount } from '../actions/merchStoreAction';

class Shirt extends React.Component {
    state = {
        show: false,
        hide: true,
        size: '',
        amount: 1,
    }

    handleClick = () => {
        this.setState((prevState) => ({
            show: !prevState.show
        }))
    }

    handleClickPlus = () => {
        this.setState((prevState) => ({
            hide: !prevState.hide
        }))
    }

    handleAddItem = (e, shirt, size, amount) => {
        e.preventDefault()
        const { picture, item, cost, key } = shirt;
        const id = `${key}${size}`;

        if (!this.props.items.includes(id)) {
            this.props.dispatch(addItem({ picture, item, cost, size, amount, id}));
        } else {
            this.props.dispatch(addItemAmount({ picture, item, cost, size, id}));
        }
    }

    handleChange = (e) => {
        this.setState({size: e.target.value});
    }

    render() {
        const { shirt } = this.props;
        const { show, hide, size, amount } = this.state;

        return (
            <div className='shirt-div'>
                <div className={show ? 'rotate shirt' : 'shirt'}>
                    <img className='front' src={shirt.picture} alt={shirt.item} />
                    <img className='back'  src={shirt.picture_back} alt={shirt.item} />
                </div>
                <div className='shirt-footer'>
                    <GiReturnArrow className='show' style={{visibility: 'hidden'}}/>
                    <GiReturnArrow className='show' onClick={this.handleClick}/>
                    <FaPlus className='add-merch' onClick={this.handleClickPlus} />
                    <div className={hide ? 'hide' : 'merch-form'}>
                        <form>
                            <select onChange={e => this.handleChange(e)}>
                                <option hidden>Select size</option>
                                <option hidden={!shirt.xs_stock}>XS</option>
                                <option hidden={!shirt.s_stock}>S</option>
                                <option hidden={!shirt.m_stock}>M</option>
                                <option hidden={!shirt.l_stock}>L</option>
                                <option hidden={!shirt.xl_stock}>XL</option>
                                <option hidden={!shirt.xxl_stock}>XXL</option>
                                <option hidden={shirt.xs_stock || shirt.s_stock || shirt.m_stock || shirt.l_stock || shirt.xl_stock || shirt.xxl_stock} disabled>Sold out</option>
                            </select>
                            <button 
                                disabled={!size} 
                                onClick={e => this.handleAddItem(e, shirt, size, amount)}
                            >ADD</button>
                        </form>
                    </div>
                </div>
                
               <div className='shirt-text'>
                    <p>{shirt.item}</p>
                    <p>{shirt.cost} €</p>
                 </div> 
            </div>
        )
    }
}

const mapStateToProps = ({shoppingCart}) => {
    return {
        items: Object.keys(shoppingCart)
    }
}

export default connect(mapStateToProps)(Shirt);