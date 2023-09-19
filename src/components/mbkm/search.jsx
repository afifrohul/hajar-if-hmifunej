'use client'

import fetchSearchMagang from "@/hooks/mbkm/fetchSearchMagang"
import fetchSearchSIB from "@/hooks/mbkm/fetchSearchSIB"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaLinkedin } from "react-icons/fa"

export default function Search({ data, jenis_mbkm }) {
    const [search, setSearch] = useState({
        posisi: '',
        perusahaan: ''
    })

    const [result, setResult] = useState(data)

    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = async (e) => {
        try {
            setIsLoading(true)
            e.preventDefault()
            if (jenis_mbkm == 'magang-bersertifikat') {
                const data = await fetchSearchMagang(search.posisi, search.perusahaan)
                setResult(data)
            } else if (jenis_mbkm == 'studi-independen-bersertifikat') {
                const data = await fetchSearchSIB(search.posisi, search.perusahaan)
                setResult(data)
            }
        } catch (err) {
            console.log('Error fetching data: ', err)
        } finally {
            setIsLoading(false)
        }
    }

    const MAX_DESC_LENGTH = 200; // Ganti dengan jumlah karakter maksimum yang Anda inginkan
    const MAX_PROG = 15; // Ganti dengan jumlah karakter maksimum yang Anda inginkan

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    const removeHtmlTags = (input) => {
        return input.replace(/<[^>]*>/g, '')
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSearch} className="flex flex-wrap items-center gap-1 md:flex-nowrap lg:gap-5">
                    <div className='flex w-full gap-2 px-2 mx-auto my-1 overflow-hidden bg-white border border-black rounded-md lg:px-6 lg:my-4 lg:rounded-2xl'>
                        <Image src={'/search.svg'} width={24} height={24} alt="" className="w-4" />
                        <input
                            type="text"
                            placeholder="Semua Posisi"
                            value={search.posisi}
                            onChange={(e) => setSearch({ ...search, posisi: e.target.value })}
                            className='w-full py-2 text-sm outline-none lg:py-4 lg:text-lg' />
                    </div>
                    <div className='flex w-full gap-2 px-2 mx-auto my-1 overflow-hidden bg-white border border-black rounded-md lg:px-6 lg:my-4 lg:rounded-2xl'>
                        <Image src={'/office-building.svg'} width={24} height={24} alt="" className="w-4" />
                        <input
                            type="text"
                            placeholder="Semua Perusahaan"
                            value={search.perusahaan}
                            onChange={(e) => setSearch({ ...search, perusahaan: e.target.value })}
                            className='w-full py-2 text-sm outline-none lg:py-4 lg:text-lg' />
                    </div>
                    <button type="submit" className="rounded-md lg:rounded-2xl my-1 bg-gradient-to-br from-[#FF9B00] hover:from-[#ED1C24] hover:to-[#FF9B00] shadow-md to-[#ED1C24] flex items-center justify-center w-full lg:w-fit">
                        <Image src={'/search.svg'} width={24} height={24} alt="" className="w-4 m-2 lg:m-5 lg:mx-10 fill-white" />
                    </button>
                </form>
            </div>
            {
                isLoading ?
                    <div className="w-full mx-auto my-10 loader"></div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-10 xl:grid-cols-3">
                        {
                            result.map((value, index) => (
                                <div key={index} className="relative mr-4 xl:mr-0">
                                    <div className="w-full h-[500px] border-2 border-black rounded-xl shadow-xl rounded-tr-[150px] relative top-4 bg-white z-20 p-6">
                                        <div>
                                            <h3 className='text-xl font-bold lg:text-3xl pr-5'>{value.nama_mahasiswa}</h3>
                                            <p className='text-[#B4B6BA] font-bold text-base lg:text-xl'>MBKM Batch {value.batch}</p>
                                        </div>
                                        <div className='py-4'>
                                            <h5 className='text-[#060919] opacity-70 font-bold text-base lg:text-xl'>{value.nama_mitra}</h5>
                                            <h5 className='text-[#060919] opacity-70 font-bold text-base lg:text-xl'>{value.nama_program_mbkm}</h5>
                                            <p className='pt-2 hidden lg:block lg:text-base'>{truncateText(removeHtmlTags(value.testimoni_mbkm), MAX_DESC_LENGTH)}</p>
                                            <p className='pt-2 text-sm lg:hidden'>{truncateText(removeHtmlTags(value.testimoni_mbkm), 300)}</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link href={value.linkedin} target='_blank' className='flex items-center gap-2 mbkm-linkedin absolute bottom-10'>
                                                <FaLinkedin className='w-8 h-8 text-[#0077b5]' />
                                                <p className='text-sm font-medium lg:text-xl'>LinkedIn</p>
                                            </Link>
                                            <Link href={`/mbkm/${value.slug_jenis}/${value.slug}`} className="absolute bottom-10 right-6 bg-secondary neumorphism-mbkm-slider">
                                                <div className='flex items-center gap-1 p-2 border border-black rounded-lg'>
                                                    <p className="text-sm lg:text-base">Selengkapnya</p>
                                                    <Image src={'/right-arrow.svg'} width={20} height={20} alt='' className="w-4 " />
                                                </div>
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
            }
        </div>
    )
}
