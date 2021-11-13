import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = (props) => {  
    
    const Logout = (props) => {

        const { history } = props;

        useEffect(() => {
            axiosWithAuth()
                .post('http://localhost:3000/api/logout')
                .then(r => {
                    console.log('')
                  localStorage.removeItem('token');
                  history.push('/login');
                }).catch((err) => console.log(err.message));

        }, [history]);

        return(<div></div>);
    }
}

export default Logout;

// Task List
// 1. On mount, execute an http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page