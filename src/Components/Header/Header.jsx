import React from 'react'
import Search from '../search/Search'
import { Link } from 'react-router-dom'
import ShopNavi from './ShopNavi'

export default function Header({ theme, template, design, plugin, code, about, acount, cart }) {
    return (
        <>
            <header className="container mt-3">
                <section>
                    <div className="row mx-2">
                        <div className="col-lg-1 col-sm-2 col-1 mt-3">
                           <a className="navbar-brand" href="/"><img src="/img/logo-dark.svg" width="85px" alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-8 col-8 ms-1 text-end">
                            <ul className="header-menu2 mt-3">
                                <li><a className={`${acount}`} href="/my-acount">
                                    <i className="fas fa-user">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                                        </svg>
                                    </i>
                                </a>
                                </li>
                                <li className="ps-0"><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar2"
                                    aria-controls="offcanvasDarkNavbar" href="#">
                                    <i className="fas fa-search">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                                        </svg>
                                    </i>
                                </a>
                                    <div className="offcanvas rounded-3 border shadow m-auto  offcanvas-top offcanvas-top1"
                                        id="offcanvasDarkNavbar2">
                                        <div className="offcanvas-header">
                                            <div className="col-lg-1 col-sm-2 mx-2 col-2 mt-3">
                                               <a className="navbar-brand" href="/"><img src="/img/logo-dark.svg"
                                                    width="100px" alt="" /></a>
                                            </div>
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <Search />
                                        </div>
                                    </div>
                                </li>
                                <ShopNavi cart={cart} />
                            </ul>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-1 col-1 text-end">
                            <nav className="navbar navbar-expand-lg bg-body-light">
                                <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="container-fluid">
                                    <div className="offcanvas h-100 offcanvas-top" id="offcanvasDarkNavbar">
                                        <div className="offcanvas-header">
                                            <div className="col-lg-1 col-sm-2 mx-2 col-2 mt-3">
                                               <a className="navbar-brand" href="/"><img src="/img/logo-dark.svg" width="100px" alt="" /></a>
                                            </div>
                                            <button type="button" className="btn-close me-2" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></button>
                                        </div>
                                        <ul className="navbar-nav  mb-2 mb-lg-0 header-menu1 text-center">
                                            <li className="nav-item">
                                               <a className={`nav-link ${theme}`} aria-current="page" href="/theme">Themes</a>
                                            </li>
                                            <li className="nav-item">
                                               <a className={`nav-link ${template}`} href="/template">Templates</a>
                                            </li>
                                            <li className="nav-item">
                                               <a className={`nav-link ${design}`} href="/design">UI Design</a>
                                            </li>
                                            <li className="nav-item">
                                               <a className={`nav-link ${plugin}`} href="/plugin">Plugins</a>
                                            </li>
                                            <li className="nav-item">
                                               <a className={`nav-link ${code}`} href="/code">Code</a>
                                            </li>
                                            <li className="nav-item">
                                               <a className={`nav-link ${about}`} href="/about">About us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}
