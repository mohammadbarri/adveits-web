import React, { useEffect, useState } from 'react'
import Spinner from '../../Components/Spinner';
import axios from 'axios';
import CardProduct from '../../Components/CardProduct';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';
import Content from '../../Components/Content';
import SideBar from '../../Components/SideBar';
import CardProduct2 from '../../Components/Cardproduct2';

export default function TemplateBody() {
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
                <Header template={'color-spe'} />
                <br /><br /><br /><br />
                <section id="section-body container-fluid" className="mx-sm-5 mx-3">
                    <div className="dir-menu">
                        <h1 className="display-4 fw-bolder mb-4">Template</h1>
                        <a className="me-1" href="/">Home</a> /
                        <a className="ms-1 text-dark" href="/template">Template</a>
                    </div>
                    <br /><br /><br /><br />
                    <section className="row">
                        <SideBar template={'color-spe'} />
                        <Content>{card1}</Content>
                    </section>
                </section>
                <br /><br /><br /><br /><br />
                <Footer /></>
                : <Spinner />}
        </>
    )
}
