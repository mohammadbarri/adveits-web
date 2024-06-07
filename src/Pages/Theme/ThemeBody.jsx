import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer'
import axios from 'axios'
import CardProduct from '../../Components/CardProduct'
import Spinner from '../../Components/Spinner'
import SideBar from '../../Components/SideBar'
import Content from '../../Components/Content'
import CardProduct2 from '../../Components/Cardproduct2'
import { Link } from 'react-router-dom'

export default function ThemeBody() {
    const [CardProduct1, setCardProduct] = useState(null)

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/mohammadbarri/adveits-db/card").then(card => setCardProduct(card.data));
    }, [])

    const card1 = CardProduct1 ? CardProduct1.map(card =>
        <CardProduct2 id={card.id} key={card.id} text={card.text} smtext={card.smtext} img={card.img} />


    ) : <Spinner />
    return (
        <>
            {CardProduct1 ? <>
                <Header theme={'color-spe'} />
                <br /><br /><br /><br />
                <section id="section-body container-fluid" className="mx-sm-5 mx-3">
                    <div className="dir-menu">
                        <h1 className="display-4 fw-bolder mb-4">Themes</h1>
                        <Link className="me-1" to="/">Home</Link> /
                        <Link className="ms-1 text-dark" to="/theme">Themes</Link>
                    </div>
                    <br /><br /><br /><br />
                    <section className="row">
                        <SideBar theme={'color-spe'} />
                        <Content>{card1}</Content>
                    </section>
                </section>
                <br /><br /><br /><br /><br />
                <Footer />
            </> : <Spinner />}
        </>
    )
}
