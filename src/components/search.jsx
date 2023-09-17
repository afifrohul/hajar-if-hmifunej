'use client'

import { useState } from "react";
import Image from "next/image";
import CardLomba from "./cardLomba";
import useDebounce from "@/hooks/useDebounce";

export default function Search({ data }) {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 800)

    const filteredData = data.filter((item) => {
        return (
            item.nama_lomba.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            item.tim.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
    })

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <>
            <div className='flex w-full gap-2 px-6 mx-auto my-4 overflow-hidden bg-white border border-black rounded-md lg:px-12'>
                <Image src={'/search.svg'} width={31} height={31} alt='' />
                <input type="text" placeholder='Cari nama lomba atau nama tim... ' className='w-full py-4 outline-none' value={search} onChange={handleSearch} />
            </div>
            <div className='flex flex-wrap items-center justify-center gap-20 py-10 lg:py-[72px]'>
                {filteredData.map((value, index) => (
                    <div data-aos='fade-up' data-aos-once={true} key={index} >
                        <CardLomba
                            foto={value.poster}
                            tim={value.tim}
                            mahasiswa={value.mahasiswa}
                            peraihan={value.peraihan}
                            nama_lomba={value.nama_lomba}
                            tingkat={value.tingkat}
                            deskripsi={value.deskripsi}
                            link_hasil={value.link_hasil}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
