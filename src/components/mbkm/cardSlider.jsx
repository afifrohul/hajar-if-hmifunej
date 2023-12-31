'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CardTopMbkm(props) {
    const { data } = props
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        const breakpoints = {
            320: 1,
            768: 2
        };

        const updateSlidesPerView = () => {
            const windowWidth = window.innerWidth;
            const newSlidesPerView = Object.keys(breakpoints)
                .reverse()
                .find((breakpoint) => windowWidth >= breakpoint);

            if (newSlidesPerView !== undefined) {
                setSlidesPerView(breakpoints[newSlidesPerView]);
            }
        };

        updateSlidesPerView();

        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    const removeHtmlTags = (input) => {
        return input.replace(/<[^>]*>/g, '')
    }

    const MAX_DESC_LENGTH = 100; // Ganti dengan jumlah karakter maksimum yang Anda inginkan
    const MAX_PROG = 15; // Ganti dengan jumlah karakter maksimum yang Anda inginkan

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };


    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={slidesPerView}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            data-aos='fade-up'
            data-aos-once={true}
        >
            {
                data.map((value, index) => (
                    <SwiperSlide key={index} className='px-4'>
                        <div className="shadow-card-mobile lg:shadow-card w-full my-10 rounded-xl lg:rounded-[50px] p-4 lg:p-12 h-full bg-white">
                            <div className='h-[60px] lg:h-[120px]'>
                                <h3 className='text-xl font-bold lg:text-5xl'>{value.nama_mahasiswa}</h3>
                                <p className='text-[#B4B6BA] font-bold text-lg lg:text-2xl'>MBKM Batch {value.batch}</p>
                            </div>
                            <div className='py-4 h-[80px] lg:h-[120px]'>
                                <h5 className='text-[#060919] opacity-70 font-bold text-sm lg:text-2xl'>{value.nama_jenis_mbkm}</h5>
                                <h5 className='text-[#060919] opacity-70 font-bold text-sm lg:text-2xl'>{value.nama_mitra} - {truncateText(value.nama_program_mbkm, MAX_PROG)}</h5>
                            </div>
                            <p className='pt-2 text-sm lg:text-xl h-[100px]'>{truncateText(removeHtmlTags(value.testimoni_mbkm), MAX_DESC_LENGTH)}</p>
                            <div className='flex justify-between'>
                                <Link href={value.linkedin} target='_blank' className='flex items-center gap-2 mbkm-linkedin'>
                                    <FaLinkedin className='w-8 h-8 text-[#0077b5]' />
                                    <p className='text-sm font-medium lg:text-base'>LinkedIn</p>
                                </Link>
                                <Link href={`/mbkm/${value.slug_jenis}/${value.slug}`} className='flex items-center gap-1 p-2 text-xs border border-black rounded-lg lg:text-sm bg-secondary neumorphism-mbkm-slider'>
                                    <p>Selengkapnya</p>
                                    <Image src={'/right-arrow.svg'} width={20} height={20} alt='' />
                                </Link>
                            </div>

                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

