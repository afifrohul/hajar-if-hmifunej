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
                <div className="max-w-[1400px] flex items-center justify-between w-full">

                    <div className="max-w-2xl text-white">
                        <h1 className="mb-12 font-bold text-7xl">Merdeka Belajar Kampus Merdeka</h1>
                        <p className="text-lg">Terstimoni mahasiswa terkait MBKM dan rekomendasi mitra bagi mahasiswa yang ingin mendaftar</p>
                    </div>
                    <div>
                        <Image src={'/mbkm.svg'} width={520} height={200} alt="MBKM" />
                    </div>
                </div>
            </section>
            <section className="container py-14">
                <h2 className="text-6xl font-bold text-center">Referensi Program MBKM Mahasiswa Informatika</h2>
                <div className="grid grid-cols-2 my-10 gap-x-20">
                    {
                        jenisMbkm.map((value, index) => (
                            <div key={index}
                                data-aos='fade-up'
                                data-aos-once={true}
                                className="rounded-[50px] bg-[#FFE601] p-12 relative shadow-xl">
                                <h2 className='text-5xl font-bold'>{value.nama_jenis_mbkm}</h2>
                                <p className="py-10">{value.deskripsi_jenis_mbkm}</p>

                                <div className="absolute bottom-0 translate-y-1/2 -translate-x-1/2 left-1/2 bg-white rounded-[50px] px-12 py-8 shadow-lg">
                                    <Link href={'/'} className="flex gap-2 px-4 py-3 bg-[#F34419] rounded-[50px]">
                                        <p>Lihat testimoni</p>
                                        <Image src={'/right-arrow.svg'} width={24} height={24} alt="" />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section
                className="container py-14">
                <h2 className="text-6xl font-bold text-center">Testimoni MBKM Mahasiswa Informatika</h2>
                <p className="mt-4 text-3xl text-center">Kalian mau daftar MBKM tapi masih bingung mau daftar di mana? </p>
                <p className="mb-4 text-3xl text-center">Yuk simak testimoni-testimoni di berikut ini!</p>
                <CardSlider data={topMbkm} />
            </section>
        </>
    )
}
