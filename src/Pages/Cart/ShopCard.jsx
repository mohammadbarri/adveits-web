import React from 'react'
import { Link } from 'react-router-dom'

export default function ShopCard({ img, text, smtext, id, largeText, d }) {
    return (
        <div className='row my-5' >
            <div className='col-12 col-sm-8 col-md-4 mt-4'>
                <div style={{ width: '24rem', margin: '0 auto' }} id={id} className="card shadow-lg border-0 w-100 khas1" >
                    <img src={img} className="card-img-top w-100" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder"><a className="title-link" href={`/cart/${id}`}>{text}</a></h5>
                        <p className="card-text"><a href={`/cart/${id}`} className="card-link text-secondary">{smtext}</a></p>
                        <br />
                        <p className='card-text'>{largeText}</p>
                        <span><sup className="fw-bold fs-6">$</sup><span className="fw-bold fs-4">27</span></span>
                        <div className="float-end">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
