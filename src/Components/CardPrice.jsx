import React from 'react'

export default function CardPrice({ title, txt, id }) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-5 ">
            <div id={id} className="card px-3 py-5 border-0 shadow khas1 w-100">
                <img className="ms-3 width-khas" src="/img/Capture.JPG" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{txt}</p>
                </div>
            </div>
        </div>
    )
}
