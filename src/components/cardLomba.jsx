'use client'

import Image from "next/image"
import { useState } from "react"
import HoverTimLomba from "./hoverTimLomba"

export default function CardLomba(props) {
    const { tim, mahasiswa, peraihan, nama_lomba, penyelenggara, deskripsi, foto, date, tingkat } = props

    const [isHovered, setIsHovered] = useState(false)
    const removeHtmlTags = (input) => {
        return input.replace(/<[^>]*>/g, '')
    }
    return (
        <div className='flex flex-wrap items-center justify-center gap-4 p-4 pt-8 duration-300 shadow-md rounded-xl hover:scale-105 lg:p-6 lg:flex-nowrap'>
            <div className="relative w-full mx-auto">
                <Image src={'/pattern.svg'} width={590} height={650} alt="" className="relative z-10 -translate-x-1/2 left-1/2" />
                <Image src={foto} width={404} height={506} alt="" className="absolute z-20 overflow-hidden -translate-x-1/2 -translate-y-1/2 shadow-md left-1/2 top-1/2 rounded-2xl" />
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
                        <Image src={'/building.svg'} width={52} height={52} alt="" />
                        <p className="text-lg font-medium lg:text-xl">{penyelenggara}</p>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4">
                        <Image src={'/tingkat.svg'} width={52} height={52} alt="" />
                        <p className="text-lg font-medium lg:text-xl">{tingkat}</p>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4">
                        <Image src={'/date.svg'} width={52} height={52} alt="" />
                        <p className="text-lg font-medium lg:text-xl">{date}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
