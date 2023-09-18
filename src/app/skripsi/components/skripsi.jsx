'use client'

import { useEffect, useState } from "react";
import DropDown from "./dropDown";
import CardSkripsi from "./cardSkripsi";
import LombaNotFound from "@/components/lombaNf";
import SearchBar from "./searchComponent";

export default function SkripsiContent({ data, bidang }) {
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

        else if (searchTerm != "") {
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

        else{
            setDataFilter(data)
        }

    }, [searchTerm,drop])

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <section id="Content">
            <section id="Search" className="lg:grid grid-cols-3 lg:ml-[125px] ml-[60px] lg:mr-[125px] gap-12 justify-center items-center">
                <SearchBar cols={2} searchTerm={searchTerm} handleSearch={handleSearch} />
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