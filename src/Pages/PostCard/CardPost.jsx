import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer'
import CardProduct from '../../Components/CardProduct'
import { useParams } from 'react-router'
import axios from 'axios'
import { useFetcher } from 'react-router-dom'
import Spinner from '../../Components/Spinner'
import Post from './Post'

export default function CardPost() {
    const [data, setData] = useState(null)
    const params = useParams()
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/mohammadbarri/adveits-db/card/${params.id}`).then(card => setData(card.data))
    }, [])

    return (

        <>
            {data ?
                <>
                    < Header />
                    <Post id={params.id} img={data.img} text={data.text} smtext={data.smtext} largeText={data.largeText} />
                    <Footer />
                </> : <Spinner />}
        </>

    )
}
