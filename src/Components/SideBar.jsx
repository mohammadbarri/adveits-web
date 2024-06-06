import React from 'react'
import Search from "./search/Search"
import { Link } from 'react-router-dom'

export default function SideBar({theme , template , code , plugin , design}) {
    return (
        <section id="side-bar" class="col-xl-4 col-lg-3 col-md-12 col-sm-12 col-12 mb-5">
            <Search/>
            <br />
            <div class="p-4 mt-3 form-bg">
                <span class="fw-bold fs-5">Categories</span>
                <ul class="catergorie-menu">
                    <li><a className={`${theme}`} href="/theme">Themes

                    </a></li>
                    <li><a className={`${template}`} href="/template">Templates

                    </a></li>
                    <li><a className={`${design}`} href="/design">UI Design</a></li>
                    <li><a className={`${plugin}`} href="/plugin">Plugins

                    </a></li>
                    <li><a className={`${code}`} href="/code">Code

                    </a>
                    </li>
                </ul>
            </div>
            <div class="p-4 mt-5 form-bg">
                <span class="fw-bold fs-5">Tags</span>
                <br /><br />
                <button class="btn btn-sm btn-success ms-1 mb-2 ">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
                <button class="btn btn-sm btn-success ms-1 mb-2">Agency</button>
            </div>
            <div class="p-4 mt-5 form-bg">
                <span class="fw-bold fs-5">Compatible With</span>
                <ul class="catergorie-menu">
                    <li><a >Bootstrap 4.x (5)</a></li>
                    <li><a >Elementor (5)</a></li>
                    <li><a >Elementor Pro (5)</a></li>
                    <li><a >WPML (5)</a></li>
                </ul>
            </div>
        </section>
    )
}
