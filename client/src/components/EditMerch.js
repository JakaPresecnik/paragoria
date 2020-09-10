import React, { useState, useEffect } from 'react';
import ReactLoading from "react-loading";
import { FaMinusCircle } from 'react-icons/fa';
import { retrieveMerch } from '../utils/api';

const EditMerch = (props) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        retrieveMerch()
        .then(res => setData(res))
        .then(() => setLoading(false))
    }, [])

    const onChange = (e, i) => {
        const newData = data.map((obj) => {
            if (obj.key !== i) {
                return obj
            }else {
                obj[e.target.name] = [e.target.value]
                return obj
            }
        })
        setData([...newData])
    }

    if(loading) {
        return <ReactLoading />
    } else {
        return (
            <div className='adding'>
                <h3>MERCH:</h3>
                <table style={{color: 'white'}}>
                    <thead>
                        <tr>
                            <th>IME</th>
                            <th>SPREDAJ</th>
                            <th>ZADAJ</th>
                            <th>€</th>
                            <th>XS</th>
                            <th>S</th>
                            <th>M</th>
                            <th>L</th>
                            <th>XL</th>
                            <th>XXL</th>
                            <th></th>
                        </tr>   
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={item.key}>
                                <td><input 
                                    className='wide' 
                                    name='item' 
                                    onChange={e => onChange(e, item.key)}
                                    value={data[i].item}
                                /></td>
                                <td><input 
                                    className='wider' 
                                    name='picture'
                                    onChange={e => onChange(e, item.key)}
                                    value={data[i].picture}
                                /></td>
                                <td><input 
                                    className='wider' 
                                    name='picture_back'
                                    onChange={e => onChange(e, item.key)}
                                    value={data[i].picture_back} 
                                /></td>
                                <td><input 
                                    className='narrower' 
                                    name='cost'
                                    onChange={e => onChange(e, item.key)}
                                    value={data[i].cost} 
                                /></td>
                                <td><input 
                                    className='narrower' 
                                    name='xs_stock'
                                    onChange={e => onChange(e, item.key)}
                                    value={data[i].xs_stock}
                                /></td>
                                <td><input 
                                    className='narrower'
                                    name='s_stock' 
                                    onChange={e => onChange(e, item.key)}
                                    value={data[i].s_stock}
                                /></td>
                                <td><input 
                                    className='narrower' 
                                    name='m_stock'
                                    onChange={e => onChange(e, item.key)}
                                    value={data[i].m_stock}
                                /></td>
                                <td><input 
                                    className='narrower' 
                                    name='l_stock'
                                    onChange={e => onChange(e, item.key)}
                                    value={data[i].l_stock}
                                /></td>
                                <td><input 
                                    className='narrower' 
                                    name='xl_stock'
                                    onChange={e => onChange(e, item.key)}
                                    value={data[i].xl_stock}
                                /></td>
                                <td><input 
                                    className='narrower' 
                                    name='xxl_stock'
                                    onChange={e => onChange(e, item.key)}
                                    value={data[i].xxl_stock}
                                /></td>
                                <td><FaMinusCircle className='increment-icon' /></td>
                            </tr>   
                        ))}
                    </tbody>
                </table>
                <button className='order'>SHRANI</button>
                
            </div>
        )
    } 
}

export default EditMerch;
