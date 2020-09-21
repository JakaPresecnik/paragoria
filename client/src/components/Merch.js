import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import Shirt from './Shirt';
import { retrieveMerch } from '../utils/api';
import '../styles/merch.css';

class Merch extends Component {
    state = {
        data: null,
        loaded: false
    }

    componentDidMount() {
        retrieveMerch()
        .then(res => this.setState({data: res}))
        .then(() => this.setState({loaded: true}))
    }
    
    render() {
        const { data, loaded } = this.state;
        
        if (loaded === true) {
            return (
                <section>
                    <div className='section-header'>
                        <h2>MERCH</h2>
                        <p>Shipping cost is not included.</p>
                    </div>
                    <div className='shirts'>
                        {data.map(item => (
                            <Shirt key={item.key} shirt={item}/>
                        ))}
                    </div>
                </section>
            )
        }else {
            return (
                <ReactLoading type={"bars"} color={"#632828"} width={230} className='loading'/>
            )
        }
    }
}

export default Merch;