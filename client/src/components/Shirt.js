import React from 'react';
import { GiReturnArrow } from 'react-icons/gi';

class Shirt extends React.Component {
    state = {
        show: false
    }

    handleClick = () => {
        this.setState((prevState) => ({
            show: !prevState.show
        }))
    }

    render() {
        const { shirt } = this.props;
        const { show } = this.state;
    
        return (
            <div className='shirt-div'>
                <div className={show ? 'rotate shirt' : 'shirt'}>
                    <img className='front' src={shirt.picture} alt={shirt.item} />
                    <img className='back'  src={shirt.picture_back} alt={shirt.item} />
                </div>
                <GiReturnArrow className='show' onClick={this.handleClick}/>
                <div className='shirt-text'>
                    <p>{shirt.item}</p>
                    <p>{shirt.cost} €</p>
                </div>
            </div>
        )
    }
    
}

export default Shirt;