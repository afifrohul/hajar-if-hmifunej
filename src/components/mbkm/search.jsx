'use client'

import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"

export default function Search({ data }) {

    return (
        <div>
            <div>
                <div className="flex items-center gap-5">
                    <div className='flex w-full gap-2 px-6 mx-auto my-4 overflow-hidden bg-white border border-black rounded-2xl'>
                        <Image src={'/search.svg'} width={24} height={24} alt="" />
                        <input type="text" placeholder="Semua Posisi" className='w-full py-4 text-lg outline-none' />
                    </div>
                    <div className='flex w-full gap-2 px-6 mx-auto my-4 overflow-hidden bg-white border border-black rounded-2xl'>
                        <Image src={'/office-building.svg'} width={24} height={24} alt="" />
                        <input type="text" placeholder="Semua Perusahaan" className='w-full py-4 text-lg outline-none' />
                    </div>
                    <button className="rounded-2xl bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] flex items-center justify-center">
                        <Image src={'/search.svg'} width={24} height={24} alt="" className="m-5 mx-10 fill-white" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10 py-10">
                {
                    data.map((value, index) => (
                        <div key={index} className="relative">
                            <div className="w-full h-[500px] border-2 border-black rounded-xl shadow-xl rounded-tr-[150px] relative top-4 bg-white z-20 p-6">
                                <div>
                                    <h3 className='text-3xl font-bold'>{value.nama_mahasiswa}</h3>
                                    <p className='text-[#B4B6BA] font-bold text-xl'>MBKM Batch {value.batch}</p>
                                </div>
                                <div className='py-4'>
                                    <h5 className='text-[#060919] opacity-70 font-bold text-xl'>{value.nama_mitra}</h5>
                                    <h5 className='text-[#060919] opacity-70 font-bold text-xl'>{value.nama_program_mbkm}</h5>
                                    <p className='pt-2 text-xl'></p>
                                </div>
                                <div className='flex justify-between'>
                                    <Link href={value.linkedin} target='_blank' className='flex items-center gap-2 mbkm-linkedin'>
                                        <FaLinkedin className='w-8 h-8 text-[#0077b5]' />
                                        <p className='text-xl font-medium'>LinkedIn</p>
                                    </Link>
                                    <Link href={`/mbkm/${value.slug_jenis}/${value.slug}`} className='flex items-center gap-1 p-2 border border-black rounded-lg'>
                                        <p>Selengkapnya</p>
                                        <Image src={'/right-arrow.svg'} width={20} height={20} alt='' />
                                    </Link>
                                </div>

                            </div>
                            <div className="w-10/12 h-[500px] border-2 border-black rounded-xl bg-gradient-to-br from-[#FFE600] to-[#FF9702] shadow-2xl rounded-tl-[150px] absolute top-0 -right-4">
                                {/* CARD BEHIND */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
