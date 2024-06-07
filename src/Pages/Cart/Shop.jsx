import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthDispatch, useAuthState } from '../../Context/auth-context'
import axios from 'axios'
import Footer from '../../Components/Footer'
import ShopCard from './ShopCard'


export default function Shop() {
    const id = localStorage.getItem('cardId')
    const [data, setData] = useState(null)
    const dispatch = useAuthDispatch()
    const navigate = useNavigate()

    function handleBuy(e) {
        navigate('/')
        window.location.reload()
        localStorage.removeItem('cardId')
        alert('You baught this Item !')
        dispatch({
            type: 'removeCard'
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        if (id > 0) {
            axios.get(`https://my-json-server.typicode.com/mohammadbarri/adveits-db/card/${id}`).then(res => setData(res.data))
        }

    }, [])

    const card1 = data ? <>
        <ShopCard id={id} smtext={data.smtext} largeText={data.largeText} text={data.text} img={data.img} />
        <Link onClick={handleBuy} className="btn text-light border-0 bg-dark px-3 p-3" to="/template">Buy it </Link>
    </> : null





    return (
        <>
            <Header cart={'color-spe'} />
            <br />
            <section id='sec-body' className='mx-sm-5 mx-3 my-5'>
                <div className="dir-menu">
                    <h1 className="display-4 fw-bolder mb-4">Cart</h1>
                    <Link className="me-1" to="/">Home</Link> /
                    <Link className="ms-1 text-dark" to="/cart">Cart</Link>
                </div>

                <br /><br /><br />
                {id ?
                    card1

                    : <>
                        <div className="alert alert-success text-dark" role="alert">
                            Your cart is currently empty.
                        </div>
                        <br />
                        <Link className="btn text-light border-0 bg-dark px-3 p-3" to="/template">Return to Shop</Link></>
                }
            </section>
            <Footer />
        </>
    )
}
