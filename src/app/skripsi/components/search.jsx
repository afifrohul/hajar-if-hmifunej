'use client'

import Image from "next/image"
import { useState } from "react";
import DropDown from "./dropDown";
import CardSkripsi from "./cardSkripsi";
import useDebounce from "@/hooks/useDebounce";

export default function SearchBar({ data }) {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 800)

    const filteredData = data.filter((item) => {
        return (
            item.judul_skripsi.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
    })

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <section id="Content">
            <section id="Search" className="grid grid-cols-3 ml-[125px] mr-[125px] gap-12 justify-center items-center">
                <div className={`col-span-2`}>
                    <div className="h-[50px] w-[250px] flex gap-4 p-4 pl-8 lg:h-[60px] lg:w-full bg-white rounded outline outline-black outline-2">
                        <button type="submit"><Image src={'/search.svg'} width={20} height={20} alt='' /></button>
                        <input className="w-full text-black placeholder-black outline-none text-[12px] lg:text-[14px]" type="text" id="keywordSearch" name="keywordSearch" placeholder="Cari Referensi Skripsimu disini..." value={searchTerm} onChange={handleSearch} />
                    </div>
                </div>
                <DropDown />
            </section>
            <section id="Skripsi" className="lg:px-[70px] mt-[20px]">
                {filteredData.length > 0 ? filteredData.map((value) => (
                    <CardSkripsi key={value.id_skripsi} title={value.judul_skripsi} name={value.nama_mahasiswa} angkatan={value.tahun_skripsi} abstrak={value.deskripsi_skripsi} />
                )) :
                    data.map((value) => (
                        <CardSkripsi key={value.id_skripsi} title={value.judul_skripsi} name={value.nama_mahasiswa} angkatan={value.tahun_skripsi} abstrak={value.deskripsi_skripsi} />
                    ))
                }
            </section>
        </section>
    )
}