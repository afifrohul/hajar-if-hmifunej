'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function CardTopMbkm() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={2}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            data-aos='fade-up'
            data-aos-once={true}
        >
            <SwiperSlide className='px-4'>
                <div className="shadow-card h-80 w-full my-10 rounded-[50px]">

                </div>
            </SwiperSlide>
            <SwiperSlide className='px-4'>
                <div className="shadow-card h-80 w-full my-10 rounded-[50px]">

                </div>
            </SwiperSlide>
            <SwiperSlide className='px-4'>
                <div className="shadow-card h-80 w-full my-10 rounded-[50px]">

                </div>
            </SwiperSlide>
        </Swiper>
    )
}

