'use client'

import { useState } from "react";
import Image from "next/image";
import CardLomba from "./cardLomba";
import useDebounce from "@/hooks/useDebounce";

export default function Search({ initialData }) {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 800)

    const filteredData = initialData.filter((item) => {
        return (
            item.nama_lomba.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            item.tim.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
    })

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <>
            <div className='flex w-full gap-2 px-12 mx-auto my-4 overflow-hidden bg-white border border-black rounded-md'>
                <Image src={'/search.svg'} width={31} height={31} alt='' />
                <input type="text" placeholder='Cari nama lomba atau nama tim... ' className='w-full py-4 outline-none' value={searchTerm} onChange={handleSearch} />
            </div>
            <div className='flex flex-wrap items-center justify-center gap-14 py-[72px]'>
                {filteredData.map((value, index) => (
                    <CardLomba key={index} foto={value.foto} tim={value.tim} mahasiswa={value.mahasiswa} peraihan={value.peraihan} nama_lomba={value.nama_lomba} penyelenggara={value.penyelenggara} deskripsi={value.deskripsi} date={value.created_at} />
                ))}
            </div>
        </>
    )
}
