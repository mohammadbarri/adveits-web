import React from 'react'
import SlideComment from './SlideComment'

export default function Slide() {
    return (
        <section className="pb-5">
            <div className="container">
                <br /><br /><br />
                <div className="text-center mb-5">
                    <svg width="56" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M56 15.95H44.037L52.013 0H40.05l-7.975 15.95v23.925H56zM24.1 39.875V15.95H12.137L20.112 0H8.15L.174 15.95v23.925z" fill="#6DC4A1" /></svg>
                </div>
                <div className="">
                    <div>
                        <SlideComment />
                    </div>
                </div>
            </div>
        </section>
    )
}
