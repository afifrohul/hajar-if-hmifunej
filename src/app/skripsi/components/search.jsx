'use client'

import Image from "next/image"
import { useEffect, useState } from "react";
import DropDown from "./dropDown";
import CardSkripsi from "./cardSkripsi";
import LombaNotFound from "@/components/lombaNf";

export default function SearchBar({ data, bidang }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [drop, setDrop] = useState('');
    const [dataFilter, setDataFilter] = useState(data)

    useEffect(() => {

        if (searchTerm != "" && drop != "") {
            setDataFilter(() => data.filter((item) => {
                return (
                    item.judul_skripsi.toLowerCase().includes(searchTerm.toLowerCase()) &&
                    item.bidang_skripsi.includes(drop)
                )
            }))
        }

        else if (searchTerm != "" ) {
            setDataFilter(() => data.filter((item) => {
                return (
                    item.judul_skripsi.toLowerCase().includes(searchTerm.toLowerCase())
                )
            }))
        }

        else if (drop != "") {
            setDataFilter(() => data.filter((item) => {
                return (
                    item.bidang_skripsi.includes(drop)
                )
            }))
        }

    }, [searchTerm,drop])

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <section id="Content">
            <section id="Search" className="lg:grid grid-cols-3 lg:ml-[125px] ml-[60px] lg:mr-[125px] gap-12 justify-center items-center">
                <div className={`col-span-2`}>
                    <div className="mt-5 lg:mt-0 h-[50px] w-[250px] flex gap-4 p-4 pl-8 lg:h-[60px] lg:w-full bg-white rounded outline outline-black outline-2">
                        <button type="submit"><Image src={'/search.svg'} width={20} height={20} alt='' /></button>
                        <input className="w-full text-black placeholder-black outline-none text-[12px] lg:text-[14px]" type="text" id="keywordSearch" name="keywordSearch" placeholder="Cari Referensi Skripsimu disini..." value={searchTerm} onChange={handleSearch} />
                    </div>
                </div>
                <DropDown bidang={bidang} setValue={setDrop} />
            </section>
            <section id="Skripsi" className="lg:px-[70px] lg:mt-[20px]">
                {dataFilter.length > 0 ? dataFilter.map((value) => (
                    <CardSkripsi key={value.id_skripsi} title={value.judul_skripsi} name={value.nama_mahasiswa} angkatan={value.tahun_skripsi} abstrak={value.deskripsi_skripsi} />
                )) :
                    <LombaNotFound />
                }
            </section>
        </section>
    )
}