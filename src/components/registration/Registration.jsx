import React, {useState} from 'react';

import './css/reg.css'
import {registration} from "../../actions/user";

const Registration = () => {
    let [email, setEmail] = useState('')
    let [pass, setPass] = useState('')
    return (
        <form className='form' onSubmit={(e) => {
            e.preventDefault()
            registration(email,pass)
        } }>
            <input
                onChange={(e) => setEmail(email = e.target.value)}
                type="text" placeholder='email'
                value={email}
            />
            <input
                value={pass}
                onChange={(e) => setPass(pass = e.target.value)}
                type="password" placeholder='password'/>
            <button type='submit'>Reg</button>
        </form>
    );
};

export default Registration;