import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SlideComment() {
    const [data, setData] = useState('')

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/mohammadbarri/adveits-db/comments').then(res => setData(res.data))
    }, [])

    const card = data ? data.map(comment => {
        return <SwiperSlide key={comment.id}>
            < p className="fs-5 fw-bold text-center" > {comment.name}</p >
            <br /><br />
            <p className="fs-3 text-center pb-4">"{comment.txt}"</p>
        </SwiperSlide >
    }) : null
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            {card}





        </Swiper>
    );
};