import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer'
import Spinner from '../../Components/Spinner';
import CardPrice from '../../Components/CardPrice';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AboutBody() {
    const [CardPrice1, setCardPrice] = useState(null)

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/mohammadbarri/adveits-db/price-card').then(card => setCardPrice(card.data))

    }, []);

    const card2 = CardPrice1 ? CardPrice1.map(card =>

        <CardPrice id={card.id} key={card.id} title={card.title} txt={card.txt} />

    ) : null
    return (
        <>
            {CardPrice1 ? <>
                <Header about={'color-spe'} />
                <br /><br /><br /><br />
                <section id="section-body container-fluid" className="mx-sm-5 mx-3">
                    <div className="dir-menu">
                        <h1 className="display-4 fw-bolder mb-4">About us</h1>
                        <Link className="me-1" to="/">Home</Link> /
                        <Link className="ms-1 text-dark" to="/about">About us</Link>
                    </div>
                    <br /><br /><br /><br />
                    <section className="col-lg-8 col-md-12 col-sm-12 col-12">
                        <h5 className='word-break'>Adveits - a professional, creative team with extensive knowledge that
                            offers novel,
                            unique and creative IT projects development and advertising solutions. Regarding Your needs, our company
                            has also created an online store where customers can purchase IT and advertising items.</h5><br />
                        <p className="text-secondary">The Adveits Store is developed by our professionals and offers to purchase IT
                            and
                            advertising items for ordinary people, designers and programmers. These include themes, templates,
                            UI
                            designs, plugins and codes. The items are created regarding high-standards, and customers’
                            satisfaction
                            is our priority.</p>
                        <p className="text-secondary">The Adveits Store is developed by our professionals and offers to purchase IT
                            and
                            advertising items for ordinary people, designers and programmers. These include themes, templates,
                            UI
                            designs, plugins and codes. The items are created regarding high-standards, and customers’
                            satisfaction
                            is our priority.</p>
                        <br />
                    </section>
                    <hr />
                    <section>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5">
                                <h4 className="fw-bold text-center">Our Vision</h4>
                                <p className="text-secondary">
                                    An online store that offers unique and high-standards IT and advertising items, which will meet
                                    any needs and purposes.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5">
                                <h4 className="fw-bold text-center">Our Mission</h4>
                                <p className="text-secondary">To offer to purchase eye-catching and professional IT and advertising
                                    content, which saves your time, for customers.</p>
                            </div>
                        </div>
                    </section>
                    <br /><br /><br /><br /><br />
                </section>
                <section className='form-bg'>
                    <div className="mx-5 py-5">
                        <h4 className="fw-bolder">We Assert That Reliability and Honesty Are Our Priorities</h4>
                        <br />
                        <p className="text-secondary">Nowadays, many people suffer from frauds in the online world, so reliability and
                            honesty must be priorities for both clients and businesses.</p>
                        <p className="text-secondary">We can ensure that an item you purchased is processed safely, fluently and
                            securely.</p>
                    </div>
                </section>
                <br /><br /><br /><br /><br />
                <section className="mx-sm-5 mx-3 mt-5 pt-5 ">
                    <h1 className="fw-bolder">Why Choose Us?</h1>
                    <br />
                    <div className="row mt-5">
                        {card2}
                    </div>
                    <div className="row my-5">
                        {card2}
                    </div>
                </section>
                <section className="py-5 my-5 text-center">
                    <h1 className="fw-bold mx-3">Take A Look and Start Creating Your Project Now!</h1>
                    <br />
                    <Link className="btn text-light border-0 bg-khas px-3 p-3" to="/theme">Check our Items</Link>
                </section>
                <Footer />
            </> : <Spinner />}
        </>
    )
}
