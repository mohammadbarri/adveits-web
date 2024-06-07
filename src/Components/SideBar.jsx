import React from 'react'
import Search from "./search/Search"
import { Link } from 'react-router-dom'

export default function SideBar({theme , template , code , plugin , design}) {
    return (
        <section id="side-bar" className="col-xl-4 col-lg-3 col-md-12 col-sm-12 col-12 mb-5">
            <Search/>
            <br />
            <div className="p-4 mt-3 form-bg">
                <span className="fw-bold fs-5">Categories</span>
                <ul className="catergorie-menu">
                    <li><Link className={`${theme}`} to="/theme">Themes

                    </Link></li>
                    <li><Link className={`${template}`} to="/template">Templates

                    </Link></li>
                    <li><Link className={`${design}`} to="/design">UI Design</Link></li>
                    <li><Link className={`${plugin}`} to="/plugin">Plugins

                    </Link></li>
                    <li><Link className={`${code}`} to="/code">Code

                    </Link>
                    </li>
                </ul>
            </div>
            <div className="p-4 mt-5 form-bg">
                <span className="fw-bold fs-5">Tags</span>
                <br /><br />
                <button className="btn btn-sm btn-success ms-1 mb-2 ">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button className="btn btn-sm btn-success ms-1 mb-2">Agency</button>
            </div>
            <div className="p-4 mt-5 form-bg">
                <span className="fw-bold fs-5">Compatible With</span>
                <ul className="catergorie-menu">
                    <li><Link >Bootstrap 4.x (5)</Link></li>
                    <li><Link >Elementor (5)</Link></li>
                    <li><Link >Elementor Pro (5)</Link></li>
                    <li><Link >WPML (5)</Link></li>
                </ul>
            </div>
        </section>
    )
}
