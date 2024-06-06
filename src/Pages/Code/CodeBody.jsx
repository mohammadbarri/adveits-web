import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardProduct2 from '../../Components/Cardproduct2';
import Spinner from '../../Components/Spinner';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';
import SideBar from '../../Components/SideBar';
import Content from '../../Components/Content';

export default function CodeBody() {
    const [CardProduct1, setCardProduct] = useState(null)

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/mohammadbarri/adveits-db/card").then(card => setCardProduct(card.data));
    }, [])

    const card1 = CardProduct1 ? CardProduct1.map(card =>

        <CardProduct2 id={card.id} key={card.id} text={card.text} smtext={card.smtext} img={card.img} />

    ) : null
    return (
        <>
            {CardProduct1 ? <>
                <Header code={'color-spe'} />
                <br /><br /><br /><br />
                <section id="section-body container-fluid" className="mx-sm-5 mx-3">
                    <div className="dir-menu">
                        <h1 className="display-4 fw-bolder mb-4">Code</h1>
                        <a className="me-1" href="/">Home</a> /
                        <a className="ms-1 text-dark" href="/code">Code</a>
                    </div>
                    <br /><br /><br /><br />
                    <section className="row">
                        <SideBar code={'color-spe'} />
                        <Content>{card1}</Content>
                    </section>
                </section>
                <br /><br /><br /><br /><br />
                <Footer />
            </> : <Spinner />}
        </>
    )
}
