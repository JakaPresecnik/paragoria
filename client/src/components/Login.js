import React, { useState } from 'react';
import auth from '../utils/auth';

const Login = (props) => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value});
    }

    const { email, password } = inputs;

    return (
        <section>
            <div className='section-header'>
                <h2>LOGIN</h2>
            </div>
            <div className='adding'>
                <form style={{display: 'inline-block'}}>
                    <label htmlFor='email' className='fullW'>Email:</label>
                    <input 
                        style={{width: '90%'}} 
                        onChange={e => onChange(e)} 
                        type='email' 
                        name='email' 
                        placeholder='Email'
                        value={email}
                    />
                    <label htmlFor='password' className='fullW'>Geslo:</label>
                    <input 
                        style={{width: '90%'}} 
                        onChange={e => onChange(e)} 
                        type='password' 
                        name='password' 
                        placeholder='Geslo'
                        value={password} 
                    />
                    <button 
                        onClick={(e) => {
                            e.preventDefault()
                            auth.login(inputs, () => {
                                props.history.push('/edit');
                            })
                        }}
                        className='preview-btn' 
                        style={{marginTop: '2em'}}
                    >LOGIN</button>
                    <button 
                        onClick={(e) => {
                            e.preventDefault()
                            auth.register(inputs, () => {
                                props.history.push('/edit');
                            })
                        }}
                        className='preview-btn' 
                        style={{marginTop: '2em'}}
                    >REGISTER</button>
                </form>
            </div>
        </section>
    )
}

export default Login;