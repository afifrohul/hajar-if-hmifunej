import fetchJenisMbkm from "@/hooks/mbkm/fetchJenisMbkm";
import Image from "next/image";
import Link from "next/link";
import CardSlider from "@/components/mbkm/cardSlider";
import fetchTopMbkm from "@/hooks/mbkm/fetchTopMbkm";

export default async function Mbkm() {
    const jenisMbkm = await fetchJenisMbkm()
    const topMbkm = await fetchTopMbkm()
    return (
        <>
            <section className="flex items-center justify-center bg-no-repeat bg-cover bg-primary bg-grid h-[500px]">
                <div className="max-w-[1400px] p-5 flex flex-wrap lg:flex-nowrap items-center justify-between w-full">

                    <div className="max-w-2xl text-white">
                        <h1 className="mb-6 lg:mb-12 font-bold text-3xl lg:text-7xl">Merdeka Belajar Kampus Merdeka</h1>
                        <p className="text-lg opacity-80">Terstimoni mahasiswa terkait MBKM dan rekomendasi mitra bagi mahasiswa yang ingin mendaftar</p>
                    </div>
                    <div>
                        <Image src={'/mbkm.svg'} width={520} height={200} alt="MBKM" className="mt-10 lg:mt-0"/>
                    </div>
                </div>
            </section>
            <section className="container py-14">
                <h2 className="text-3xl lg:text-6xl font-bold text-center">Referensi Program MBKM Mahasiswa Informatika</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 my-2 lg:my-10 gap-x-20">
                    {
                        jenisMbkm.map((value, index) => (
                            <div key={index}
                                data-aos='fade-up'
                                data-aos-once={true}
                                className="rounded-md lg:rounded-[50px] bg-[#FFE601] p-6 lg:p-12 lg:relative shadow-xl mt-12 lg:mt-0">
                                <h2 className='text-3xl lg:text-5xl font-bold'>{value.nama_jenis_mbkm}</h2>
                                <p className="py-4 lg:py-10">{value.deskripsi_jenis_mbkm}</p>

                                <div className="absolute bottom-0 translate-y-1/2 -translate-x-1/2 left-1/2 bg-white rounded-[50px] lg:px-12 lg:py-8 px-3 py-2 shadow-lg">
                                    <Link href={`/mbkm/${value.slug_jenis}`} className="flex text-sm lg:text-base gap-1 lg:gap-2 lg:px-4 lg:py-3 bg-[#F34419] lg:rounded-[50px] rounded-xl py-2 px-3">
                                        <p>Lihat testimoni</p>
                                        <Image src={'/right-arrow.svg'} width={24} height={24} alt="" className="w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section
                className="container py-4 lg:py-14">
                <h2 className="text-3xl lg:text-6xl font-bold text-center">Testimoni MBKM Mahasiswa Informatika</h2>
                <p className="mt-4 text-lg lg:text-3xl text-center">Kalian mau daftar MBKM tapi masih bingung mau daftar di mana? </p>
                <p className="mb-4 text-lg lg:text-3xl text-center">Yuk simak testimoni-testimoni di berikut ini!</p>
                <CardSlider data={topMbkm} />
            </section>
        </>
    )
}
