import React from 'react';

const Login = () => {
    return (
        <>
            <p>login</p>
            <form className='form'>
                <input type="text" placeholder='email'/>
                <input type="password" placeholder='password'/>

                <button type='submit'>Log</button>
            </form>
        </>

    );
};

export default Login;