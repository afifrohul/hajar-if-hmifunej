'use client'

import { useState } from "react";
import Image from "next/image";
import CardLomba from "./cardLomba";
import useDebounce from "@/hooks/useDebounce";

export default function Search({ initialData }) {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 800)

    const filteredData = initialData.filter((item) => {
        if (item.tim == 'Personal') {
            return item.mahasiswa.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        } else {
            return item.tim.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        }
    })

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <>
            <div className='flex max-w-4xl px-1 mx-auto my-4 overflow-hidden bg-white border border-black rounded-md'>
                <Image src={'/search.svg'} width={31} height={31} alt='' />
                <input type="text" placeholder='Cari nama tim...' className='w-full px-2 py-1 outline-none' value={searchTerm} onChange={handleSearch} />
            </div>
            <div className='flex flex-wrap items-center justify-center gap-8 py-6'>
                {filteredData.map((value, index) => (
                    <CardLomba key={index} tim={value.tim} mahasiswa={value.mahasiswa} peraihan={value.peraihan} nama_lomba={value.nama_lomba} penyelenggara={value.penyelenggara} deskripsi={value.deskripsi} />
                ))}
            </div>
        </>
    )
}
