import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <>
            <div className='error-height'>
                <h1 className='margin-auto'>opps ! page not found !</h1>
                <br />
                <a href='/' className='btn btn-primary '>Come back Home</a>
            </div>
        </>
    )
}
