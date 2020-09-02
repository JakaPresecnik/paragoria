import React, { Component } from 'react';
import auth from '../utils/auth';

class Login extends Component {
    render() {
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
                        onChange={e => this.handleHeaderChange(e)} 
                        type='text' 
                        id='email' 
                        placeholder='Email' 
                    />
                    <label htmlFor='password' className='fullW'>Geslo:</label>
                    <input 
                        style={{width: '90%'}} 
                        onChange={e => this.handleLinkUrlChange(e)} 
                        type='password' 
                        id='password' 
                        placeholder='Geslo' 
                    />
                    <button 
                        onClick={() => {
                            auth.login(() => {
                                this.props.history.push('/edit');
                            })
                        }} 
                        className='preview-btn' 
                        style={{marginTop: '2em'}}
                    >LOGIN</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Login;