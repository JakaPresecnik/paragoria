import React, { useState, useEffect } from 'react';
import ReactLoading from "react-loading";
import { FaMinusCircle, FaSave, FaPlusCircle } from 'react-icons/fa';
import { retrieveMerch, deleteMerch, addMerch, updateMerch } from '../utils/api';

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
                obj[e.target.name] = e.target.value
                return obj
            }
        })
        setData([...newData])
    }

    const handleDeleteMerch = (i) => {
        setLoading(true);
        deleteMerch({key: i})
        .then(res => setData(res))
        .then(() => setLoading(false))
    }

    const handleAddMerch = (item) => {
        setLoading(true);
        addMerch(item)
        .then(res => setData(res))
        .then(() => setLoading(false))
    }
    const handleUpdateMerch = (item) => {
        setLoading(true);
        updateMerch(item)
        .then(() => setLoading(false))
    }

    const addRow = () => {
        let key = 52239;
        const newData = {
            type: 'shirt',
            item: '',
            cost: 0,
            l_stock: 0,
            m_stock: 0,
            picture: '',
            picture_back: '',
            s_stock: 0,
            xl_stock: 0,
            xs_stock: 0,
            xxl_stock: 0,
        }
        key++;
        setData([...data, newData]);
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
                        {data.map((item, i) => {
                            if (item.key) {
                                return (
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
                                <td><FaMinusCircle title='Briši' className='increment-icon' onClick={() => handleDeleteMerch(item.key)} /></td>
                                <td><FaSave title='Shrani spremembe' className='increment-icon' onClick={() => handleUpdateMerch(item)} /></td>
                            </tr>   
                                    )
                                }else {
                                    return (
                                        <tr key='newPost'>
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
                                    <td><FaPlusCircle title='Shrani nov izdelek' className='increment-icon' onClick={() => handleAddMerch(item)} /></td>
                                </tr> 
                                    )
                                }
                            }   
                        )}
                    </tbody>
                </table>
                <FaPlusCircle title='Dodaj' onClick={() => addRow()} className='increment-icon' />
                
            </div>
        )
    } 
}

export default EditMerch;
