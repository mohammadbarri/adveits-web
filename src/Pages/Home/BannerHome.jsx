import React from 'react'
import { Link } from 'react-router-dom'

export default function BannerHome() {
    return (
        <section className="mt-4 mx-5">
            <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12 col-12 m-auto">
                    <p className="text-secondary">Welcome to Adveits Store</p>
                    <h1 className="display-4 fw-bold">Create Your Premium Site In Fast, Modern <span className='color-spe'
                    >and</span> Easy Way.</h1>
                    <div className="mt-5">
                        <div className="btn btn-dark d-lg-inline d-md-inline d-sm-block ms-3 mt-2 d-block py-3">
                            <a href='#' className="txt-dec-none">
                                <i className="fa-br/ands fa-wordpress me-1">
                                    <svg className='color-ff' xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                                        viewBox="0 0 512 512">
                                        <path
                                            d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8 .9 0 1.8 .1 2.8 .2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7 .3 13.7 .3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z" />
                                    </svg>
                                </i>
                            </a>
                            <span>For Users</span>
                        </div>
                        <div className=" btn btn-success d-lg-inline d-md-inline d-sm-block mt-2 d-block ms-3 py-3 bg-khas border-0">
                            <a href='#' className="txt-dec-none">
                                <i className="fa-br/ands fa-sketch me-1">
                                    <svg className="color-ff" xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                                        viewBox="0 0 512 512">
                                        <path
                                            d="M27.5 162.2L9 187.1h90.5l6.9-130.7-78.9 105.8zM396.3 45.7L267.7 32l135.7 147.2-7.1-133.5zM112.2 218.3l-11.2-22H9.9L234.8 458zm2-31.2h284l-81.5-88.5L256.3 33zm297.3 9.1L277.6 458l224.8-261.7h-90.9zM415.4 69L406 56.4l.9 17.3 6.1 113.4h90.3zM113.5 93.5l-4.6 85.6L244.7 32 116.1 45.7zm287.7 102.7h-290l42.4 82.9L256.3 480l144.9-283.8z" />
                                    </svg>
                                </i>
                            </a>
                            <span>For Designers</span>
                        </div>
                        <div className="btn btn-light  d-lg-inline d-md-inline d-sm-block mt-2 d-block ms-3 py-3">
                            <a href='#' className='txt-dec-none'>
                                <i className="fa-br/ands fa-html5 me-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12"
                                        viewBox="0 0 384 512">
                                        <path
                                            d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                                    </svg>
                                </i>
                            </a>
                            <span>For Developers</span>
                        </div>
                    </div>
                </div>
                <div className="col-5 d-sm-none d-none d-lg-block">
                    <a href='/'>
                        <img className="w-100" src="/img/adveits-store.svg" alt="" />
                    </a>
                </div>
            </div>
        </section>
    )
}
