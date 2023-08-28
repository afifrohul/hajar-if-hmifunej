import fetchJenisMbkm from "@/hooks/mbkm/fetchJenisMbkm";
import fetchTopBidangMagang from "@/hooks/mbkm/fetchTopBidangMagang";
import { fetchTopBidangSib } from "@/hooks/mbkm/fetchTopBidangSib";
import Image from "next/image";

export default async function Mbkm() {
    const jenisMbkm = await fetchJenisMbkm()
    const topSib = await fetchTopBidangSib()
    const topMagang = await fetchTopBidangMagang()
    return (
        <div>
            <div className="flex items-center justify-center bg-no-repeat bg-cover bg-primary bg-grid h-[500px]">
                <div className="max-w-[1400px] flex items-center justify-between w-full">

                    <div className="max-w-2xl text-white">
                        <h1 className="mb-12 font-bold text-7xl">Merdeka Belajar Kampus Merdeka</h1>
                        <p className="text-lg">Terstimoni mahasiswa terkait MBKM dan rekomendasi mitra bagi mahasiswa yang ingin mendaftar</p>
                    </div>
                    <div>
                        <Image src={'/mbkm.svg'} width={520} height={200} alt="MBKM" />
                    </div>
                </div>
            </div>
            <div className="container">
                <h2>Referensi Program MBKM Mahasiswa Informatika</h2>
                <div>
                    {
                        jenisMbkm.map((value, index) => (
                            <div key={index}>
                                <h2 className='text-3xl font-semibold'>{value.nama_jenis_mbkm}</h2>
                                <p>{value.deskripsi_jenis_mbkm}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
