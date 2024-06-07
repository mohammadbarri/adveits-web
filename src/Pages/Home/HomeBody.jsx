import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer'
import CardProduct from '../../Components/CardProduct'
import Lience from './Lience'
import BannerHome from './BannerHome'
import CardPrice from '../../Components/CardPrice'
import axios from 'axios'
import Spinner from '../../Components/Spinner'
import News from './News'
import Slide from './SlideComment/Slide'
import { Link } from 'react-router-dom'

export default function HomeBody() {
    const [CardProduct1, setCardProduct] = useState(null)
    const [CardPrice1, setCardPrice] = useState(null)

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/mohammadbarri/adveits-db/card").then(card => setCardProduct(card.data));
        axios.get('https://my-json-server.typicode.com/mohammadbarri/adveits-db/price-card').then(card => setCardPrice(card.data))

    }, []);



    const card1 = CardProduct1 ? CardProduct1.map(card =>
        <CardProduct id={card.id} key={card.id} text={card.text} smtext={card.smtext} img={card.img} />

    ) : null

    const card2 = CardPrice1 ? CardPrice1.map(card =>

        <CardPrice id={card.id} key={card.id} title={card.title} txt={card.txt} />

    ) : null


    return (
        <>
            {CardProduct1 ? <>
                <Header />
                <BannerHome />
                <br /><br /><br /><br />
                <section id="sec-body mt-5">
                    <section className="mx-sm-5 mx-3">
                        <h1 className="fw-bolder">New Releases</h1>
                        <p>Themes, Templates, Wireframes, Design, Plugins.</p>
                        <p className="text-end fw-bolder mt-5"><Link to="/theme" className="text-link">View all</Link></p>
                        <br />
                        <div className="row mb-5 mt-1">
                            {card1}
                        </div>
                        <h1 className="fw-bolder">Themes</h1>
                        <br />
                        <div className="row mb-5 mt-2">
                            {card1}
                        </div>
                        <h1 className="fw-bolder">Templates</h1>
                        <br />
                        <div className="row mb-5 mt-2">
                            {card1}
                        </div>
                        <h1 className="fw-bolder">UI Design</h1>
                        <br />
                        <div className="row mb-5 mt-2 ms-0 ms-sm-3">
                            {card1}
                        </div>
                    </section>
                    <Lience />
                    <Slide />
                    <br />
                    <section className="mx-4 mx-sm-5 mt-5 pt-5 ">
                        <h1 className="fw-bolder">Why Choose Us?</h1>
                        <br />
                        <div className="row mt-5">
                            {card2}

                        </div>
                        <div className="row my-5">
                            {card2}
                        </div>
                    </section>
                    <br /><br />
                    <News />
                </section>
                <Footer />
            </> : <Spinner />}
        </>
    )
}
