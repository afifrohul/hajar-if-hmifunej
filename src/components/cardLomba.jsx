'use client'

import Image from "next/image"
import { useState } from "react"
import HoverTimLomba from "./hoverTimLomba"
import Link from "next/link"

export default function CardLomba(props) {
    const { tim, mahasiswa, peraihan, nama_lomba, deskripsi, foto, link_hasil, tingkat } = props

    const [isHovered, setIsHovered] = useState(false)
    const removeHtmlTags = (input) => {
        return input.replace(/<[^>]*>/g, '')
    }
    return (
        <div className='flex flex-wrap items-center justify-center gap-8 p-4 duration-300 lg:pt-8 hover:scale-105 lg:p-6 lg:flex-nowrap '>
            <div className="relative lg:w-1/3">
                <Image src={foto} width={404} height={506} alt="" className="relative z-20 object-cover mx-auto overflow-hidden shadow-xl aspect-poster rounded-2xl" />
                <Image src={'/rectangle.svg'} width={230} height={410} alt="" className="absolute bottom-0 -left-8" />
                <Image src={'/polygon1.svg'} width={24} height={24} alt="" className="absolute top-8 -left-8" />
                <Image src={'/polygon2.svg'} width={24} height={24} alt="" className="absolute top-1/2 -left-14" />
                <Image src={'/polygon3.svg'} width={24} height={24} alt="" className="absolute -top-4 left-full" />
                <Image src={'/polygon4.svg'} width={24} height={24} alt="" className="absolute" />
            </div>
            <div className="grid items-center py-4 md:py-2">
                <h2 className="text-4xl lg:text-[64px] leading-none font-bold">{peraihan} <span>{nama_lomba}</span></h2>
                <div className="relative">
                    <p className="py-6 text-lg lg:text-xl">{removeHtmlTags(deskripsi)}</p>
                    {
                        isHovered ? (
                            <HoverTimLomba mahasiswa={mahasiswa} />
                        ) : null
                    }
                </div>
                <div className="grid gap-2 md:gap-6 md:grid-cols-2 lg:mx-0">
                    <div className="flex items-center gap-2 lg:gap-4">
                        <Image src={'/tim.svg'} width={52} height={52} alt="" />
                        {
                            tim == 'Personal' ? (
                                <div className="flex items-center h-full">
                                    <p className="text-lg font-medium lg:text-xl">{mahasiswa}</p>
                                </div>
                            ) : (
                                <div
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="flex items-center h-full cursor-pointer">
                                    <p className="text-lg font-medium lg:text-xl">{tim}</p>
                                    <Image src={'/mark.svg'} width={20} height={20} alt="" className="relative -top-4 h-fit -right-1" />
                                </div>
                            )
                        }
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4">
                        <Image src={'/tingkat.svg'} width={52} height={52} alt="" />
                        <p className="text-lg font-medium lg:text-xl">{tingkat}</p>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4">
                        <Image src={'/link-icon.svg'} width={52} height={52} alt="" />
                        <div className="flex gap-2">
                            <p className="text-lg font-medium lg:text-xl">Karya: </p>
                            <Link href={link_hasil} target="_blank" className="text-lg font-medium lg:text-left text-[#FF9B00] hover:brightness-75 underline">klik disini!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
