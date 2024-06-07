import React, { useEffect, useRef, useState } from 'react'
import data from "./data.json"
import { Link } from 'react-router-dom'

export default function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [d1, setD1] = useState('d-none')
    const [d2, setD2] = useState('d-none')
    const [d3, setD3] = useState('d-none')
    const [d4, setD4] = useState('d-none')

    function handleInput(e) {

        const value = e.target.value
        data.card.map(card => {
            if (value === 's' || value === 'S') {
                setD1('d-inline')
            }
            else if (value === 'r' || value === 'R') {
                setD2('d-inline')
            }
            else if (value === 'v' || value === 'V') {
                setD3('d-inline')
            }
            else if (value === 'c' || value === 'C') {
                setD4('d-inline')
            }
            else if (value === '') {
                setD1('d-none')
                setD2('d-none')
                setD3('d-none')
                setD4('d-none')
            }
        })
        setSearchValue(e.target.value)
    }

    return (
        <>
            <form className="d-flex po-rel mb-1" role="search">
                <input autoComplete='off' value={searchValue} onChange={handleInput} id='q' name='q' className="form-control border-0 pe-5 p-4 form-bg"
                    type="search" placeholder="Search Pruducts" aria-label="Search" /><br />


                <i className="fas fa-search fa-search2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                        viewBox="0 0 512 512">
                        <path
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                    </svg>
                </i>

            </form>

            <div className={`list-group text-start pt-2`}>
                <small><a key={data.card[0].id} href={`/cart/${data.card[0].id}`} className={`list-group-item d-block list-group-item-action border-0 ${d1}`}>{data.card[0].smtext}</a></small>
                <small><a key={data.card[1].id} href={`/cart/${data.card[1].id}`} className={`list-group-item d-block list-group-item-action border-0 ${d2}`}>{data.card[1].smtext}</a></small>
                <small><a key={data.card[2].id} href={`/cart/${data.card[2].id}`} className={`list-group-item d-block list-group-item-action border-0 ${d3}`}>{data.card[2].smtext}</a></small>
                <small><a key={data.card[3].id} href={`/cart/${data.card[3].id}`} className={`list-group-item d-block list-group-item-action border-0 ${d4}`}>{data.card[3].smtext}</a></small>
            </div>


        </>

    )
}
