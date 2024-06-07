import React, { useState } from 'react'
import { useAuthDispatch, useAuthState } from '../Context/auth-context'
import { useLocation, useMatch, useMatches, useNavigate, useParams } from 'react-router'

export default function CardProduct({ img, text, smtext, id }) {
    const dispatch = useAuthDispatch()
    const navigate = useNavigate()


    function handleChangeNumber(e) {
        if (!localStorage.getItem('user')) {
            alert('please sign up first !')
            navigate('/my-acount')
            window.location.reload()

        }

        else {
            dispatch({
                type: 'addCart',
                id: id,


            })
            navigate('/cart')
            window.location.reload()
            
            localStorage.setItem('cardId', id)
            alert('You buy this cart check the shop !!')
        }

    }


    return (
        < div className="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3  mt-5" >
            <div id={id} className="card shadow border-0 khas1 w-100" >
                <img src={img} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h6 className="card-title fw-bolder"><a className="title-link" href={`/cart/${id}`}>{text}</a></h6>
                    <p className="card-text"><a href={`/cart/${id}`} className="card-link text-secondary">{smtext}</a></p>
                    <br />
                    <hr />
                    <span><sup className="fw-bold fs-6">$</sup><span className="fw-bold fs-4">27</span></span>
                    <div className="float-end">
                        <a href={`/cart/${id}`} className="btn btn-outline-success">View Details</a>
                        <a onClick={handleChangeNumber} className="btn btn-dark ms-1">
                            <i className="fa-solid fa-cart-shopping">
                                <svg className='color-ff' xmlns="http://www.w3.org/2000/svg" height="16"
                                    width="16"
                                    viewBox="0 0 576 512">
                                    <path
                                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
