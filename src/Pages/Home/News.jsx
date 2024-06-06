import React, { useState } from 'react'

export default function News() {

    return (
        <section className="py-5 text-center form-bg">
            <h1 className="fw-bold">Sign Up For Our Newsletter</h1>
            <br />
            <p className="mx-5">Sing up for our newsletter and know first about the hottest news, exclusive updates and
                discounts.</p>
            <br />
            <div className="container">
                <div className="col-12 col-md-10 col-sm-6 col-lg-6 mx-auto">

                    <form onSubmit={() => alert('Thank you for this action !')}>
                        <div className="input-group mb-3">
                            <input name='email' type="email" required className="form-control py-2 " placeholder="Email"
                                aria-label="Recipient's username" aria-describedby="button-addon2" />
                        </div>
                    </form>

                </div>
            </div>
            <br />
        </section>
    )
}
