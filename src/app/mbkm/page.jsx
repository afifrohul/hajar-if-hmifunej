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
            <section className="flex items-center justify-center bg-no-repeat bg-cover bg-primary bg-grid h-[400px] lg:h-[500px]">
                <div className="max-w-[1400px] p-5 flex flex-wrap lg:flex-nowrap items-center justify-between w-full">
                    <div className="max-w-2xl mt-10 text-white lg:mt-0">
                        <h1 className="mb-6 text-3xl font-bold lg:mb-12 lg:text-7xl">Merdeka Belajar Kampus Merdeka</h1>
                        <p className="text-lg opacity-80">Terstimoni mahasiswa terkait MBKM dan rekomendasi mitra bagi mahasiswa yang ingin mendaftar</p>
                    </div>
                    <div className="hidden lg:block">
                        <Image src={'/mbkm.svg'} width={520} height={200} alt="MBKM" className="mt-10 lg:mt-0" />
                    </div>
                </div>
            </section>
            <section className="container py-14">
                <h2 className="text-3xl font-bold text-center lg:text-6xl">Referensi Program MBKM Mahasiswa Informatika</h2>
                <div className="grid grid-cols-1 my-10 gap-x-20 gap-y-12 lg:grid-cols-2">
                    {
                        jenisMbkm.map((value, index) => (
                            <div key={index}
                                data-aos='fade-up'
                                data-aos-once={true}
                                className="rounded-xl lg:rounded-[50px] bg-[#FFE601] p-6 lg:p-12 lg:relative shadow-xl testimoni-card-odd ">
                                <h2 className='text-3xl font-bold lg:text-5xl'>{value.nama_jenis_mbkm}</h2>
                                <p className="py-4 lg:py-10">{value.deskripsi_jenis_mbkm}</p>

                                <div className="absolute bottom-0 px-3 py-3 -translate-x-1/2 translate-y-1/2 bg-white rounded-full shadow-lg left-1/2 lg:px-6 lg:py-6">
                                    <Link href={`/mbkm/${value.slug_jenis}`} className="flex text-sm font-medium lg:text-base lg:gap-1 gap-[1px] lg:px-4 lg:py-4 bg-[#F34419] neumorphism-mbkm lg:rounded-[50px] rounded-full py-2 px-3">
                                        <p className="text-white">Lihat testimoni</p>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section
                className="container py-4 lg:py-14">
                <h2 className="text-3xl font-bold text-center lg:text-6xl">Testimoni MBKM Mahasiswa Informatika</h2>
                <p className="mt-4 text-lg text-center lg:text-3xl">Kalian mau daftar MBKM tapi masih bingung mau daftar di mana? </p>
                <p className="mb-4 text-lg text-center lg:text-3xl">Yuk simak testimoni-testimoni di berikut ini!</p>
                <CardSlider data={topMbkm} />
            </section>
        </>
    )
}
