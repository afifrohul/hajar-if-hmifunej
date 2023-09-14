'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa'
import Image from 'next/image';

export default function CardTopMbkm(props) {
    // const { nama_mahasiswa, batch, nama_jenis_mbkm, nama_program_mbkm, nama_mitra, deskripsi_mitra, linkedin, slug_jenis, slug } = props
    const { data } = props
    console.log(data);
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
            {

            }
            {
                data.map((value, index) => (
                    <SwiperSlide className='px-4'>
                        <div className="shadow-card w-full my-10 rounded-[50px] p-12 h-full">
                            <div>
                                <h3 className='text-5xl font-bold'>{value.nama_mahasiswa}</h3>
                                <p className='text-[#B4B6BA] font-bold text-2xl'>MBKM Batch {value.batch}</p>
                            </div>
                            <div className='py-4'>
                                <h5 className='text-[#060919] opacity-70 font-bold text-2xl'>{value.nama_jenis_mbkm}</h5>
                                <h5 className='text-[#060919] opacity-70 font-bold text-2xl'>{value.nama_mitra} - {value.nama_program_mbkm}</h5>
                                <p className='pt-2 text-xl'>{value.deskripsi_mitra}</p>
                            </div>
                            <div className='flex justify-between'>
                                <Link href={value.linkedin} target='_blank' className='flex items-center gap-2 mbkm-linkedin'>
                                    <FaLinkedin className='w-8 h-8 text-[#0077b5]' />
                                    <p className='text-xl font-medium'>LinkedIn</p>
                                </Link>
                                <Link href={`/${value.slug_jenis}/${value.slug}`} className='flex items-center gap-1 p-2 border border-black rounded-lg'>
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

