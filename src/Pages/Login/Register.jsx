import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

export default function Register({ formField, setFormField }) {
    const navigate = useNavigate()


    function handleInput(e) {
        const { target } = e;
        setFormField({
            ...formField,
            [target.name]: target.value
        })
    }

    async function fetchPost(username, password) {
        return axios.post('/Login', {
            id: nanoid(),
            username,
            password,
        })
    }

    function handleLogin(e) {
        navigate('/my-acount')
        window.location.reload()
        fetchPost(formField.username, formField.password).then(res => res.data)
        localStorage.setItem('user', formField.username);
        localStorage.setItem('pass', formField.password)



    }


    return (
        <div className='col-md-6 col-12 ps-md-5 ps-3 mb-5'>
            <h1 className='fw-bolder'>Register</h1>
            <br />
            <form className="po-rel mb-1" role="search" onSubmit={handleLogin}>
                <div>
                    <label style={{ fontWeight: 'bolder', fontSize: '18px' }} htmlFor="userName">Email address <small className='text-danger'>*</small> </label>
                    <input onChange={handleInput} value={formField.username} required autoComplete='off' id='username' name='username' className="form-control border-0 pe-5 p-3 form-bg mt-2"
                        type="email" placeholder="Enter your email" aria-label="Search" />
                </div>
                <br />
                <div>
                    <label style={{ fontWeight: 'bolder', fontSize: '18px' }} htmlFor="password">Password <small className='text-danger'>*</small> </label>
                    <input onChange={handleInput} value={formField.password} required autoComplete='off' id='password' name='password' className="form-control border-0 pe-5 p-3 form-bg mt-2"
                        type="text" placeholder="Enter your password" aria-label="Search" />
                </div>
                <br />
                <div>
                    <button className='btn bg-dark p-2 px-5 text-light border-0'>Register</button>
                </div>
            </form>
        </div>
    )
}
