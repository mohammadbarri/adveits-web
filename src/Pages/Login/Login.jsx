import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer'
import Register from './Register'
import { Link } from 'react-router-dom'

export default function Login() {
    const [formField, setFormField] = useState({
        username: '',
        password: ''
    })
    function handleLogOut() {
        localStorage.removeItem('user');
        localStorage.removeItem('pass')
        localStorage.removeItem('cardId')
        localStorage.clear()
        window.location.reload()

    }
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Header acount={'color-spe'} />
            <br /><br /><br />
            {localStorage.getItem('user') ?
                <>
                    <div className='row '>
                        <div class=" col alert alert-success text-center w-50 text-dark " role="alert">
                            Your are singed up {localStorage.getItem('user')}
                            <div className='center mt-3'>
                                <button onClick={handleLogOut} className='btn bg-dark p-2 px-5 text-light border-0'>Log out</button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br /><br /><br /><br />
                </>
                :
                <section id='sec-body' className='mx-sm-5 mx-3 my-5'>
                    <div className="dir-menu">
                        <h1 className="display-4 fw-bolder mb-4">My Acount</h1>
                        <Link className="me-1" to="/">Home</Link> /
                        <Link className="ms-1 text-dark" to="/my-acount">My Acount</Link>
                    </div>
                    <br /><br />
                    <div className='row mt-5'>
                        <Register formField={formField} setFormField={setFormField} />
                    </div>
                </section>}

            <Footer />
        </>
    )
}
